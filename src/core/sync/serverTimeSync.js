export function updateServerTime() {
  const now = new Date();
  const timeString = now.toTimeString().substring(0, 8);
  document.getElementById("serverTime").textContent = timeString;
}
