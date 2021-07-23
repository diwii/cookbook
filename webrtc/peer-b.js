// Peer B is reciever
const remoteConnection = new RTCPeerConnection();

remoteConnection.onicecandidate = () => {
    console.log('New ICE candidate reprinting SDP' + JSON.stringify(remoteConnection.localDescription));
};

remoteConnection.ondatachannel = (event) => {
    remoteConnection.dataChannel = event.channel;
    remoteConnection.dataChannel.onmessage = (event) => console.log('New message from client' + event.data);
    remoteConnection.dataChannel.onopen = () => console.log('Connection Opened!');
};

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