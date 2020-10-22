async function getPokemon(id) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
  const data = await response.json();
  return data;
}

async function init() {
  const firstPokemon = await getPokemon(1)
  updatePokemon(firstPokemon);
}

init();

function updatePokemon(pokemon) {
  window.pokemon.textContent = pokemon.name;
  window.image.setAttribute(
    "src",
    pokemon.sprites.other.dream_world.front_default
  );
}

window.search.addEventListener("change", async  () => {
  const pokemon = await getPokemon(window.search.value);
  updatePokemon(pokemon);
});

// SOCIAL PANEL JS
const floating_btn = document.querySelector(".floating-btn");
const close_btn = document.querySelector(".close-btn");
const social_panel_container = document.querySelector(
  ".social-panel-container"
);

floating_btn.addEventListener("click", () => {
  social_panel_container.classList.toggle("visible");
});

close_btn.addEventListener("click", () => {
  social_panel_container.classList.remove("visible");
});