// ===============================
// ArtVista Gallery Image Slider
// ===============================

var images = [
    "images/banner1.png",
    "images/banner2.png",
    "images/banner3.png"
];

var currentImage = 0;

function showImage() {
    document.getElementById("slideImage").src = images[currentImage];
}

function nextImage() {
    currentImage++;

    if (currentImage >= images.length) {
        currentImage = 0;
    }

    showImage();
}

function previousImage() {
    currentImage--;

    if (currentImage < 0) {
        currentImage = images.length - 1;
    }

    showImage();
}

// Automatic slider
setInterval(nextImage, 3000);