let bill = 0
let tipPercentage = 0
let numberOfPeople = 0
let buttonSelected = null

let billInput = document.querySelector("#bill")
billInput.addEventListener("input, receiveBillValue")

let numberOfPeopleInput = document.querySelector("#people")
numberOfPeopleInput.addEventListener("input", receiveNumberOfPeopleValue)

function receiveBillValue() {
    bill = billInput.valueAsNumber

    calculate()
}

function receiveNumberOfPeople() {
    numberOfPeople = numberOfPeople.valueAsNumber

    calculate()
}

function receiveTipPercentegeValue(value){
buttonSelected = document.querySelector("")

tipPercentegeValue = value / 100

buttonSelected = document.querySelector("")
}

function calculate(){
    if (bill !== 0 && tipPercentage !== 0 && numberOfPeople !== 0) {
        console.log("é possível calcular")
    } else {
    console.log("Ainda não dá! Preencha tudo!")
    }
}