const getData = async () => {
  const result = await fetch("https://swapi.dev/api/films/");
  const data = await result.json();
  return data;
}

const createMovies = (data) => {
  //return data.results.reduce((html, currentMovie) => html.slice(0, -6) + movieComponent(currentMovie) + '</div>', '<div class="movies"></div>');

  return `<div class="movies">${data.results.map(movieComponent).join("")}</div>`
}

const movieComponent = (movieData) => {
  return `
    <h2>${movieData.title}</h2>
    <p>${movieData.opening_crawl}</p>
  `;
}

const loadEvent = async () => {
  const rootElement = document.querySelector("#root");
  const data = await getData();

  rootElement.insertAdjacentHTML("beforeend", createMovies(data));
}

window.addEventListener("load", loadEvent);