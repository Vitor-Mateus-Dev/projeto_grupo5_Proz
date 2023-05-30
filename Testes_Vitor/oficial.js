function trocarMetade() {
  var image = document.querySelector(".image");

  if (image.classList.contains("image-left")) {
    // Mover a imagem para a metade direita
    image.classList.remove("image-left");
    image.classList.add("image-right");
  } else {
    // Mover a imagem para a metade esquerda
    image.classList.remove("image-right");
    image.classList.add("image-left");
  }
}