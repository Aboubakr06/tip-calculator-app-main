let billInput = document.querySelector(".bill-input");

let FiveEL = document.querySelector(".five");
let TenEl = document.querySelector(".ten");
let FifteentEl = document.querySelector(".fifteen");
let TwentyfiveEl = document.querySelector(".twentyfive");
let FiftyEl = document.querySelector(".fifty");
let CustomInput = document.querySelector(".custom-input");

let PeopleCont = document.querySelector(".people-cont");
let PeopleInput = document.querySelector(".people-input");

let TipAmount = document.querySelector(".tip-amount");
let TotalEl = document.querySelector(".total");


let ResetEl = document.querySelector(".reset");





FiveEL.addEventListener("click" , function() {
  
  let tip = (billInput.value * 5 / 100) / PeopleInput.value;

  let total = (billInput.value + tip * PeopleInput.value) / PeopleInput.value;
  console.log(tip)
  console.log(total)

  TipAmount.innerHTML =  `$${tip}`;
  TotalEl.innerHTML =  `$${total}`;
})

