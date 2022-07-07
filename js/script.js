const html = document.documentElement;
const trigger = document.querySelector('.trigger');
trigger.addEventListener('click', () => {
  html.classList.toggle('dark');
});
