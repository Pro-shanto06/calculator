document.addEventListener('DOMContentLoaded', function () {
    let operationDisplay = document.getElementById('operation');
    let typedDisplay = document.getElementById('typed');
   
  
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
  });
  