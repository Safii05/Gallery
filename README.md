# Ex.08 Design of Interactive Image Gallery
# Date: 
# AIM:
To design a web application for an inteactive image gallery with minimum five images.

# DESIGN STEPS:
## Step 1:
Clone the github repository and create Django admin interface.

## Step 2:
Change settings.py file to allow request from all hosts.

## Step 3:
Use CSS for positioning and styling.

## Step 4:
Write JavaScript program for implementing interactivity.

## Step 5:
Validate the HTML and CSS code.

## Step 6:
Publish the website in the given URL.

# PROGRAM :
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Interactive Photo Gallery</title>
    <link rel="stylesheet" href="c:\Users\admin\website\style css.css
    ">
</head>
<style>
    body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
    text-align: center;
}

h1 {
    margin-top: 20px;
    color: #333;
}

/* Gallery Grid Layout */
#gallery {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    justify-content: center;
    padding: 20px;
}

.photo {
    cursor: pointer;
    width: 200px;
    text-align: center;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    background-color: white;
}

.photo img {
    width: 100%;
    height: auto;
    border-bottom: 2px solid #ddd;
}

.photo p {
    margin: 10px 0;
    color: #333;
}

/* Lightbox Styling */
#lightbox {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
}

#lightboxImage {
    max-width: 90%;
    max-height: 80%;
}

#close {
    position: absolute;
    top: 10px;
    right: 20px;
    font-size: 30px;
    color: white;
    cursor: pointer;
}

/* Footer (Developed By) Section */
#footer {
    margin-top: 40px;
    padding: 20px;
    background-color: #333;
    color: white;
}

#footer p {
    margin: 5px;
}

#footer a {
    color: #f4f4f4;
    text-decoration: none;
}

#footer a:hover {
    text-decoration: underline;
}

</style>
<body>
    <h1>Photo Gallery</h1>
    <div id="gallery">
        <!-- Repeat this block for each image in the gallery -->
        <div class="photo" onclick="viewImage('images/photo1.jpg')">
            <img src="c:\Users\admin\Downloads\shih-tzu-temperament.jpeg-900x510.jpg" alt="Photo 1">
            <p>Photo 1</p>
        </div>
        <div class="photo" onclick="viewImage('images/photo2.jpg')">
            <img src="c:\Users\admin\Downloads\KOA_Nassau_2697x1517.jpg" alt="Photo 2">
            <p>Photo 2</p>
        </div>
        <div class="photo" onclick="viewImage('images/photo3.jpg')">
            <img src="c:\Users\admin\Downloads\hq720.jpg" alt="Photo 3">
            <p>Photo 3</p>
        </div>
        <div class="photo" onclick="viewImage('images/photo4.jpg')">
            <img src="c:\Users\admin\Downloads\images.jpeg" alt="Photo 4">
            <p>Photo 4</p>
        </div>
        <div class="photo" onclick="viewImage('images/photo5.jpg')">
            <img src="c:\Users\admin\Downloads\images (1).jpeg" alt="Photo 5">
            <p>Photo 5</p>
        </div>
    </div>

    <!-- Lightbox for viewing images -->
    <div id="lightbox" style="display: none;">
        <span id="close" onclick="closeLightbox()">X</span>
        <img id="lightboxImage" src="" alt="Full size image">
    </div>

    <script src="c:\Users\admin\website\scripts.js"></script>

    <!-- Developed By Section -->
    <footer id="footer">
        <p>Developed by <strong>Safira barveen</strong></p>
        <p>Find me on: 
            <a href="https://github.com/Safii05" target="_blank">GitHub</a> | 
    </footer>
</body>
</html>

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

/* General Styling */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
    text-align: center;
}

h1 {
    margin-top: 20px;
    color: #333;
}

/* Gallery Grid Layout */
#gallery {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    justify-content: center;
    padding: 20px;
}

.photo {
    cursor: pointer;
    width: 200px;
    text-align: center;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    background-color: white;
}

.photo img {
    width: 100%;
    height: auto;
    border-bottom: 2px solid #ddd;
}

.photo p {
    margin: 10px 0;
    color: #333;
}

/* Lightbox Styling */
#lightbox {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
}

#lightboxImage {
    max-width: 90%;
    max-height: 80%;
}

#close {
    position: absolute;
    top: 10px;
    right: 20px;
    font-size: 30px;
    color: white;
    cursor: pointer;
}

/* Footer (Developed By: Safira ) Section */
#footer {
    margin-top: 40px;
    padding: 20px;
    background-color: #333;
    color: white;
}

#footer p {
    margin: 5px;
}

#footer a {
    color: #f4f4f4;
    text-decoration: none;
}

#footer a:hover {
    text-decoration: underline;
}

```
# OUTPUT:
![Screenshot 2024-12-19 102441](https://github.com/user-attachments/assets/9489c71e-7cf6-45fe-8d05-c9d2a5d7aaeb)

# RESULT:
The program for designing an interactive image gallery using HTML, CSS and JavaScript is executed successfully.
