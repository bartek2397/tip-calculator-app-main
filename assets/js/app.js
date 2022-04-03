const bill = document.querySelector('#bill')
const custom = document.querySelector('#custom')
const numberOfPeople = document.querySelector('#numberOfPeople')
const tipResult = document.querySelector('.amountNum')
const totalResult = document.querySelector('.totalNum')
const errorText = document.querySelector('.errorText')
const tip = document.querySelector('.tip')
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

btnList.forEach(tip) => {
    tip.addEventListener('click', () => {
        btnList.forEach
    })
}
