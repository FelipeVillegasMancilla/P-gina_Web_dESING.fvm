/* Arma la lista de trabajos de una página de área a partir de TRABAJOS:
   cada trabajo muestra su título y debajo su imagen o video. */
const medio = t => t.video
  ? `<video class="medio" src="${t.video}" muted loop autoplay playsinline></video>`
  : t.imagen ? `<img class="medio" src="${t.imagen}" alt="${t.titulo}">` : "";
document.getElementById("lista").innerHTML = TRABAJOS.length
  ? TRABAJOS.map(t=>`<li><span class="titulo">${t.titulo}</span>${medio(t)}</li>`).join("")
  : `<li><span class="titulo">Próximamente</span></li>`;
