let p1 = document.getElementById("p1") 
let p2 = document.getElementById("p2") 
let p3 = document.getElementById("p3") 

 
function convert(){
  const input = document.getElementById("input")

  p1.textContent = `${input.value} meters = ${((input.value) * 3.281).toFixed(2)} feet | ${input.value} feet = 
  ${((input.value)/ 3.281).toFixed(2) } meters `
 
   p2.textContent = `${input.value} liters = ${((input.value) * 0.264).toFixed(2)} gallons | ${input.value} gallons = ${((input.value)/ 0.264).toFixed(2) } liters `
 
   p3.textContent = `${input.value} kilos = ${((input.value) * 2.204).toFixed(2)} pounds | ${input.value} pounds = 
  ${((input.value)/ 2.204).toFixed(2) } kilos `
  
  
}
 