let age = document.querySelector("#age")
let gender = document.querySelector("#gender")
let height = document.querySelector("#height")
let weight = document.querySelector("#weight")
let result

document.querySelector('#button').addEventListener('click',calculateBmi)


function calculateBmi()  {
   

    result = weight.value / ((height.value/100)**2)
    console.log(result)
    document.querySelector("#result").innerHTML = result.toFixed(2); 

    if(gender.value == "men"){



    }else{

        }
}



