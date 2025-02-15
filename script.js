let display = document.querySelector(".display");

let buttons = document.querySelector(".buttons");


let result = localStorage.getItem("calcresult");
if(result){
    display.value = result
}


function calculator(){
    buttons.addEventListener("click", (evt)=>{

        if(evt.target.tagName === "BUTTON"){
            const value = evt.target.textContent
            console.log(value); 
            if(value == "="){
                display.value = eval(display.value);
                localStorage.setItem("calcresult", display.value)
            }
            else if(value == "C"){
                display.value = ""
            }
            else{
                display.value += value
            }
        }
        
    })
    
}

calculator();