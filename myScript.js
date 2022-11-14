var input = document.getElementById("display-space");
var allButtons = document.getElementsByClassName("cal-btn");

var operand1 = 0 ;
var operand2;
var operator;

for(var i = 0 ; i< allButtons.length; i++){
    allButtons[i].addEventListener('click', function(){
        var value = this.getAttribute("data-value");
        // input.innerText += value;
        // switch conditions for the buttons

        switch (value){

         
            
            case '1' : {
                input.innerText += value;
                break;
            }
            case '2' : {
                input.innerText += value;
                break;
            }
            case '3' : {
                input.innerText += value;
                break;
            }
            case '4' : {
                input.innerText += value;
                break;
            }
            case '5' : {
                input.innerText += value;
                break;
            }
            case '6' : {
                input.innerText += value;
                break;
            }
            case '7' : {
                input.innerText += value;
                break;
            }
            case '8' : {
                input.innerText += value;
                break;
            }
            case '9' : {
                input.innerText += value;
                break;
            }
            case '0' : {
                input.innerText += value;
                break;
            }
            case '.' : {
                input.innerText += value;
                break;
            }
           
            case '%' : {

            }
            case '/' : {

            }
            case '*' : {

            }
            case '+' : {
                operand1 = input.innerText;
                operator = value;
                input.innerText = null;
                break;
            }
            case '-' : {
                operand1 = input.innerText;
                operator = value;
                input.innerText = null;
                break;

            }
            case '=' : {
                operand2 = input.innerText;
                var text = operand1 + operator + operand2;
                var result = eval(text);
                input.innerText = eval(text);
                operand1 = result;
                operand2 = null;
                operator = null;
                break;
            }

            case 'AC':{
                input.innerText = null;
                operand1 = 0;
                operand2 = null;
                operator = null;
                break;
            }

        }

    })
}
