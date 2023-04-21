class EntityVignette extends HTMLElement {
  set entity(entity) {
    this.innerHTML = `
      <div  class="list-group">
      <a ${
        entity.type[0].name == "WebPage" || entity.type[0].name == "Observation"
          ? ""
          : "href='#' onclick='followLink(\"" + encodeURIComponent(entity.id) + "\")'"
      } class="${
      entity.match && entity.id[0] == "K" && "list-group-item-primary"
    } list-group-item list-group-item-action d-flex justify-content-between align-items-start">
      <div class="ms-2 me-auto">
      <div class="fw-bold">${encodeHTMLEntities(truncate(entity.name))}</div>
      ${entity.type[0].name} ${
        entity.description && " - " + encodeHTMLEntities(entity.description)
    }  ${
      entity.type[0].name == "WebPage"
        ? " <span class='fw-lighter'>" + entity.id.substr(4, 100) + "</span>"
        : ""
    }
      </div>
      <span class="badge bg-secondary rounded-pill">${
        entity.id[0] == "K" || entity.type[0].name == "Concept" ? entity.id : ""
      }</span>
      </a>
      </div>`;
  }
}



function encodeHTMLEntities(rawStr) {
  return rawStr.replace(/[\u00A0-\u9999<>\&]/g, (i) => `&#${i.charCodeAt(0)};`);
}

const truncate = (input) =>
  input.length > 100 ? `${input.substring(0, 100)}...` : input;

customElements.define("entity-vignette", EntityVignette);
