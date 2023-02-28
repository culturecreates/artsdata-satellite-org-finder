class OrgVignette extends HTMLElement {
  set org(org) {
 
    this.innerHTML = `
      <ul class="list-group">
      <li href="#" class=" ${org.match && "list-group-item-primary" } list-group-item list-group-item-action d-flex justify-content-between align-items-start">
      <div class="ms-2 me-auto">
      <div class="fw-bold">${org.name}</div>
      ${org.description}
      </div>
      <span class="badge bg-secondary rounded-pill">${org.id}</span>
      </li>
      </ul>`;
  }
}

customElements.define("org-vignette", OrgVignette);
