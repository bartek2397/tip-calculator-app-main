const bill = document.querySelector('#bill')
const custom = document.querySelector('#custom')
const numberOfPeople = document.querySelector('#numberOfPeople')
const tipResult = document.querySelector('.amountNum')
const totalResult = document.querySelector('.totalNum')
const errorText = document.querySelector('.error')
const tip = document.querySelector('.tip')
const tip5 = document.querySelector('.tip5')
const tip10 = document.querySelector('.tip10')
const tip15 = document.querySelector('.tip15')
const tip25 = document.querySelector('.tip25')
const tip50 = document.querySelector('.tip50')
const btnList = [tip5, tip10, tip15, tip25, tip50]
const reset = document.querySelector('.reset')


let isCustom = false
let tipDefault = `0.00`
let totalDefault = `0.00`
let customTip = custom.value;
let guests = 1;

tipResult.innerText = tipDefault;
totalResult.innerText = totalDefault;
tip5.classList.add("active");


btnList.forEach((tip) => {
    tip.addEventListener('click', (e) => {
        btnList.forEach((tile) => {
            if (tile.classList.contains('active')) {
                tile.classList.remove('active')
            }

            e.currentTarget.classList.add('active')
        })

        renderTip()
    })
})

const renderTip = function () {
    let tip;
    const billAmount = Number(bill.value)
    const people = Number(numberOfPeople.value);

    btnList.forEach((tile) => {
        if (tile.classList.contains('active')) {
            tip = parseInt(tile.textContent, 10) / 100;
        }
    })

    const tipAmount = Number(((billAmount / people) * tip).toFixed(2));
    const totalAmount = Number(((billAmount / people).toFixed(2)));

    tipResult.textContent = tipResult.textContent == '$Infinity' || billAmount == 0 || billAmount == 'NaN' ? '$0.00' : `$${tipAmount}`
    totalResult.textContent = totalResult.textContent == '$Infinity' || billAmount == 0 ? '$0.00' : `$${totalAmount + tipAmount}`
}

bill.addEventListener('input', () => {
    renderTip();
    reset.classList.add('active');
})

numberOfPeople.addEventListener('input', () => {
    try {
        if (numberOfPeople == 0) throw new Error('Cannot be zero.');

        renderTip()
    } catch (err) {
        numberOfPeople.style.border = '2px solid hsl(0, 100%, 74%)';
        error.classList.remove('hidden');
    }

})


reset.addEventListener('click', () => {
    bill.value = 0;
    customTip = 0;
    numberOfPeople.value = 0;
})
