const UrlApi = 'https://api.thecatapi.com/v1/images/search?limit=10';
const datos = document.getElementById("data");

function mostrarDatos(array) {
  for (let elemento of array) {
    datos.innerHTML += `
      <div>
        <img src="${elemento.url}" alt="Cat Image">
      </div>
    `;
  }
}

fetch(UrlApi)
  .then(response => response.json())
  .then(data => {
    mostrarDatos(data);
  })
  .catch(error => {
    console.error("Ocurrió un error", error);
  });
