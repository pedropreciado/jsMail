document.addEventListener("DOMContentLoaded", () => {

  let navItems = document.querySelector(".sidebar-nav li");
  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      let name = item.innerText.toLowerCase();
      location.hash = name;
    })
  })
})
