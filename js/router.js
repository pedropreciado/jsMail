class Router {

  constructor(node, routes) {
    this.node = node;
    this.routes = routes;
  }

  start() {
    this.render();
    window.addEventListener("hashchange", () => {
      this.render();
    })
  }

  render() {
    this.node.innerHTML = "";
    let component = this.activeRoute();

    let p = document.createElement("p");
    if (component) {
      this.node.appendChild(component.render());
    }

    p.innerHTML = this.activeRoute();
    this.node.appendChild(p);

  }

  activeRoute() {
    let hashFragment = window.location.hash;
    hashFragment = hashFragment.substring(1, hashFragment.length);
    let component = this.routes[hashFragment];
    return component;
  }
}

module.exports = Router;
