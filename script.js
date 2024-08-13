var age=document.getElementById('age')
var height=document.getElementById('height')
var weight=document.getElementById('weight')

var resultarea=document.querySelector('.comment')

// ------------button function-----------------//

function button(){
    var bmi=weight.value/(height.value/100*height.value/100)
    if(bmi<18.5){
        result = 'You are Underweight';
         }else if(18.5<=bmi&&bmi<=24.9){

        result = 'You are Healthy';
         }else if(25<=bmi&&bmi<=29.9){

        result = 'You are Overweight';
         }else if(30<=bmi&&bmi<=34.9){

        result = 'You are Obese';
         }else if(35<=bmi){
        result = 'You are Extremely obese';
         }
resultarea.style.display='block'
document.getElementById('result').innerHTML=bmi.toFixed(2)
document.querySelector('.comment').innerHTML=result

//speechsynthesisutterance is a API tool to represent speech request

const x = new SpeechSynthesisUtterance(result);
window.speechSynthesis.speak(x);


    
}