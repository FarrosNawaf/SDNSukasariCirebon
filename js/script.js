const toggle = document.getElementById('menu-toggle');
const navigator = document.getElementById("navigator");

toggle.addEventListener('click', () => {
    navigator.classList.toggle('active');
    toggle.innerHTML = navigator.classList.contains('active') ? '&times;' : '&#9776;';
});