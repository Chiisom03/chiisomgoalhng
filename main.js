function updateTimeAndDay() {
  const currentTimeUTC = new Date().toISOString().split('T')[1].split('.')[0];
  const currentDay = new Date().toLocaleDateString('en-US', { weekday: 'long' });

  document.querySelector('[data-testid="currentTimeUTC"]').textContent = currentTimeUTC;
  document.querySelector('[data-testid="currentDay"]').textContent = currentDay;
}

window.onload = function() {
  updateTimeAndDay();
  setInterval(updateTimeAndDay, 1000); // Update every second
};
