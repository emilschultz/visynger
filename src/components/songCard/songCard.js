export const songCardTemplate = (songCardData) => {
  const { title, tag1, tag2, tag3, text, id, melody, lyrics, instrumental } =
    songCardData;

  return `
  <a href=/${id}>
    <h2>${title}</h2>≈
    <p>${text}</p>
    <p>${melody}</p>
    <div class="tags">
      <p>${tag1}</p>
      <p>${tag2}</p>
      <p>${tag3}</p>
    </div>
   <a>
  `;
};

// funktion
// gem onClicked's id til variable
// gå til /${sangid}

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
      text: this.getAttribute("text") || "",
      id: this.getAttribute("id") || "",
      lyrics: this.getAttribute("lyrics") || "",
      instrumental: this.getAttribute("instrumental") || "",
    };
    // let payload;
    // this.addEventListener("click", () => {

    // });

    this.innerHTML = this.render();
  }

  render() {
    return songCardTemplate(this.data);
  }
}
if (!customElements.get("song-card")) {
  customElements.define("song-card", SongCard);
}
