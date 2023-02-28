import "./org-vignette.js";

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const displayQuery = document.querySelector("query");
displayQuery.innerHTML = urlParams.get("org")[0].toUpperCase() + urlParams.get("org").substring(1) + "...";

async function searchOrgs(query) {
  const main = document.querySelector("main");
  const api = "https://api.artsdata.ca/recon";
  const payload = { query: query, type: "schema:Organization" };
  const urlParams = new URLSearchParams(payload);
  const url = `${api}?${urlParams}`;
  const res = await fetch(url);
  const json = await res.json();
  console.log(json);

  json.result.forEach((org) => {
    console.log(org.name)
    const el = document.createElement("org-vignette");
    el.org = org;
    main.appendChild(el);
  });

}
searchOrgs(urlParams.get("org"));
