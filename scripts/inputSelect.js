
var secondWrapperDiv = document.getElementById("secondWrapper");

var divOne = document.createElement("div")
divOne.innerText= "in_progress"
secondWrapperDiv.appendChild(divOne)

var divTwo = document.createElement("div")
divTwo.innerText= "in_QA"
secondWrapperDiv.appendChild(divTwo)

var divThree = document.createElement("div")
divThree.innerText= "complete"
secondWrapperDiv.appendChild(divThree)


function update() {

    let select = document.getElementById('inputOption');
    let option = select.options[select.selectedIndex];

    if (option.text === "in-progress") {

        let in_progress =[];

         const newStr = document.createElement("div");
         let inputVal = document.getElementById("text").value;
         newStr.innerHTML= inputVal;
         in_progress.push(inputVal);

         divOne.appendChild(newStr)

         text.value = "";

    }  

    else if (option.text === "in-QA") {

        let in_QA = [];

         const newStr = document.createElement("div");
         let inputVal = document.getElementById("text").value;
         newStr.innerHTML= inputVal;
         divTwo.appendChild(newStr)
        in_QA.push(inputVal);

        text.value = "";
    
        } 


    else if (option.text === "complete") {

        let complete = [];

        const newStr = document.createElement("div");
        let inputVal = document.getElementById("text").value;
        newStr.innerHTML= inputVal;
        divThree.appendChild(newStr)
        complete.push(inputVal);

        text.value = "";

        
         } 


}
