document.getElementById('pin-button').addEventListener ('click' , function noCall (){
    const Input = document.getElementById('pin-input');
    const pinInput = Input.value;
    const pin = Math.round(Math.random()*10000);
    const pinString = pin + '';
    Input.value = pinString;
     if(pinString.length == 4){
        return pin;
     }
     else {
        noCall();
     }
    
});

document.getElementById('calculator').addEventListener('click' , function(Event){
    const number = Event.target.innerText;
    const pinNumber = document.getElementById('pin-number');
    if(isNaN(number)){
        if(number == "C"){
            pinNumber.value = '';
        }
    }
    else{
    const calculatorValue = pinNumber.value;
    const newCalculatorValue = calculatorValue + number;
    pinNumber.value = newCalculatorValue;
    }
})

document.getElementById('submit-button').addEventListener('click' , function (){
    const pin = document.getElementById('pin-input');
    const pinInput = pin.value
    const number =  document.getElementById('pin-number');
    const pinNumber = number.value;
    const verify = document.getElementById('verify');
    const notVerify = document.getElementById ('not-verify');
    if(pinInput ==  pinNumber){
        verify.style.display = 'block';
        notVerify.style.display = 'none';
    }
    else{  
        notVerify.style.display = 'block';
        verify.style.display = 'none';
    }
});

var date = new Date();
var time = date.getHours();
console.log(time);
