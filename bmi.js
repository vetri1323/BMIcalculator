const form = document.querySelector('form');

form.addEventListener('submit', function(e){
    e.preventDefault();
    const height=parseInt(document.querySelector('#height').value);
    const weight=parseInt(document.querySelector('#weight').value);
    const result=document.querySelector('#result');
    
    if((height<0) ){
        result.innerHTML="Please ent er a valid height";
    }
    else if ((weight<0) ){
        result.innerHTML="Please enter a valid weight";
    }
    else{
        const bmi = (weight / ((height*height)/10000)).toFixed(2);
        result.innerHTML=bmi;
        
        if (bmi < 18.5) result2.innerHTML =`~Low Weight (or) Under Weight~`; 
        else if (bmi >= 18.6 && bmi < 24.9) result2.innerHTML = `~Normal Weight~`;
        else if (bmi >= 25 && bmi < 39.9) result2.innerHTML = `~Obesity~`;
        else result2.innerHTML =`~Severe Obesity~`; }
    }
)

function reload(){

    location.reload();
}



