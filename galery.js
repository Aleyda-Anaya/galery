function updateImage(previewPic) {
    const imageDiv = document.getElementById('image');
    imageDiv.style.backgroundImage = `url('${previewPic.src}')`;
    imageDiv.textContent = previewPic.alt;
}

function resetImage() {
    const imageDiv = document.getElementById('image');
    imageDiv.style.backgroundImage = "url('images/fondo.jpg')";
    imageDiv.textContent = "Pase el cursor por encima de una imagen para mostrarla aquí";
}
