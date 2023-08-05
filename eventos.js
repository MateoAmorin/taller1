document.addEventListener("DOMContentLoaded", function () {
  
 
    const divElement = document.querySelector("div");
    
      divElement.addEventListener("click", function (event) {
        alert("Hola! Soy el div");
        event.stopPropagation(); // Detiene la propagación del evento al div
      });
    
      
      });
    const buttonElement = document.getElementById("saludarBtn");
    
      buttonElement.addEventListener("click", function (event) {alert("Hola!");
        event.stopPropagation(); // Detiene la propagación del evento al div
      });
    