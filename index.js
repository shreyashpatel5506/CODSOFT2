let string ="";
let  buttons=document.querySelectorAll('.button');
Array.from(buttons).forEach((key)=>{
    key.addEventListener('click',(e)=>{
        if(e.target.innerHTML=='='){
            string=eval(string);
            document.querySelector('input').value=string;
            if(eval(string)== undefined){
                alert("please enter a number valid or enter a number by screen number don't use keyboard")
                string =  " ";
            document.querySelector('input').value =string;
            }
        
        }
        else if(e.target.innerHTML=='C')
            {
            string =  " ";
            document.querySelector('input').value =string;
           }
       else{ 
        string =string +e.target.innerHTML;
        document.querySelector('input').value = string;
            
       }
    
    })
})

function solve() { 
    let x = document.getElementById("input").value 
    let y = math.evaluate(x) 
    document.getElementById("input").value = y 
    console.log(y)
} 
