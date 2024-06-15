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

    if(result<16){
        document.querySelector("#result2").innerHTML = " wygłodzenie" 
    }else if(result>16 && result<16.99){
        document.querySelector("#result2").innerHTML = " wychudzenie" 
     }else if(result>17 && result<18.49){
        document.querySelector("#result2").innerHTML = " niedowaga" 
     }else if(result>18.5 && result<24.99){
        document.querySelector("#result2").innerHTML = " waga prawidłowa" 
     }else if(result>25 && result<29.99){
        document.querySelector("#result2").innerHTML = " nadwaga" 
     }else if(result>30 && result<34.99){
        document.querySelector("#result2").innerHTML = " otyłość I stopnia" 
     }else if(result>35 && result<39.99){
        document.querySelector("#result2").innerHTML = " otyłość II stopnia" 
     }else{
        document.querySelector("#result2").innerHTML = " otyłość III stopnia" 
     }
}
