class OrgVignette extends HTMLElement {
  set org(org) {
 
    this.innerHTML = `
      <div  class="list-group">
      <a ${org.id[0] != "K" && org.type[0].name != "Event" ? "" : "href='http://kg.artsdata.ca/resource/" + encodeURIComponent(org.id) + "'"} class="${org.match && org.id[0] == "K" && "list-group-item-primary" } list-group-item list-group-item-action d-flex justify-content-between align-items-start">
      <div class="ms-2 me-auto">
      <div class="fw-bold">${encodeHTMLEntities(truncate(org.name))}</div>
      ${org.type[0].name} ${org.description && " - " + encodeHTMLEntities(org.description)}  ${org.type[0].name == "WebPage"  ?   " - " + org.id.substr(4, 100) : ""}
      </div>
      <span class="badge bg-secondary rounded-pill">${org.id[0] == "K" ? org.id : ""}</span>
      </a>
      </div>`;
  }
}

function encodeHTMLEntities(rawStr) {
  return rawStr.replace(/[\u00A0-\u9999<>\&]/g, ((i) => `&#${i.charCodeAt(0)};`));
}

const truncate = (input) => input.length > 100 ? `${input.substring(0, 100)}...` : input;


customElements.define("org-vignette", OrgVignette);
