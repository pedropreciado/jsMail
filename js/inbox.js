let MessageStore = require("./message_store");

module.exports = {
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
