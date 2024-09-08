function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //Pegar a tag imagem
  const img = document.querySelector("#profile img")

  //Substituir a imagem
  if (html.classList.contains("light")) {
    // Se tiver light mode, adicionar a imagem "light"
    img.setAttribute("src", "./assets/avatar_light.png")
  } else {
    //Se tiver sem light mode, manter a imagem inicial
    img.setAttribute("src", "./assets/avatar_dark.png")
  }
}
