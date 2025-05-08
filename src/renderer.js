window.addEventListener('DOMContentLoaded', () => {
  const addMealBtn = document.getElementById('addMealBtn');
  addMealBtn.addEventListener('click', () => {
    alert('Meal added! (Placeholder)');
  });
});

const { ipcRenderer } = require('electron');

document.addEventListener('DOMContentLoaded', () => {
  const startButton = document.getElementById('startButton');
  if (startButton) {
    startButton.addEventListener('click', () => {
      window.location.href = './plan.html';
    });
  }
});
  