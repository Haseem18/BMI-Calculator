const calculateElement = document.querySelector('#calculate');
const weightInput = document.querySelector('#weight');
const heightInput = document.querySelector('#height');
const resultElement = document.querySelector('.result');

calculateElement.addEventListener("click", () => {
  const weight = weightInput.value;
  const height = heightInput.value;
  const BMI = weight / (height * height);
  let classification = '';
  
  if (weight > 0 && height > 0) {
    if (BMI < 18.5) {
        classification = `Underweight`;
    } else if (BMI >= 18.5 && BMI <= 24.9) {
        classification = `Normal weight`;
    } else if (BMI >= 25 && BMI <= 29.9) {
        classification = `Overweight`;
    } else if (BMI >= 30) {
      classification = `Obesity`;
    }
    resultElement.innerHTML = `${classification}: ${BMI.toFixed(2)}`
  } else {
    resultElement.innerHTML = `Please Enter Valid Height and Weight`;
  }
});

const resetElement = document.querySelector('#reset');

resetElement.addEventListener("click", () => {
  weightInput.value = '';
  heightInput.value = '';
  resultElement.innerHTML = "Your BMI will be displayed Here"
});