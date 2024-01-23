     
        let displayValue="";

    function addvalue(value) {
            displayValue += value;
            document.getElementById('display').value = displayValue;
        }

        function ClearDisplay() {
            displayValue='';
            document.getElementById('display').value = displayValue;
        }

        function calculateResult() {
            try {
                displayValue= eval(displayValue);
                document.getElementById('display').value =displayValue;
            } catch (error) {
                document.getElementById('display').value = 'Error';
            }
        }
