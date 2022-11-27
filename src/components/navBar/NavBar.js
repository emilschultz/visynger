export const navBarTemplate = (navbarData) => {
  const { home, categories } = navbarData;

  return `
    <nav>
      <a href="${home}">home</a>
      <a href="${categories}">Kategorier</a>
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
      home: this.getAttribute("home") || "",
      categories: this.getAttribute("categories") || "",
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
