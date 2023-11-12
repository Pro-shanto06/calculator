document.addEventListener('DOMContentLoaded', function () {
    let operationDisplay = document.getElementById('operation');
    let typedDisplay = document.getElementById('typed');
    let buttons = document.getElementById('buttons');

  
    buttons.addEventListener('click', function (e) {
      if (e.target.matches('.button')) {
        handleButtonClick(e.target.dataset.value);
      }
    });
  
    function handleButtonClick(value) {
      switch (value) {
        case 'C':
          clearDisplay();
          break;
        case '=':
          calculate();
          break;
        case '%':
          handlePercentage();
          break;
        default:
          appendToDisplay(value);
      }
    }
    
    function appendToDisplay(value) {
      typedDisplay.textContent += value;
    }
  
    function clearDisplay() {
      operationDisplay.textContent = '';
      typedDisplay.textContent = '';
    }
  
    function calculate() {  
        operationDisplay.textContent = typedDisplay.textContent;
        typedDisplay.textContent = eval(typedDisplay.textContent); 
    }

    function handlePercentage() {
     
        let expression = typedDisplay.textContent;
        let result = eval(expression) / 100;
        typedDisplay.textContent = result;
    }
  });
  