const form = document.querySelector('form');

form.addEventListener('submit',function(event){
    event.preventDefault();

const height = parseInt(document.querySelector("#height").value);
const weight = parseInt(document.querySelector("#weight").value);
const results = document.querySelector("#results");
const guide = document.querySelector("#guide");

if(height == '' || height < 0 || isNaN(height))
{
    results.innerHTML(`This is not valid no : ${height}`);
}
else if (weight == '' || weight < 0 || isNaN(weight)) 
    {
    results.innerHTML(`This is not valid no : ${weight}`);
} else {

    const bmi=(weight/((height*height)/10000)).toFixed(2);
    results.innerHTML=`<span>BMI Value:-${bmi}</span>`
    
    if (bmi <= 18.6){
        guide.innerHTML =`<span>Under wight</span>`
    }
    else if(bmi > 18.60 && bmi < 24.9){
        guide.innerHTML=`<span>Normal Range</span>`
    }
    else{
        guide.innerHTML=`<span>Overweight</span>`
    }
    
}


});