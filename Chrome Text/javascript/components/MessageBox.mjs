export function messageBox(text = "Message Box") {
    app.insertAdjacentHTML('afterbegin', `<div id="messageBox">${text}</div>`)
    setTimeout(() => {
        document.getElementById('messageBox').remove();
    }, 1000)
}
