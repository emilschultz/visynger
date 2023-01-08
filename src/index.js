// forstå lige Request metoden ordentligt
import "./components/songCard/songCard.js";
import "./components/navBar/NavBar.js";
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

  console.log(json.data);

  let tagOne;
  let tagTwo;
  let tagThree;

  json.data.forEach((song) => {
    tagOne = song.tags[0];
    tagTwo = song.tags[1];
    tagThree = song.tags[2];

    songSection.innerHTML += `<song-card instrumental="${
      song.instrumental
    }" lyrics="${song.lyrics}" id="${song.id}"
    )}" title="${song.title}" text="${song.text}" melody="${
      song.melody
    }" tag1="${tagOne || ""}" tag2="${tagTwo || ""}" tag3="${
      tagThree || ""
    }"></song-card>`;
  });
}
