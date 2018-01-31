module.exports = {
  render() {
    let ul = document.createElement("ul");
    ul.classList.add("messages");
    ul.innerHTML = "An Inbox Message";
    return ul;
  }
}
