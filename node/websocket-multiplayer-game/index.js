const http = require('http');
const websocket = require('websocket');
const app = require('express')();

const hostname = '0.0.0.0';
const websocketPort = process.env.NODE_PORT || 3000;
const htmlPort = 3001;

// Clients object a Hashmap 
const clients = {};

// Games object a Hashmap
const games = {};

const colors = {
    '0': 'red',
    '1': 'green',
    '2': 'blue'
}

const httpServer = http.createServer();
// When we first establish connection the TCP connection is created
httpServer.listen(websocketPort, hostname, () => {
    console.log(`websocket Server running at http://${hostname}:${websocketPort}/`);
});

// Listen for html
app.listen(htmlPort, hostname, () => {
    console.log(`html Server running at http://${hostname}:${htmlPort}/`);
});

// Serve html content
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Pass TCP connection to Websocket logic
const websocketServer = new websocket.server({
    "httpServer": httpServer
});

let count = 0;

async function counter() {
    if (count > 3) count = 0;
    // console.log(clients);
    console.log(count);
    // BROADCAST TO ALL CLIENTS
    for (let client in clients) {
        const payload = {
            'method': 'count',
            'data': {
                'counter': count
            }
        }
        try {
            clients[client].connection.send(JSON.stringify(payload));
        } catch (e) {
            console.log('client connection error?' + e);
        }
    }

    count++;
}

setInterval(counter, 1000);

websocketServer.on('request', request => {
    // Connect
    const connection = request.accept(null, request.origin);

    // On every request
    // generate  a new clientId
    const clientId = guid();

    // Add client to clients object
    clients[clientId] = {
        'connection': connection
    }

    const payload = {
        'method': 'connect',
        'clientId': clientId
    }

    connection.on('open', () => console.log('connection opened!'));
    connection.on('close', () => console.log('connection closed!'));

    connection.on('message', message => {
        // Message from client
        // Here we assume that all are good clients and they will send JSON,
        // so following expression is not good for Production
        const result = JSON.parse(message.utf8Data);
        console.log(result);
        const clientId = result.clientId; // Lets assume that client allways sends clientId


        // When client sends create method
        if (result.method === 'create') {
            // Create unique game id
            const gameId = guid();

            games[gameId] = {
                'id': gameId,
                'balls': 20,
                'clients': []
            }

            const payload = {
                'method': 'create',
                'game': games[gameId]
            }

            const connection = clients[clientId].connection;
            connection.send(JSON.stringify(payload));
        }

        // When client sends join method
        if (result.method === 'join') {
            const gameId = result.gameId;
            const game = games[gameId]; // Find game in hashmap

            if (game.clients.lenght >= 3) {
                console.log('MAX PLAYERS REACHED!!')
                return;
            }

            game.clients.push({
                'clientId': clientId,
                'color': colors[game.clients.length]
            });

            const payload = {
                'method': 'join',
                'game': game
            };

            // Loop through each game client and send payload
            game.clients.forEach((client) => {
                clients[client.clientId].connection.send(JSON.stringify(payload));
            });
        }
    });

    // send method only understand bytes, have to turn it into string or numbers, not a JSON object
    // Send back the client connect
    connection.send(JSON.stringify(payload));
});



/**
 * https://www.npmjs.com/package/uuid
 * I think should use above instead of GUID
 */

// GUID - Globally Unique Identifier <-- Comming from Microsoft OS
// UUID - Universally Unique Identifier
function S4() {
    return (((1+Math.random())*0x10000)|0).toString(16).substring(1); 
}
 
// then to call it, plus stitch in '4' in the third group
const guid = () => (S4() + S4() + "-" + S4() + "-4" + S4().substr(0,3) + "-" + S4() + "-" + S4() + S4() + S4()).toLowerCase();
