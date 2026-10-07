const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');
if (menuBtn) {
  menuBtn.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

document.querySelectorAll('.nav a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

const modal = document.getElementById('parentModal');
document.querySelectorAll('.js-open-parent').forEach(btn => btn.addEventListener('click', () => modal.showModal()));
modal.querySelector('.modal-close').addEventListener('click', () => modal.close());
modal.addEventListener('click', e => {
  const rect = modal.getBoundingClientRect();
  if (e.clientX < rect.left || e.clientX > rect.right || e.clientY < rect.top || e.clientY > rect.bottom) modal.close();
});

document.getElementById('demoEnter').addEventListener('click', () => {
  document.querySelector('.demo-login').classList.add('hidden');
  document.getElementById('demoCameras').classList.remove('hidden');
});

const form = document.getElementById('visitForm');
const toast = document.getElementById('toast');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const name = data.get('name') || 'Спасибо';
  toast.textContent = `${name}, заявка заполнена. В рабочей версии она уйдёт администратору.`;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 4200);
});