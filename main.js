let $pointerHour = document.querySelector('[data-js="pointerHour"]');
let $pointerMin = document.querySelector('[data-js="pointerMin"]');
let $pointerSec = document.querySelector('[data-js="pointerSec"]');

function movePointers() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const hoursDegrees = hours / 60 * 360 + 90;
  $pointerHour.style.transform = `rotate(${hoursDegrees}deg)`;

  const minutesDegrees = minutes / 60 * 360 + 90;
  $pointerMin.style.transform = `rotate(${minutesDegrees}deg)`;

  const secondsDegrees = seconds / 60 * 360 + 90;
  $pointerSec.style.transform = `rotate(${secondsDegrees}deg)`;

  const allPointers = document.querySelectorAll('[data-js="pointer"]');

  if (secondsDegrees === 90) {
    allPointers.forEach(hand => (hand.style.transition = 'none'));
  } else {
    allPointers.forEach(hand => (hand.style.transition = ''));
  }
}

setInterval(movePointers, 1000);
