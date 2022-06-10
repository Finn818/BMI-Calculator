const height = document.getElementById("height");
const weight = document.getElementById("weight");
let result = document.getElementById("result");
let meaning = document.getElementById("meaning");
const button = document.getElementById("button");

button.addEventListener("click", function() {
  let num = weight.value / Math.round(height.value * height.value) * 10000;
  result.innerText = num.toFixed(2);
  
 if(num < 18.5) {
    meaning.innerText = "Underweight";
    meaning.style.color = "red";
  } else if (num > 18.5 && num < 24.9) {
    meaning.innerText = "Healthy";
    meaning.style.color = "green";
  } else if (num > 25 && num < 29.9) {
    meaning.innerText = "Overweight";
    meaning.style.color = "red";
  } else {
    meaning.innerText = "Obese";
    meaning.style.color = "red";
  }
})

