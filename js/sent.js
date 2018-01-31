let MessageStore = require("./message_store");

module.exports = {

  renderMessage(message) {
    let item = document.createElement("li");
    item.classList.add("message");

    item.innerHTML = `
    <span class="to">${message.to}</span>
    <span class="subject">${message.subject}</span>
    <span class="body">${message.body}</span>
    `

    return item;
  },

  render() {
    let ul = document.createElement("ul");
    ul.classList.add("messages");
    let messages = MessageStore.getSentMessages();
    messages.forEach((message) => {
      let newMessage = this.renderMessage(message);
      ul.appendChild(newMessage);
    })

    return ul;
  }

}
