let ans1 = document.getElementById("output1")
let ans2 = document.getElementById("output2")
let ans3 = document.getElementById("output3")


let btnEl = document.getElementById("btn")
btnEl.addEventListener('click' , function(){
    console.log("CLicked")
    let inputEl = Number(document.getElementById("input-el").value)
    ans1.textContent = `${inputEl} meters = ${(inputEl*3.281).toFixed(2)} feet | ${inputEl} feet = ${(inputEl/3.281).toFixed(2)} meters`
    ans2.textContent = `${inputEl} liters = ${(inputEl*0.264).toFixed(2)} gallon | ${inputEl} gallon = ${(inputEl/0.264).toFixed(2)} liters`
    ans3.textContent = `${inputEl} kilograms = ${(inputEl*2.204).toFixed(2)} pound | ${inputEl} pound = ${(inputEl/2.204).toFixed(2)} kilograms`

})