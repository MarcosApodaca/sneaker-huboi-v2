  let favorites = [];

 
  function renderFavorites() {
    const favoriteList = document.getElementById('favoriteList');
    favoriteList.innerHTML = '';

    favorites.forEach((favorite, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = favorite;
        
        // Crear botón para eliminar
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.classList.add('delete-btn');
        deleteButton.addEventListener('click', () => {
            deleteFavorite(index);
        });

        listItem.appendChild(deleteButton);
        favoriteList.appendChild(listItem);
    });
}



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

  const favoriteForm = document.getElementById('favoriteForm');
  favoriteForm.addEventListener('submit', addFavorite);