class Router {
  contructor(node) {
    this.node = node;
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
    p.innerHTML = component;
    this.node.appendChild(p);
  }

  activeRoute() {
    let hashFragment = window.location.hash;
    hashFragment = hashFragment.substring(1, hashFragment.length);
    return hashFragment;
  }
}
