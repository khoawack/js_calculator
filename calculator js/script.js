const buttons = document.querySelectorAll('button')
const screenDisplay = document.querySelector('.screen');

let calculation = []
let accumulative

function calculate(button){ 
    const value = button.value


    if (value === "all-clear"){
        calculation = []
        screenDisplay.textContent = ""
    }

    else if (value === "="){
        screenDisplay.textContent = eval(accumulative)
    }

    else{
        calculation.push(value)
        accumulative = calculation.join("")
        screenDisplay.textContent = accumulative
    }
    


    console.log(calculation)

}

buttons.forEach(button => button.addEventListener('click', () => calculate(button))) 