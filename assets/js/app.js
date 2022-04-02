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
let customTip = '';
let billAmount = bill.value;
let guests = numberOfPeople.value;

tipResult.innerText = tipDefault
totalResult.innerText = totalDefault
tip5.classList.add("active");
setTip(5);

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

bill.addEventListener('change', () => {
    showSum()
})

function getBill() {
    //get the value
    billAmount = bill.value;
  
    // when user inputs decimal, only allow 2 characters after it.
    if (billAmount.includes(".")) {
      i = billAmount.indexOf(".");
      x = i + 3;
      billAmount = billAmount.slice(0, x);
  
      //set display and amount
      bill.value = billAmount;
  
      showSum();
      return;
    }
  }

function showSum() {
    x = (billAmount * tipAmount) / 100
    i = guests
    splitTip = x / i
    billTotal = billAmount / i + splitTip

    tipDefault.innerText = splitTip.toFixed(2)
    totalDefault.innerText = billTotal.toFixed(2)
    
}

function setTip (number) {
    if (isCustom === true) {
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