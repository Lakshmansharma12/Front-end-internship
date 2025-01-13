
const button = document.getElementById('changeColorButton');

const colors = ['#FF5733', '#33FF57', '#3357FF', '#F3FF33', '#FF33E8'];

let currentColorIndex = 0;
function changeBackgroundColor() {
  
  document.body.style.backgroundColor = colors[currentColorIndex];
  currentColorIndex = (currentColorIndex + 1) % colors.length; // Loop back to the start
}

button.addEventListener('click', changeBackgroundColor);
