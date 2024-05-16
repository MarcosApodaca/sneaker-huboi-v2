  let favorites = [];

 
  function renderFavorites() {
      const favoriteList = document.getElementById('favoriteList');
      favoriteList.innerHTML = '';

      favorites.forEach((favorite, index) => {
          const listItem = document.createElement('li');
          listItem.textContent = `${index + 1}. ${favorite}`;
          favoriteList.appendChild(listItem);
      });
  }

  // Función para agregar un nuevo favorito
  function addFavorite(event) {
      event.preventDefault();

      const favoriteInput = document.getElementById('favoriteInput');
      const newFavorite = favoriteInput.value.trim(); 

      if (newFavorite !== '') {
          favorites.push(newFavorite);
          renderFavorites(); 
          favoriteInput.value = ''; 
      }
  }

  // Asociar el evento 'submit' del formulario a la función addFavorite
  const favoriteForm = document.getElementById('favoriteForm');
  favoriteForm.addEventListener('submit', addFavorite);