const bill = document.querySelector('#bill')
const tip = document.querySelector('.tip')
const custom = document.querySelector('#custom')
const numberOfPeople = document.querySelector('#numberOfPeople')
const tipResult = document.querySelector('.tipResult')
const totalResult = document.querySelector('.totalResult')
const tip5 = document.querySelector('.tip5')
const tip10 = document.querySelector('.tip15')
const tip15 = document.querySelector('.tip15')
const tip25 = document.querySelector('.tip25')
const tip50 = document.querySelector('.tip50')

let isCustom = false
let totalDefault = '0.00'
let tipDefault = '0.00'

totalDefault.innerText = `0.00`
let getBill = (event) => {
    console.log(bill.value)
}

tip5.addEventListener('click', () => {
    
})
getBill()

