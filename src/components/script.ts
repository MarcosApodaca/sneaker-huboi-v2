

  const zapatilla = (document.getElementById("zapatilla") as HTMLInputElement);
  const marcaZapatilla = (document.getElementById("marcaZapatilla") as HTMLInputElement);

  const nav = (document.getElementById("nav") as HTMLInputElement);

  const divNav = ( document.getElementById('divNav') as HTMLInputElement);



  zapatilla.addEventListener("mouseenter", () => {
    if (window.innerWidth >= 1024) {
      nav.classList.add("nav-desplegado");
      marcaZapatilla.classList.add("lista-marcas");
    }
  });
  
  nav.addEventListener("mouseleave", () => {
    if (window.innerWidth >= 1024) {
      nav.classList.remove("nav-desplegado");
      marcaZapatilla.classList.remove("lista-marcas");
    }
  });



