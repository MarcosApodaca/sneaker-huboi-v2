

  const zapatilla = (document.getElementById("zapatilla") as HTMLInputElement);
  const marcaZapatilla = (document.getElementById("marcaZapatilla") as HTMLInputElement);

  const nav = (document.getElementById("nav") as HTMLInputElement);

  const divNav = ( document.getElementById('divNav') as HTMLInputElement);



zapatilla.addEventListener('mouseenter', () => {
    // marcaZapatilla.classList.add('nav-abierto')
    // zapatilla.classList.add('abrir-nav');
  nav.classList.add('nav-desplegado')
  marcaZapatilla.classList.add('lista-marcas')

});

 
divNav.addEventListener('mouseleave', () => {
  nav.classList.remove('nav-desplegado')
  marcaZapatilla.classList.remove('lista-marcas')
  
});




