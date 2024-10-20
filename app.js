const JakeSelectorbtn = document.querySelector('#Jake-selector')
const FeliSelectorbtn = document.querySelector('#Feli-selector')
const chatHeader = document.querySelector('chat-header')
const chatMassages = document.querySelector('chat-massages')
const chatInputForm = document.querySelector('chat-input-form')
const chatInput = document.querySelector('chat-input')
const clearChatBtn = document.querySelector('clear-chat-button')

const chatMassagesElement = (massages) => `
    <div class="massages ${massages-sender === 'Jake' ? 'blue-bg' : 'pink-bg'}"> 
        <div class= "massages-sender">${massages.sender}</div>
        <div class="massages-text">${massages.text}</div>
        <div class="massages-times">${massages.times}</div>
    </div>
`
let massageSender = 'Jake'
const updateMassageSender = (name) => {
    massageSender = name
    chatHeader.innerText = `${massageSender} chatting...`
    chatInput.placeholder = `Type here, ${massageSender}...`

    if (name === 'Jake') {

    }

}
