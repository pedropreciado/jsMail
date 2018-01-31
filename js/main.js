let Router = require("./router");
let Inbox = require("./inbox");
let Sent = require("./sent");

let routes = {
  inbox: Inbox,
  sent: Sent
}

document.addEventListener("DOMContentLoaded", () => {

  let content = document.querySelector(".content");
  console.log(!!content);
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
