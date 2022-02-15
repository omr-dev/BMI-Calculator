const resultDiv = document.getElementById("resultDiv");
const BMIresult = document.getElementById("BMIresult");
resultDiv.style.display = "none";

const printBMI = () => {
  const height = document.getElementById("inHeight").value;
  const weight = document.getElementById("inWeight").value;
  const calculatedBMI = calculateBMI(height, weight);
  BMIresult.innerHTML = calculatedBMI;
  //const resultDiv = Document.getItemById("resultDiv");
  console.log("height", height, "weight", weight);
  resultDiv.style.display = "block";
};
const calculateBMI = (height, weight) => {
  return weight * ((height / 100) ** 2).toFixed(1);
};
