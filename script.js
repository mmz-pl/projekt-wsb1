let agex = document.querySelector("#age")
let genderx = document.querySelector("#gender")
let heightx = document.querySelector("#height")
let weightx = document.querySelector("#weight")


document.querySelector('#button').addEventListener('click',calculateBmi)

function calculateBmi()  {
   

    let result = weightx.value / ((heightx.value/100)**2)
    console.log(result)
    document.querySelector("#result").innerHTML = result.toFixed(2); 
}



