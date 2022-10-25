// import NavBar from "./components/navBar/index";
// forstå lige Request metoden ordentligt
import "./components/songCard/songCard.js";
const requestSongs = new Request("https://kjoller.p.rapidapi.com/songs");
const songSection = document.getElementById("allSongs");

window.addEventListener("load", () => {
  getSongs();
});

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "00c14e5c06mshe839a2f8fc92b63p133489jsnd629f0a2537c",
    "X-RapidAPI-Host": "kjoller.p.rapidapi.com",
  },
};

async function getSongs() {
  const res = await fetch(requestSongs, options);
  const json = await res.json();

  // songData.push(data);
  json.data.forEach((song) => {
    songSection.innerHTML += `<song-card title="${song.title}" text="${song.text}" melody="${song.melody}" lyrics="${song.lyrics.body.html}"></song-card>`;
  });
}
