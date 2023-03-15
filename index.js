// DOM елементы
const input = document.getElementById("input");
const clock = document.getElementById("clock");

let timer;
let seconds = 0;

function start() {
  // Получаем время в секундах
  const a = input.value.split(":");
  seconds = +a[0] * 60 * 60 + +a[1] * 60 + +a[2];

  //Удаляем запущенный таймер если есть
  clearTimeout(timer);

  // Обновляем часы
  updateClock();
}

function updateClock() {
  clock.innerHTML = formatTime(seconds);
  seconds -= 1;

  if (seconds >= 0) {
    timer = setTimeout(updateClock, 1000);
  }
}

const formatTime = (seconds) =>
  new Date(seconds * 1000).toISOString().slice(11, 19);
