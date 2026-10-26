// Wedding countdown uses Taiwan local time (UTC+08:00).
const weddingTime = new Date('2027-06-12T00:00:00+08:00').getTime();
const pad = value => String(value).padStart(2, '0');
function updateCountdown() {
  const remaining = Math.max(0, weddingTime - Date.now());
  const days = Math.floor(remaining / 86400000);
  const hours = Math.floor((remaining % 86400000) / 3600000);
  const minutes = Math.floor((remaining % 3600000) / 60000);
  document.getElementById('days').textContent = days;
  document.getElementById('hours').textContent = pad(hours);
  document.getElementById('minutes').textContent = pad(minutes);
}
updateCountdown();
setInterval(updateCountdown, 60000);
document.querySelectorAll('[data-pending]').forEach(button => {
  button.addEventListener('click', () => {
    const message = `${button.dataset.pending}功能尚未開放，敬請期待。`;
    document.getElementById('feature-note').textContent = message;
  });
});
