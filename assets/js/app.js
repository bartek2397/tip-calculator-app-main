const bill = document.querySelector('#bill')
const custom = document.querySelector('#custom')
const numberOfPeople = document.querySelector('#numberOfPeople')
const tipResult = document.querySelector('.tipResult')
const totalResult = document.querySelector('.totalResult')
const tip5 = document.querySelector('.tip5')
const tip10 = document.querySelector('.tip10')
const tip15 = document.querySelector('.tip15')
const tip25 = document.querySelector('.tip25')
const tip50 = document.querySelector('.tip50')
const btnList = [tip5, tip10, tip15, tip25, tip50]


let isCustom = false
let tipDefault = `0.00`
let totalDefault = `0.00`

tipResult.innerText = tipDefault
totalResult.innerText = totalDefault

tip5.addEventListener('click', () => {
    if (tip5.classList.contains('active')) {
        return
    } else {
        tip5.classList.toggle('active')
        tip10.classList.remove('active')
        tip15.classList.remove('active')
        tip25.classList.remove('active')
        tip50.classList.remove('active')
    }
})
tip10.addEventListener('click', () => {
    if (tip10.classList.contains('active')) {
        return
    } else {
        tip5.classList.remove('active')
        tip10.classList.toggle('active')
        tip15.classList.remove('active')
        tip25.classList.remove('active')
        tip50.classList.remove('active')
    }
})
tip15.addEventListener('click', () => {
    if (tip15.classList.contains('active')) {
        return
    } else {
        tip5.classList.remove('active')
        tip10.classList.remove('active')
        tip15.classList.toggle('active')
        tip25.classList.remove('active')
        tip50.classList.remove('active')
    }
})
tip25.addEventListener('click', () => {
    if (tip25.classList.contains('active')) {
        return
    } else {
        tip5.classList.remove('active')
        tip10.classList.remove('active')
        tip15.classList.remove('active')
        tip25.classList.toggle('active')
        tip50.classList.remove('active')
    }
})
tip50.addEventListener('click', () => {
    if (tip50.classList.contains('active')) {
        return
    } else {
        tip5.classList.remove('active')
        tip10.classList.remove('active')
        tip15.classList.remove('active')
        tip25.classList.remove('active')
        tip50.classList.toggle('active')
    }
})
getBill()

function tipAmount() {
    if (bill.value == 0) {
        return
    } else {
        bill.value 
    }
}