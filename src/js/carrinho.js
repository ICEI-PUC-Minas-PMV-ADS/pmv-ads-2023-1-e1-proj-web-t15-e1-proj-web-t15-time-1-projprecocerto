 
        document.getElementById("supermercados").addEventListener("change", changeValue);
        changeValue();
        function changeValue() {
            var supermercado = document.getElementById("supermercados").value;
            console.log(supermercado);
            if(supermercado == "carrefour"){
              document.getElementById("prod1").innerHTML = "Valor Total: R$ 4,50";
              document.getElementById("prod2").innerHTML = "Valor Total: R$ 24,50";
              document.getElementById("prod3").innerHTML = "Valor Total: R$ 12,50";
              document.getElementById("prod4").innerHTML = "Valor Total: R$ 12,00";
            }else if(supermercado == "supermercadoBh"){
              document.getElementById("prod1").innerHTML = "Valor Total: R$ 3,50";
              document.getElementById("prod2").innerHTML = "Valor Total: R$ 23,50";
              document.getElementById("prod3").innerHTML = "Valor Total: R$ 11,50";
              document.getElementById("prod4").innerHTML = "Valor Total: R$ 11,00";

            }else if(supermercado == "EPA"){
              document.getElementById("prod1").innerHTML = "Valor Total: R$ 5,50";
              document.getElementById("prod2").innerHTML = "Valor Total: R$ 25,50";
              document.getElementById("prod3").innerHTML = "Valor Total: R$ 13,50";
              document.getElementById("prod4").innerHTML = "Valor Total: R$ 13,00";

            }
            else{
              document.getElementById("prod1").innerHTML = "Selecione o Supermecado";
              document.getElementById("prod2").innerHTML = "Selecione o Supermecado";
              document.getElementById("prod3").innerHTML = "Selecione o Supermecado";
              document.getElementById("prod4").innerHTML = "Selecione o Supermecado";
            }
        }
    
    
        document.addEventListener("DOMContentLoaded", function () {
  var selectElement = document.getElementById("supermercados");

  selectElement.addEventListener("change", function () {
    var selectedOption = selectElement.value;

    if (selectedOption === "carrefour") {
      funcaoCarrefour();
    } else if (selectedOption === "supermercadoBh") {
      funcaoSupermercadoBh();
    } else if (selectedOption === "EPA") {
      funcaoEPA();
    }
  });

  function funcaoCarrefour() {
  var inputGroups = document.querySelectorAll(".input-group");
  var baseValues = [4.50, 24.50, 12.50, 12.00];
  var totalValues = document.querySelectorAll(".text-dark");

  inputGroups.forEach(function (group, index) {
    var input = group.querySelector("input");
    var increaseButton = group.querySelector(".bi-caret-up-fill");
    var decreaseButton = group.querySelector(".bi-caret-down-fill");

    increaseButton.addEventListener("click", function () {
      var value = parseInt(input.value);
      if (value < 10) {
        input.value = value + 1;
        updateTotalValue(index);
        calcularValorTotal();
      }
    });

    decreaseButton.addEventListener("click", function () {
      var value = parseInt(input.value);
      if (value > 1) {
        input.value = value - 1;
        updateTotalValue(index);
        calcularValorTotal();
      }
    });

    function updateTotalValue(index) {
      var value = parseInt(input.value);
      var totalPrice = baseValues[index] * value;
      totalValues[index].textContent = "Valor Total: R$ " + totalPrice.toFixed(2);
    }
  });

  var h4Total = document.querySelector("h4.text-dark.mb-3");

  function calcularValorTotal() {
    var totalSum = 0;

    inputGroups.forEach(function (group, index) {
      var input = group.querySelector("input");
      var value = parseInt(input.value);
      if (!isNaN(value)) {
        var totalPrice = baseValues[index] * value;
        totalSum += totalPrice;
      }
    });

    h4Total.textContent = "Valor Total: R$ " + totalSum.toFixed(2);
  }

  calcularValorTotal();
}

  function funcaoSupermercadoBh() {
    var inputGroups = document.querySelectorAll(".input-group");
    var baseValues = [3.50, 23.50, 11.50, 11.00];
    var totalValues = document.querySelectorAll(".text-dark");

    inputGroups.forEach(function (group, index) {
      var input = group.querySelector("input");
      var increaseButton = group.querySelector(".bi-caret-up-fill");
      var decreaseButton = group.querySelector(".bi-caret-down-fill");

      increaseButton.addEventListener("click", function () {
        var value = parseInt(input.value);
        if (value < 10) {
          input.value = value + 1;
          updateTotalValue(index);
          calcularValorTotal();
        }
      });

      decreaseButton.addEventListener("click", function () {
        var value = parseInt(input.value);
        if (value > 1) {
          input.value = value - 1;
          updateTotalValue(index);
          calcularValorTotal();
        }
      });

      function updateTotalValue(index) {
        var value = parseInt(input.value);
        var totalPrice = baseValues[index] * value;
        totalValues[index].textContent = "Valor Total: R$ " + totalPrice.toFixed(2);
      }
    });

    var h4Total = document.querySelector("h4.text-dark.mb-3");

    function calcularValorTotal() {
      var totalSum = 0;

      inputGroups.forEach(function (group, index) {
        var input = group.querySelector("input");
        var value = parseInt(input.value);
        if (!isNaN(value)) {
          var totalPrice = baseValues[index] * value;
          totalSum += totalPrice;
        }
      });

      h4Total.textContent = "Valor Total: R$ " + totalSum.toFixed(2);
    }

    calcularValorTotal();
  }

  function funcaoEPA() {
    var inputGroups = document.querySelectorAll(".input-group");
    var baseValues = [5.50, 25.50, 13.50, 13.00];
    var totalValues = document.querySelectorAll(".text-dark");

    inputGroups.forEach(function (group, index) {
      var input = group.querySelector("input");
      var increaseButton = group.querySelector(".bi-caret-up-fill");
      var decreaseButton = group.querySelector(".bi-caret-down-fill");

      increaseButton.addEventListener("click", function () {
        var value = parseInt(input.value);
        if (value < 10) {
          input.value = value + 1;
          updateTotalValue(index);
          calcularValorTotal();
        }
      });

      decreaseButton.addEventListener("click", function () {
        var value = parseInt(input.value);
        if (value > 1) {
          input.value = value - 1;
          updateTotalValue(index);
          calcularValorTotal();
        }
      });

      function updateTotalValue(index) {
        var value = parseInt(input.value);
        var totalPrice = baseValues[index] * value;
        totalValues[index].textContent = "Valor Total: R$ " + totalPrice.toFixed(2);
      }
    });

    var h4Total = document.querySelector("h4.text-dark.mb-3");

    function calcularValorTotal() {
      var totalSum = 0;

      inputGroups.forEach(function (group, index) {
        var input = group.querySelector("input");
        var value = parseInt(input.value);
        if (!isNaN(value)) {
          var totalPrice = baseValues[index] * value;
          totalSum += totalPrice;
        }
      });

      h4Total.textContent = "Valor Total: R$ " + totalSum.toFixed(2);
    }

    calcularValorTotal();
  }
});


     
        function removeList(icon) {
            var listItem = icon.closest('.list-group-item');
            listItem.remove();
        }
     