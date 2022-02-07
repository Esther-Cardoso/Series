const temporadas = document.querySelectorAll("[data-temporadas] li");
const eps = document.querySelectorAll("[data-eps]");

if (eps.length && temporadas.length) {
  eps[0].classList.add("ativo");
  temporadas[0].classList.add("ativo");

  function activeTab(index) {
    eps.forEach((section) => {
      section.classList.remove("ativo");
    });
    temporadas.forEach((li) => {
      li.classList.remove("ativo");
    });
    eps[index].classList.add("ativo");
    temporadas[index].classList.add("ativo");
  }

  temporadas.forEach((item, index) => {
    item.addEventListener("click", () => {
      activeTab(index);
    });
  });
}
