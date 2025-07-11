function updateClock() {
  const now = new Date();
  const [hours, mins, secs] = [
    now.getHours().toString().padStart(2, '0'),
    now.getMinutes().toString().padStart(2, '0'),
    now.getSeconds().toString().padStart(2, '0')
  ];
  const day = now.getDate().toString().padStart(2, '0');
  const month = (now.getMonth() + 1).toString().padStart(2, '0');
  const year = now.getFullYear();

  const time = `${hours}:${mins}`;
  const timeWithSeconds = `${hours}:${mins}:${secs}`;
  const date = `${month}/${day}/${year}`;

  document.getElementById('hour').textContent = time;
  document.getElementById('hour2').textContent = timeWithSeconds;
  document.getElementById('hour3').textContent = time;
  document.getElementById('date').textContent = date;
}

setInterval(updateClock, 1000);
updateClock();