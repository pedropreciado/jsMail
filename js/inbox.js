let MessageStore = require("./message_store");

module.exports = {

  renderMessage(message) {
    let item = document.createElement("li");
    item.classList.add("message");

    item.innerHTML = `
    <span class="from">${message.from}</span>
    <span class="subject">${message.subject}</span>
    <span class="body">${message.body}</span>
    `

    return item;
  },

  render() {
    let ul = document.createElement("ul");
    ul.classList.add("messages");
    let messages = MessageStore.getInboxMessages();
    messages.forEach((message) => {
      let newMessage = this.renderMessage(message);
      ul.appendChild(newMessage);
    })
    return ul;
  }

}
