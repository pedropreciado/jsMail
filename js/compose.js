let MessageStore = require("message_store");

module.exports = {
  render() {
    let div = document.createElement("div");
    div.classList.add("new-message");
    div.innerHTML = this.renderForm;
  },
  renderForm() {
    let draft = MessageStore.getMessageDraft();
    
  }

}
