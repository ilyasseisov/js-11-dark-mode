// Variables
const html = document.documentElement;
const trigger = document.querySelector('.trigger');

// Functions
const toggleMode = () => {
  html.classList.toggle('dark');
};

// Event Listeners
trigger.addEventListener('click', toggleMode);
