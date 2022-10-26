export const navBarTemplate = (navbarData) => {
  const { link1 } = navbarData;

  return `
    <nav>
      <a href="${link1}">link1</a>
    </nav>
  `;
};

export class NavBar extends HTMLElement {
  constructor(navbarData) {
    super();
    this.data = navbarData;
  }

  connectedCallback() {
    this.data = {
      link1: this.getAttribute("link1") || "",
    };
    this.innerHTML = this.render();
  }
  render() {
    return navBarTemplate(this.data);
  }
}
if (!customElements.get("nav-bar")) {
  customElements.define("nav-bar", NavBar);
}
