/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/ 

// inputNumber * 3.281 to get meters 
// inputNumber / 3.281 to get feet

 const box1El = document.getElementById("box1Result")
 const box2El = document.getElementById("box2Result")
 const box3El = document.getElementById("box3Result")
 const numEl = document.getElementById("number")
 const btn = document.getElementById("button")

 const meterToFeet = 3.281
 const literToGallon = 0.264
 const kiloToPound = 2.204

btn.addEventListener("click", function() {
    let Result = numEl.value

    box1El.textContent = `${Result} meters = ${Result * meterToFeet} feet | ${Result} feet = ${Result / meterToFeet} meters `

    box2El.textContent = `${Result} liters = ${Result * literToGallon} gallons | ${Result} gallons = ${Result / literToGallon} liters `

    box3El.textContent = `${Result} kilos = ${Result * kiloToPound} pounds | ${Result} pounds = ${Result / kiloToPound} kilos `


})



// function meterResult() {

//     let meterResult = numEl * 3.281
//     let feetResult = numEl / 3.281

//     box1El.textContent = `${numEl} meters = ${meterResult} feet | ${numEl} feet = ${feetResult} meters `

    
// }


       
