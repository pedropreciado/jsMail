let Router = require("./router");

document.addEventListener("DOMContentLoaded", () => {

  let content = document.querySelector(".content");
  console.log(!!content);
  let router = new Router(content);
  router.start();

  let navItems = Array.from(document.querySelectorAll(".sidebar-nav li"));
  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      let name = item.innerText.toLowerCase();
      location.hash = name;
    })
  })

})
