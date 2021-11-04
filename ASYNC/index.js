const BASE_URL = " https://api.thecatapi.com/v1/images/search/";
const btnCat = document.querySelector(".btn");
const catImg = document.querySelector(".showCat");

async function getCat() {
  try {
    const response = await fetch(BASE_URL);
    const json = await response.json();
    const { url } = json[0];
    return console.log({ url });
  } catch (e) {
    console.log(e.message);
  }
}

getCat();
