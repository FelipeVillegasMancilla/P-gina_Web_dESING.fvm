/* Arma la lista de trabajos de una página de área a partir de TRABAJOS. */
document.getElementById("lista").innerHTML = TRABAJOS.length
  ? TRABAJOS.map(t=>`<li>${t}</li>`).join("")
  : `<li>Próximamente</li>`;
