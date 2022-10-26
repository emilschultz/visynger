export const songCardTemplate = (songCardData) => {
  const { title, tag1, tag2, tag3 } = songCardData;

  return `
  <article>
    <h2>${title}</h2>
    <div class="tags">
      <p>${tag1}</p>
      <p>${tag2}</p>
      <p>${tag3}</p>
    </div>
  </article>
  `;
};

export class SongCard extends HTMLElement {
  constructor(songCardData) {
    super();
    this.data = songCardData;
  }
  connectedCallback() {
    this.data = {
      title: this.getAttribute("title") || "",
      tags: this.getAttribute("tags") || "",
      tag1: this.getAttribute("tag1") || "",
      tag2: this.getAttribute("tag2") || "",
      tag3: this.getAttribute("tag3") || "",
    };
    this.innerHTML = this.render();
  }
  render() {
    return songCardTemplate(this.data);
  }
}
if (!customElements.get("song-card")) {
  customElements.define("song-card", SongCard);
}
