const resultDiv = document.getElementById("resultDiv");
const BMIresult = document.getElementById("BMIresult");
resultDiv.style.display = "none";

const printBMI = () => {
  const height = document.getElementById("inHeight").value;
  const weight = document.getElementById("inWeight").value;
  const calculatedBMI = calculateBMI(height, weight);
  BMIresult.innerHTML =
    calculatedBMI +
    " " +
    getBmiCategory(calculatedBMI) +
    " Your ideal weight: maximum " +
    idealWeight(height).toFixed(1) +
    " kg";
  //const resultDiv = Document.getItemById("resultDiv");
  console.log("height", height, "weight", weight);
  resultDiv.style.display = "block";
};
const calculateBMI = (height, weight) => {
  return (weight / (height / 100) ** 2).toFixed(1);
};
const idealWeight = (height) => {
  return 24.9 * ((height / 100) ** 2).toFixed(1);
};

const getBmiCategory = (BMI) => {
  if (BMI < 16.0) {
    return "Underweight (Severe thinness)	";
  } else if (BMI < 17) {
    return "Underweight (Moderate thinness)";
  } else if (BMI < 18.5) {
    return "Underweight (Mild thinness)";
  } else if (BMI < 25) {
    return "Normal range";
  } else if (BMI < 30) {
    return "Overweight (Pre-obese)";
  } else if (BMI < 35) {
    return "Obese (Class I)";
  } else if (BMI < 40) {
    return "Obese (Class II)";
  } else {
    return "Obese (Class III)";
  }
};
