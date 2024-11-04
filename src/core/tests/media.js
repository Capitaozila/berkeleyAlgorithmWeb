function convertToMinutes(time) {
  const [hours, minutes] = time.split(":").map(Number);
  const totalMinutes = hours * 60 + minutes;
  console.log(`Convertendo ${time} para minutos: ${totalMinutes} minutos`);
  return totalMinutes;
}

function convertToTimeString(minutes) {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  const timeString = `${String(hours).padStart(2, "0")}:${String(
    remainingMinutes
  ).padStart(2, "0")}`;
  console.log(
    `Convertendo ${minutes} minutos de volta para "hh:mm": ${timeString}`
  );
  return timeString;
}

// Horários fornecidos
// document.getElementById("manualServerTime").value = "06:30";
// document.getElementById("client1Time").value = "07:15";
// document.getElementById("client2Time").value = "07:45";
// document.getElementById("client3Time").value = "08:00";

const times = ["07:15", "06:45", "04:45", "06:15"];

// Converter cada horário para minutos e somá-los
const totalMinutes = times.reduce((sum, time) => {
  const minutes = convertToMinutes(time);
  return sum + minutes;
}, 0);

console.log(`Total de minutos somados: ${totalMinutes}`);

const Media = totalMinutes / times.length;
console.log(`Média dos horários em minutos: ${Media}`);
console.log(`Média dos horários em "hh:mm": ${convertToTimeString(Media)}`);

// Converter o total de minutos de volta para "hh:mm"
const totalTime = convertToTimeString(totalMinutes);

console.log(`Total de tempo em "hh:mm": ${totalTime}`);
