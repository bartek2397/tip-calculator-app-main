const bill = document.querySelector('#bill')
const custom = document.querySelector('#custom')
const numberOfPeople = document.querySelector('#numberOfPeople')
const tipResult = document.querySelector('.amountNum')
const totalResult = document.querySelector('.totalNum')
const errorText = document.querySelector('.errorText')
const tip5 = document.querySelector('.tip5')
const tip10 = document.querySelector('.tip10')
const tip15 = document.querySelector('.tip15')
const tip25 = document.querySelector('.tip25')
const tip50 = document.querySelector('.tip50')
const btnList = [tip5, tip10, tip15, tip25, tip50]


let isCustom = false
let tipDefault = `0.00`
let totalDefault = `0.00`
let customTip = custom.value;
let billAmount = bill.value;
let guests = 1;
let tipAmount;
let totalAmount;

tipResult.innerText = tipDefault
totalResult.innerText = totalDefault
tip5.classList.add("active");
setTip();

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
document.addEventListener('change', () => {
    if (isCustom === true) {
        tip5.classList.remove('active')
        tip10.classList.remove('active')
        tip15.classList.remove('active')
        tip25.classList.remove('active')
        tip50.classList.remove('active')
    }
})

document.addEventListener('change', () => {
    showSum()
})



function showSum() {
    if (tip5.classList.contains('active')) {
        let tipAmount = Number(((billAmount * 5) / 100) / guests);
        let totalAmount = (billAmount / guests) + tipAmount
        
    } else if (tip10.classList.contains('active')) {
        tipAmount = ((billAmount * 10) / 100) / guests
        totalAmount = (billAmount / guests) + tipAmount
    } else if (tip15.classList.contains('active')) {
        tipAmount = ((billAmount * 15) / 100) / guests
        totalAmount = (billAmount / guests) + tipAmount
    } else if (tip25.classList.contains('active')) {
        tipAmount = ((billAmount * 25) / 100) / guests
        totalAmount = (billAmount / guests) + tipAmount
    } else if (tip50.classList.contains('active')) {
        tipAmount = ((billAmount * 50) / 100) / guests
        totalAmount = (billAmount / guests) + tipAmount
    } else {
        setTip()
    }

    tipResult.innerText = Number(tipAmount)
    totalResult.innerText = totalAmount

    
}
console.log(showSum())

function setTip (number) {
    if (isCustom === true && customTip === 'number') {
        tipAmount = customTip;
    } else {
        tipAmount = number
    }
    showSum()
}

let error = () => {
    if (billAmount === 'string') {
        errorText.innerText = 'The bill should be a number!'
    } else if (billAmount > 3000) {
        errorText.innerText = 'The bill is too large!'
    } else if (billAmount < 0) {
        errorText.innerText = 'The bill must be above 0!'
    } else {
        showSum()
    }
}