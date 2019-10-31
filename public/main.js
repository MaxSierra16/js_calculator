const numbers = document.getElementById('calculo')
const display = document.getElementById('display')
const calcular = document.getElementById('calcular')
const clear = document.getElementById('clear')
const back = document.getElementById('back')
const buttons = document.querySelectorAll(".num")

calcular.addEventListener('click', () => {
   display.innerText = calculate(numbers.value) 
})

clear.addEventListener('click', () => { 
   display.innerText = ''
   numbers.value = ''
})

back.addEventListener('click', () => {
   numbers.value = numbers.value.slice(0, -1)
})

buttons.forEach( button => {
   button.addEventListener('click', () => {
      if(button.value === '.' && numbers.value.includes('.')) return
      numbers.value += button.value
   })
})

const calculate = (digits) => {
  
   if(digits.includes("+")){ return addFunc(digits) }
   if(digits.includes("-")){ return subsFunc(digits) }
   if(digits.includes("*")){ return multFunc(digits) }
   if(digits.includes("/")){ return diviFunc(digits) }
}
 
const addFunc = (digits) => {
   const splitted = digits.split('+')
   return +splitted[0] + +splitted[1] 
}
const subsFunc = (digits) => {
   const splitted = digits.split('-')
   return +splitted[0] - +splitted[1] 
}
const multFunc = (digits) => {
   const splitted = digits.split('*')
   return +splitted[0] * +splitted[1] 
}
const diviFunc = (digits) => {
   const splitted = digits.split('/')
   return +splitted[0] / +splitted[1] 
}
