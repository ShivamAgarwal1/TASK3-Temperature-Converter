let celciusinput = document.querySelector('#celcius > input')
let Fahrenheitinput = document.querySelector('#Fahrenheit > input')
let kelvininput = document.querySelector('#Kelvin > input') 



let btn = document.querySelector('.button button')


function roundNumber(number){
    return Math.round(number*100)/100
}

/* CONVERSION TO FAHRENHEIT AND KELVIN FROM CELCIUS */

celciusinput.addEventListener('input',function(){
    let cTemp = parseFloat(celciusinput.value)
    let fTemp = (cTemp*(9/5)) + 32
    let kTemp = cTemp + 273.15

    Fahrenheitinput.value = roundNumber(fTemp)
    kelvininput.value = roundNumber(kTemp)
})

/* CONVERSION TO CELCIUS AND KELVIN FROM FAHRENHEIT */

Fahrenheitinput.addEventListener('input',function(){
    let fTemp = parseFloat(Fahrenheitinput.value)
    let cTemp = (fTemp - 32) * (5/9)
    let kTemp = (fTemp - 32) * (5/9) + 273.15 

    celciusinput.value = roundNumber(cTemp)
    kelvininput.value = roundNumber(kTemp)
})

/* CONVERSION TO CELCIUS AND FAHRENHEIT FROM KELVIN */

kelvininput.addEventListener('input',function(){
    let kTemp = parseFloat(kelvininput.value)
    let cTemp = kTemp - 273.15
    let fTemp = (kTemp - 273.15) * (9/5) + 32

    celciusinput.value = roundNumber(cTemp)
    Fahrenheitinput.value = roundNumber(fTemp)
})


btn.addEventListener('click', ()=>{
    celciusinput.value = ""
    Fahrenheitinput.value = ""
    kelvininput.value = ""
})