const searchSongs = () => {
  const searchText = document.getElementById("search-field").value;
  const url = `https://api.lyrics.ovh/suggest/${searchText}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displaySongs(data.data));
};

const displaySongs = (songs) => {
  const searchContainer = document.getElementById("searchContainer");
  songs.forEach((song) => {
    const songDiv = document.createElement("div");
    songDiv.className =
      "single-result justify-content-around row align-items-center my-3 p-3 ";
    songDiv.innerHTML = `
        <img class="rounded" src="${song.album.cover}"></img>
        <div class="col-md-9 d-flex justify-content-between">
            <h4 class="lyrics-name">${song.title}</h4>
            <p class="author lead">Album by <span>${song.artist.name}</span></p>
            <audio controls>
              <source src ="${song.preview}" type = "audio/mpeg">
            <audio>
        </div>
        <button onclick = "getLyric('${song.artist.name}', '${song.title}')" class="btn btn-success btn-block m-3">Get Lyrics</button>
    `;
    searchContainer.appendChild(songDiv);
  });
};

const getLyric = (artist, title) => {
  console.log(artist, title);
};
