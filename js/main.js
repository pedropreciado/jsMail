require("./router");

document.addEventListener("DOMContentLoaded", () => {

  let navItems = Array.from(document.querySelectorAll(".sidebar-nav li"));
  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      console.log("click");
      let name = item.innerText.toLowerCase();
      location.hash = name;
    })
  })
})
