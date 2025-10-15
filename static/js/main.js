(function(){
  const screen = document.getElementById("scream");
  const numbers = document.querySelectorAll(".number");
  const operators = document.querySelectorAll(".operator");
  const clear = document.getElementById("clear");
  const equal = document.getElementById("igual");

  const addToScreen = (value) => {
    screen.value += value;
  };

  numbers.forEach((boton) => {
    boton.addEventListener("click", () => {
      addToScreen(boton.textContent);
    });
  });

  operators.forEach((boton) => {
    boton.addEventListener("click", () => {
      const operation = boton.textContent;
      if   (operation ==="x") {
        addToScreen("*");
      }
      else if (operation ==="÷") {
        addToScreen("/");
      }
      else {
         addToScreen(operation);
      }
    });
  });

  clear.addEventListener("click", () => {
    screen.value = "";
  });

  equal.addEventListener("click", () => {
    try {
      const result = eval(screen.value);
      screen.value = result;
    }
    catch (error) {
      alert("Operación no válida");
      screen.value = "";
    }
  });
})();

