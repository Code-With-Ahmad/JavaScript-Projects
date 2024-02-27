// Wait for the document to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Get references to the output elements
    var firstOperand = document.getElementById("first");
    var operation = document.getElementById("operation");
    var secondOperand = document.getElementById("second");
    
    // Get references to the input elements
    var inputs = document.getElementsByClassName("input");
    
    // Attach click event listeners to the input elements
    for (var i = 0; i < inputs.length; i++) {
      inputs[i].addEventListener("click", function (event) {
        var clickedInput = event.target;
        var inputText = clickedInput.textContent.trim();
        
        // Handle numeric input
        if (!isNaN(inputText)) {
          if (operation.textContent.trim() === "") {
            firstOperand.textContent += inputText;
          } else {
            secondOperand.textContent += inputText;
          }
        }
        
        // Handle operator input
        if (["+", "-", "/", "x"].includes(inputText)) {
          operation.textContent = inputText;
        }
        
        // Handle clear input
        if (inputText === "C") {
          firstOperand.textContent = "";
          operation.textContent = "";
          secondOperand.textContent = "";
        }
        
        // Handle equal input
        if (inputText === "=") {
          var result;
          var num1 = parseFloat(firstOperand.textContent);
          var num2 = parseFloat(secondOperand.textContent);
          var operator = operation.textContent.trim();
          
          switch (operator) {
            case "+":
              result = num1 + num2;
              break;
            case "-":
              result = num1 - num2;
              break;
            case "/":
              result = num1 / num2;
              break;
            case "x":
              result = num1 * num2;
              break;
            default:
              result = "";
              break;
          }
          if(result == isNaN)
          {
            result = "Syntax Error " 
          }
          
          // Display the result
          firstOperand.textContent = result;
          operation.textContent = "";
          secondOperand.textContent = "";
        }
      });
    }
  });
  