let MessageStore = require("./message_store");

module.exports = {
  render() {
    let div = document.createElement("div");
    div.classList.add("new-message");
    div.innerHTML = this.renderForm();

    div.addEventListener("change", (event) => {
      let target = event.target;
      MessageStore.updateDraftField(target.name, target.value);
    });

    div.addEventListener("submit", (event) => {
      event.preventDefault();
      MessageStore.sendDraft();
      window.location.hash = "inbox";
    });


    return div;
  },

  renderForm() {
    let draft = MessageStore.getMessageDraft();
    let html = `
    <p class='new-message-header'>'New Message'</p>
    <form class='compose-form'>
      <input
      placeholder='Recipient'
      name='to'
      type='text'
      value="${draft.to}">

      <input
      placeholder="Subject"
      name="subject"
      type="text"
      value="${draft.subject}">

      <textarea
      name="body"
      rows=20
      >
      ${draft.body}
      </textarea>

      <button
      type="submit"
      class="btn btn-primary submit-message"
      >
      Send
      </button>
    </form>
    `

    return html;
  }

}
