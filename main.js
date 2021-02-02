const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;
let timer;

function getTimeFromSeconds(segundos) {
  const data = new Date(segundos * 1000);
  return data.toLocaleTimeString('pt-BR', { hour12: false, timeZone: 'GMT' });
}

function initTimer() {
  clearInterval(timer);
  relogio.classList.remove('active')
  timer = setInterval(() => {
    segundos++;
    relogio.innerText = getTimeFromSeconds(segundos);
    iniciar.setAttribute('disabled', true);
  }, 1000)
}

iniciar.addEventListener('click', initTimer);
pausar.addEventListener('click', () => {
  clearInterval(timer);
  iniciar.removeAttribute('disabled');
  relogio.classList.add('active')
})
zerar.addEventListener('click', () => {
  clearInterval(timer);
  segundos = 0;
  relogio.innerText = '00:00:00'
  iniciar.removeAttribute('disabled');
  relogio.classList.remove('active')
})