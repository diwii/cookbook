// Peer B is reciever

const notifications = document.querySelector('#notification');

const messageInput = document.querySelector('#message');
const buttonSendMessage = document.querySelector('#send-message');
buttonSendMessage.addEventListener('click', sendMessage);

const offerInput = document.querySelector('#offer');
const buttonSetOffer = document.querySelector('#set-offer');
buttonSetOffer.addEventListener('click', setOffer);

const buttonCreateAnswer = document.querySelector('#create-answer');
buttonCreateAnswer.addEventListener('click', createAnswer);

const remoteConnection = new RTCPeerConnection();

remoteConnection.onicecandidate = () => {
    pushNotification(JSON.stringify(remoteConnection.localDescription));
    console.log('New ICE candidate reprinting SDP' + JSON.stringify(remoteConnection.localDescription));
};

remoteConnection.ondatachannel = (event) => {
    remoteConnection.dataChannel = event.channel;
    remoteConnection.dataChannel.onmessage = (event) => {
        pushNotification(event.data);
        console.log('New message from client' + event.data)
    };
    remoteConnection.dataChannel.onopen = () => {
        pushNotification('Connection Opened!');
        console.log('Connection Opened!')
    };
};

function pushNotification(message) {
    const copyText = () => {
        const placeholderInput = document.createElement('input');
        placeholderInput.value = message;
        document.body.prepend(placeholderInput);
        placeholderInput.select();
        document.execCommand("copy");
        placeholderInput.remove();
    }

    let listItem = document.createElement('li');
    listItem.addEventListener('click', copyText);
    listItem.innerText = message;
    notification.append(listItem);
}

function setOffer() {
    console.log(offerInput.value);
    remoteConnection.setRemoteDescription(JSON.parse(offerInput.value))
        .then(
            () => pushNotification('Offer set')
        );
}

function createAnswer() {
    remoteConnection.createAnswer()
    .then(
        (answer) => remoteConnection.setLocalDescription(answer)
    ).then(
        () => pushNotification('Answer created')
    );
}

function sendMessage() {
    remoteConnection.dataChannel.send(messageInput.value);
}

// offer is SDP from initiator

// remoteConnection.setRemoteDescription(offer)
//     .then(
//         () => console.log('Offer set')
//     );

// remoteConnection.createAnswer()
//     .then(
//         (answer) => remoteConnection.setLocalDescription(answer)
//     ).then(
//         () => console.log('Answer created')
//     );
