const socket = io();

const formElement = document.getElementById('chat-form')

formElement.addEventListener('submit', (event) => {
    event.preventDefault()
    const msg = event.target.elements.msg.value
    socket.emit('chatMsg', msg)
    event.target.elements.msg.value=''
    event.target.elements.msg.focus()
})

const container = document.querySelector(".chat-messages");

const outputMsg=(m)=>{
    const div = document.createElement('div')

    div.classList.add('message')
    div.innerHTML = `<p class='meta'>John
    <span>12:20pm</span></p><p class='text'>${m}</p>`;
    container.appendChild(div)
}


socket.on('message', (data) => {
    console.log(data);
    outputMsg(data)
    container.scrollTop=container.scrollHeight
})