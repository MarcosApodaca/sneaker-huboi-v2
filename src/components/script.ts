

  const zapatilla = (document.getElementById("zapatilla") as HTMLInputElement);
  const marcaZapatilla = (document.getElementById("marcaZapatilla") as HTMLInputElement);

  const nav = (document.getElementById("nav") as HTMLInputElement);

  const divNav = ( document.getElementById('divNav') as HTMLInputElement);



  zapatilla.addEventListener('mouseenter', () => {
    // marcaZapatilla.classList.add('nav-abierto')
    // zapatilla.classList.add('abrir-nav');
    nav.classList.add('nav-desplegado')
  });

 

// Cerrar nav cuando el cursor sale del header
divNav.addEventListener('mouseleave', () => {
    nav.classList.remove('nav-desplegado');
});




