// Peer A is initiator

// local connection ??
const localConnection = new RTCPeerConnection();
const dataChannel = localConnection.createDataChannel('Channel name');

dataChannel.onmessage = (event) => console.log('Just go a message: ' + event.data);
dataChannel.onopen = () => console.log('Connection open');

localConnection.onicecandidate = () => {
    console.log('New ICE candidate reprinting SDP' + JSON.stringify(localConnection.localDescription));
};

// Offer is SDP (Session Description Protocol)
// localConnection.createOffer()
//     .then(
//         offer => localConnection.setLocalDescription(offer)
//     ).then(
//         () => console.log('Set successfully')
//     );

// localConnection.setRemoteDescription(answer);
