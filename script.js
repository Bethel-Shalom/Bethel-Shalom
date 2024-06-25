// JavaScript pour la gestion de la galerie d'images (simulé)

// Supposons que les images et légendes sont chargées dynamiquement depuis une source externe.

// Array de données pour les images (URL et description)
const imagesData = [
  { src: 'image1.jpg', description: 'Description de l\'image 1.' },
  { src: 'image2.jpg', description: 'Description de l\'image 2.' },
  // Ajoutez plus d'images au besoin
];

// Fonction pour charger la galerie d'images
function loadGallery() {
  const gallery = document.querySelector('.gallery');

  imagesData.forEach(image => {
    const galleryItem = document.createElement('div');
    galleryItem.classList.add('gallery-item');

    const img = document.createElement('img');
    img.src = image.src;
    img.alt = 'Image';
    galleryItem.appendChild(img);

    const description = document.createElement('p');
    description.textContent = image.description;
    galleryItem.appendChild(description);

    gallery.appendChild(galleryItem);
  });
}

// Appel de la fonction pour charger la galerie au chargement de la page
window.addEventListener('load', loadGallery);
