// class SongCard extends HTMLElement {
//   set song(song) {
//     this.innerHTML = `
//         <h2>${song.title}</h2>
//         <h5>Tekst: ${song.text}</h5>
//         <h5>Melodi: ${song.comhposer}</h5>
//         <p>${song.lyrics.body.html}</p>
//         `;
//   }
// }

// customElements.define("song-card", SongCard);
export const songCardTemplate = (songCardData) => {
  const { title, text, melody, lyrics } = songCardData;

  return `
  <h2>${title}</h2>
  <h5>Tekst: ${text}</h5>
  <h5>Melodi: ${melody}</h5>
  <p>${lyrics}</p>
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
      text: this.getAttribute("text") || "",
      melody: this.getAttribute("melody") || "",
      lyrics: this.getAttribute("lyrics") || "",
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
