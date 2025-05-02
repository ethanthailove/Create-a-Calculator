// Area of Rectangle

//Event Listener
document.getElementById("calc-btn").addEventListener("click", calcArea);

function calcArea() {
  let width = +document.getElementById("num1").value;
  let length = +document.getElementById("num2").value;
  // Process
  let area = width * length;
  let total = area.toFixed(2);

  //Output
  document.getElementById("area").innerHTML = total;
}
