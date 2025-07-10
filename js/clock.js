function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const mins = String(now.getMinutes()).padStart(2, '0');
  const secs = String(now.getSeconds()).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const month = String(now.getMonth() + 1).padStart(2, '0'); // Meses van de 0 a 11
  const year = now.getFullYear();

  const formattedDate = `${month}/${day}/${year}`;

  document.getElementById('hour').textContent = `${hours}:${mins}`;
  document.getElementById('hour2').textContent = `${hours}:${mins}:${secs}`;
  document.getElementById('hour3').textContent = `${hours}:${mins}`;
  document.getElementById('date').textContent = formattedDate;
}

setInterval(updateClock, 1000);
updateClock();