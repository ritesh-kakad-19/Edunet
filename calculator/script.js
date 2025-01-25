let btn=document.querySelectorAll('button');
let outputBox=document.querySelector("#output");

let string="";

btn.forEach(button =>{
    button.addEventListener("click",() =>{
        
        if(button.innerText == "AC")
        {
            outputBox.value="";
            string="";
           
        }
        else if(button.innerText == "DEL")
        {
            string =  string.substring(0, string.length-1)
            outputBox.value = string;
        }
        else if(button.innerText == "=")
        {
            string = eval(string);
            outputBox.value = string;
        }
        else{
            
            string = string + button.innerText;
            outputBox.value = string;
        } 
    });
});






