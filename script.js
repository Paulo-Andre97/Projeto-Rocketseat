function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle("light");

  const profileImage = document.querySelector("#profile img");

  // Use a ternary operator instead of the if statement.
  profileImage.setAttribute("src", html.classList.contains("light")  ,"./assets/avatar-light-.png" ,"./assets/avatar.png");

  // Adicione um intervalo de tempo para verificar se a imagem está sendo trocada corretamente.
  setTimeout(() => {
    console.log(profileImage);
  }, 1000);
}