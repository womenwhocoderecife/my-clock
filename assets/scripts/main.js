let $pointerHour = document.querySelector('[data-js="pointerHour"]');
let $pointerMin = document.querySelector('[data-js="pointerMin"]');
let $pointerSec = document.querySelector('[data-js="pointerSec"]');

function movePointers() {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegrees = seconds / 60 * 360 + 90;
  $pointerSec.style.transform = `rotate(${secondsDegrees}deg)`;

  const minutes = now.getMinutes();
  const minutesDegrees = minutes / 60 * 360 + 90;
  $pointerMin.style.transform = `rotate(${minutesDegrees}deg)`;

  const hours = now.getHours();
  const hoursDegrees = hours / 12 * 360 + 90;
  $pointerHour.style.transform = `rotate(${hoursDegrees}deg)`;

  const allPointers = document.querySelectorAll('.pointer');

  if (secondsDegrees === 90) {
    allPointers.forEach(pointer => (pointer.style.transition = 'none'));
  } else {
    allPointers.forEach(pointer => (pointer.style.transition = ''));
  }
}

setInterval(movePointers, 1000);
