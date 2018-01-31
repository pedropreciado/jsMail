let Router = require("./router");
let Inbox = require("./inbox");
let Sent = require("./sent");
let Compose = require("./compose");

let routes = {
  inbox: Inbox,
  sent: Sent,
  compose: Compose
}

document.addEventListener("DOMContentLoaded", () => {

  let content = document.querySelector(".content");
  let router = new Router(content, routes);
  router.start();

  location.hash = "inbox";

  let navItems = Array.from(document.querySelectorAll(".sidebar-nav li"));
  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      let name = item.innerText.toLowerCase();
      location.hash = name;
    })
  })

})
