const btn = document.getElementById('btn');

function Menu(event) {
  if (event.type === 'touchstart') event.preventDeafaul();
  const nav = document.getElementById('nav');
  nav.classList.toggle('ativo');
}

btn.addEventListener('click', Menu);
btn.addEventListener('touchstart', Menu);
