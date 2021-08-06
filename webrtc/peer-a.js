// Peer A is initiator

let offer = '';

const notifications = document.querySelector('#notification');

const messageInput = document.querySelector('#message');
const buttonSendMessage = document.querySelector('#send-message');
buttonSendMessage.addEventListener('click', sendMessage);

const answerInput = document.querySelector('#answer');
const buttonSetAnswer = document.querySelector('#set-answer');
buttonSetAnswer.addEventListener('click', setAnswer);

const buttonCreateOffer = document.querySelector('#create-offer');
buttonCreateOffer.addEventListener('click', createNewOffer);

// local connection ??
const localConnection = new RTCPeerConnection();
const dataChannel = localConnection.createDataChannel('Channel name');

dataChannel.onmessage = (event) => {
    pushNotification(event.data);
    console.log('Just go a message: ' + event.data)
};
dataChannel.onopen = () => {
    pushNotification('Connection open');
    console.log('Connection open')
};

localConnection.onicecandidate = () => {
    pushNotification(JSON.stringify(localConnection.localDescription));
    console.log('New ICE candidate reprinting SDP' + JSON.stringify(localConnection.localDescription));
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

function createNewOffer() {
    localConnection.createOffer()
    .then(
        offer => localConnection.setLocalDescription(offer)
    ).then(
        () => pushNotification('Offer created')
    );
}

function setAnswer() {
    localConnection.setRemoteDescription(JSON.parse(answerInput.value));
}

function sendMessage() {
    dataChannel.send(messageInput.value);
}

// Offer is SDP (Session Description Protocol)
// localConnection.createOffer()
//     .then(
//         offer => localConnection.setLocalDescription(offer)
//     ).then(
//         () => console.log('Set successfully')
//     );

// localConnection.setRemoteDescription(answer);
