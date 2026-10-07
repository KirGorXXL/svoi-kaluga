const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');

if (menuBtn && nav) {
  menuBtn.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  document.querySelectorAll('.nav a').forEach(a => {
    a.addEventListener('click', () => nav.classList.remove('open'));
  });
}

const form = document.getElementById('visitForm');
const toast = document.getElementById('toast');

if (form && toast) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const name = data.get('name') || 'Спасибо';
    toast.textContent = `${name}, заявка заполнена. В рабочей версии она уйдёт администратору.`;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 4200);
  });
}