import "./entity-vignette.js";

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString) ;

if (urlParams.get("query")) {
  searchOrgs(urlParams.get("query"));
}

async function searchOrgs(query) {
  document.getElementById("buttonSpinner").classList.remove("visually-hidden")
  document.getElementById("buttonReady").classList.add("visually-hidden")

  const main = document.querySelector("main");
  const api = "https://api.artsdata.ca/recon";
  const payload = { query: query };
  const urlParams = new URLSearchParams(payload);
  const url = `${api}?${urlParams}`;

  const res = await fetch(url);
  const json = await res.json();

  console.log(json);
  const displayQuery = document.querySelector("query");
  displayQuery.innerHTML = "Results for " + query[0].toUpperCase() + query.substring(1) + "...";
  json.result.forEach((entity) => {
    if (entity.name.search(/error/i) == -1 && entity.name.search(/event .* property changed/i) == -1) {
      const el = document.createElement("entity-vignette");
      el.entity = entity;
      main.appendChild(el);
    } 
   
  });

  document.getElementById("buttonSpinner").classList.add("visually-hidden")
  document.getElementById("buttonReady").classList.remove("visually-hidden")

}

