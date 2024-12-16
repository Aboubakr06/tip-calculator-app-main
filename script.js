
const main = () => {
	[...inputs].map((inputEl) => {
		renderResults(inputEl, "click");
	})
	
	renderResults(customInput, "input");
	resetElements();
}

const billInput = document.getElementById("billInput");
const customInput = document.getElementById("custom-input");
const inputs = document.querySelectorAll("input[type='button']");
const numPeopleInput = document.getElementById("numPeopleInput");
const tipAmount = document.getElementById("tipAmount");
const textError = document.getElementById("textError");
const inputError = document.getElementById("inputError");
const totalAmount = document.getElementById("totalAmount");
const resetBtn = document.getElementById("resetBtn");

const countTip = (bill, tipAm, nbrPeople) => {
	const tip = (toDigit(bill) * toDigit(tipAm) / 100) / nbrPeople;
	const total = (toDigit(bill) + tip * nbrPeople) / nbrPeople;
	return [tip.toFixed(2), total.toFixed(2)]
}

const errorStyles = () => {
	if(textError.classList.contains('hidden')) {
		textError.classList.remove('hidden');
		inputError.classList.add('border-red-500');
	}
}

const removeErrorStyles = () => {
	if(!textError.classList.contains('hidden')) {
		textError.classList.add('hidden');
		inputError.classList.remove('border-red-500');
	}
}

const checkInput = (input) => {
	if(input.value != 0){
		return true;
	}
	else {
		return false;
	}
}

const getTip = (input) => {
	return input.value;
}

const toDigit = (n) => {
	if(n.includes("%")){
		return parseFloat(n.split("%")[0]);
	} else {
		return parseFloat(n);
	}
}

const updateDom = (tip, total) => {
	tipAmount.innerHTML = `$${tip}`;
    totalAmount.innerHTML = `$${total}`;
}

const renderResults = (inputEl, eventType) => {
	inputEl.addEventListener(eventType, () => {
		if(checkInput(billInput) && checkInput(numPeopleInput)){
			let result = countTip(billInput.value, inputEl.value, numPeopleInput.value);
			updateDom(result[0], result[1]);
			removeErrorStyles();
		}
		else {
			errorStyles();
		}
	});
}

const resetElements = () => {
	resetBtn.addEventListener("click" , () => {
		billInput.value = '';
		numPeopleInput.value = '';
		customInput.value = '';
		tipAmount.innerHTML = `$0.00`;
		totalAmount.innerHTML = `$0.00`;
		removeErrorStyles();
	});
}

main();
