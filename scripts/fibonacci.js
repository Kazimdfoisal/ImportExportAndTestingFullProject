export const fibonacci_Series = document.getElementById("fibonacci_Series")
export const yourSeries = document.createElement ("p");
yourSeries.classList.add('sl');

export function fibonacci()
{
    let arr = []; 

    let num1=0;
    let num2=1;
    let sum;

    fibonacci_Series.innerHTML="";
    const limit = Number(document.getElementById("input_num").value) ;

    for (i = 0; i < limit; i++) 
    {
        yourSeries.innerText = num1;

        sum=num1+num2;
        num1=num2;
        num2=sum;
        fibonacci_Series.appendChild(yourSeries.cloneNode(true));
    }

    for (let j = 0; j < limit; j++) {

        arr.push(num2);  
    }

    input_num .value ="";  

}

module.exports=fibonacci