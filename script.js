 let currentDisplay = "";

        function appendToDisplay(value) {
            currentDisplay += value;
            document.getElementById('display').value = currentDisplay;
        }

        function clearDisplay() {
            currentDisplay = "";
            document.getElementById('display').value = currentDisplay;
        }

        function calculateResult() {
            try {
                currentDisplay = eval(currentDisplay).toString();
            } catch {
                currentDisplay = "Error";
            }
            document.getElementById('display').value = currentDisplay;
        }