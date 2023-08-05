document.addEventListener("DOMContentLoaded", function () {
    const divElement = document.querySelector("div");
  
    divElement.addEventListener("click", function () {
      alert("Hola! Soy el div");
    });
  


 buttonElement.addEventListener("click", function (event) {
        event.stopPropagation(); // Detiene la propagación del evento al div
            alert("Hola!");
   
    });
 });
  