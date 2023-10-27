//creating and initialising variables
let string = " ";
let buttons = document.querySelectorAll('.button');

// Operation of calculator
Array.from(buttons).forEach(button=>{
    button.addEventListener('click', (e) => {
        if(e.target.innerHTML == '='){
            string = eval(string); //the eval() method :evaluates or executes an argument.
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'C'){
            string = " ";
            document.querySelector('input').value = string;
        }
        else{
            console.log(e.target); //target property:returns the element when event occured
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string; //The value property: sets or returns the value of the value attribute of a text field.
            
        }
       
        
    })

})