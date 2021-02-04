var socket = io();

const messageInput = document.getElementById('message-input');
const chatMessages = document.getElementById('chat-messages');
const userList = document.querySelector('.user-list');
const roomList = document.querySelector('.room-list');

messageInput.focus();

messageInput.addEventListener('keydown', event => {
    if (event.key == 'Enter' && messageInput.value.trim() !== '') {
        socket.emit('chat_message', messageInput.value);
        messageInput.value = '';
    }
});



// socket.on('connection', userId => {
//     const item = document.createElement('li');
//     item.textContent = 'User ' + userId + ' connected';
//     chatMessages.appendChild(item);
//     chatMessages.scrollTop = chatMessages.scrollHeight;
// });

socket.on('updateUserList', userListObj => {
    userList.innerHTML = "";
    for (const userName in userListObj) {
        userList.innerHTML += `
        <div>
            <p>${ userName }</p>
        </div>`;
    }
});

socket.emit('createRoom', 'public');

socket.on('updateRoomList', roomListObj => {
    roomList.innerHTML = "";
    for(const roomName in Object.keys(roomListObj)) {
        roomList.innerHTML = `
            <div>
                <p>${ roomListObj['roomName'] }</p>
            </div>`;
    }
});

socket.on('chat_message', msgObj => {
    const item = document.createElement('div');
    item.innerHTML = `
        <div class="message">
            <p><b>${ msgObj.user } : </b></p>
            <p>${ msgObj.message }</p>
        </div>
    `
    chatMessages.appendChild(item);
});

document.getElementById('logout').onclick = function() {
    console.log('logout');
    location.href = '/logout';
};
