let string="";
const buttons=document.querySelectorAll('.button');
const input=document.querySelector('input');
buttons.forEach(button=>{
    button.addEventListener("click",(event)=>{
        if(event.target.innerText !=='=' && event.target.innerText !=='AC' && event.target.innerText !=='Delete'){
        string+=event.target.innerText;
        input.value=string;
    
        }
        else if(event.target.innerText ==='=')
        {
            string=eval(string);
            input.value=string;
        }
        else if(event.target.innerText ==='AC')
        {
            string="";
            input.value=string;
        }
        else if(event.target.innerText ==='Delete')
        {
            string=string.slice(0,-1);
           input.value=string;

        }
        
    })
})