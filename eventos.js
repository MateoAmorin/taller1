document.addEventListener("DOMContentLoaded", function () {
    const divElement = document.querySelector("div");
  
    divElement.addEventListener("click", function () {
      alert("Hola! Soy el div");
    });
  
    const buttonElement = document.getElementById("saludarBtn");
  
    buttonElement.addEventListener("click", function () {
      alert("Hola!");
    });
  });
  