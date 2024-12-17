scripts.js

// Function to display the lightbox with the selected image
function viewImage(imageUrl) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    
    // Set the image source to the clicked image URL
    lightbox.style.display = 'flex';
    lightboxImage.src = imageUrl;
}

// Function to close the lightbox
function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
}