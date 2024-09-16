const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result');

    if (isNaN(height) || height <= 0) {
        result.innerHTML = "Please provide a valid height.";
    } else if (isNaN(weight) || weight <= 0) {
        result.innerHTML = "Please provide a valid weight.";
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        result.innerHTML = `<div>Your BMI is: <span>${bmi}</span></div>`;

        if (bmi < 18.6) {
            result.innerHTML += `<b> You are underweight</b>`;
        } else if (bmi >= 18.6 && bmi <= 24.9) {
            result.innerHTML += `<b> You are in range</b>`;
        } else {
            result.innerHTML += `<b> You are overweight</b>`;
        }
    }
});
