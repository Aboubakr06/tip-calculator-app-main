let billInput = document.querySelector(".bill-input");
let PeopleInput = document.querySelector(".people-input");
let CustomInput = document.querySelector(".custom-input");
let TipAmount = document.querySelector(".tip-amount");
let TotalEl = document.querySelector(".total");
let ResetEl = document.querySelector(".reset");
let PeopleCont = document.querySelector(".people-cont");
let PeopleEr = document.querySelector(".people-error");

const buttons = [
  {element: document.querySelector(".five"), tipPercentage: 5},
  {element: document.querySelector(".ten"), tipPercentage: 10},
  {element: document.querySelector(".fifteen"), tipPercentage: 15},
  {element: document.querySelector(".twentyfive"), tipPercentage: 25},
  {element: document.querySelector(".fifty"), tipPercentage: 50}
];

buttons.forEach(button => {
  button.element.addEventListener("click", () => {
    CustomInput.value =''
    if (PeopleInput.value !== "" && PeopleInput.value > 0) {
    let tip = (Number(billInput.value) * button.tipPercentage / 100) / PeopleInput.value;
    let total = (Number(billInput.value) + tip * PeopleInput.value) / PeopleInput.value;
    TipAmount.innerHTML = `$${tip.toFixed(2)}`;
    TotalEl.innerHTML = `$${total.toFixed(2)}`;
    PeopleEr.classList.add('hidden');
    PeopleCont.classList.remove('border-red-500');
  } else {
    PeopleEr.classList.remove('hidden');
    PeopleCont.classList.add('border-red-500');
  }
  });
});

CustomInput.addEventListener("input", () => {
  if(CustomInput.value > 0) {
    if (PeopleInput.value !== "" && PeopleInput.value > 0) {
    let tip = (Number(billInput.value) * CustomInput.value / 100) / PeopleInput.value;
    let total = (Number(billInput.value) + tip * PeopleInput.value) / PeopleInput.value;
    TipAmount.innerHTML = `$${tip.toFixed(2)}`;
    TotalEl.innerHTML = `$${total.toFixed(2)}`;
    PeopleEr.classList.add('hidden');
    PeopleCont.classList.remove('border-red-500');
  } else {
    PeopleEr.classList.remove('hidden');
    PeopleCont.classList.add('border-red-500');
  }
  }
});

ResetEl.addEventListener("click" , function() {
  billInput.value = '';
  PeopleInput.value = '';
  CustomInput.value = '';
  TipAmount.innerHTML = `$0.00`;
  TotalEl.innerHTML = `$0.00`;
});
