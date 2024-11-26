
let result = document.getElementById("result");

function calculateBmi() {
    // Get input values
    let age = Number(document.getElementById("age-input").value);
    let height = Number(document.getElementById("height-input").value);
    let weight = Number(document.getElementById("weight-input").value);
    let male = document.getElementById("male");
    let female = document.getElementById("female");

    // Validate inputs
    if (!age || !height || !weight || (!male.checked && !female.checked)) {
        result.innerHTML = `<p id="result-p">All fields are required!</p>`;
        document.getElementById("result-p").style.color = "red";
        return;
    }
    if (height <= 0 || weight <= 0) {
        result.innerHTML = `<p id="result-p">Height and weight must be positive numbers!</p>`;
        document.getElementById("result-p").style.color = "red";
        return;
    }

    // Calculate BMI
    let bmi = (weight / ((height / 100) ** 2)).toFixed(1);
    let resultBmi = "";

    // Determine BMI category
    if (bmi < 18.5) {
        resultBmi = 'Underweight';
    } else if (bmi <= 24.9) {
        resultBmi = 'Healthy';
    } else if (bmi <= 29.9) {
        resultBmi = 'Overweight';
    } else if (bmi <= 34.9) {
        resultBmi = 'Obese';
    } else {
        resultBmi = 'Extremely obese';
    }

    // Display result
    result.innerHTML = `
        <h3>Your BMI is</h3>
        <div>
            <h2>${bmi}</h2>
        </div>
        <p id="result-p">${resultBmi}</p>
    `;
    if (bmi > 18.5 && bmi <= 24.9){
        document.getElementById("result-p").style.color = "green";
    }else{
        document.getElementById("result-p").style.color = "red";
    }
}
