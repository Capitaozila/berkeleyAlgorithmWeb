import { parseTimeString, formatTime } from "../time/timeUtilities.js";
import { showError } from "../messages/messageHandler.js";

export function calculateLogicalClock(initialValues) {
  const serverTime = parseTimeString(initialValues.manualServerTime);
  console.log("Manual Server Time (before):", initialValues.manualServerTime);

  let hasError = false;
  const clientTimes = initialValues.clients.map((client, index) => {
    const clientTime = parseTimeString(client.time);
    const clientSendTime = parseTimeString(client.sendTime);
    if (clientSendTime < clientTime) {
      const errorMessage = `Error: Client ${index + 1}'s send time (${client.sendTime}) is earlier than the local time (${client.time}).`;
      console.error(errorMessage);
      showError(errorMessage, 5000);
      hasError = true;
      return null;
    }
    return { clientTime, clientSendTime, clientNumber: index + 1 };
  });

  if (hasError) {
    console.log("Error found. Stopping execution.");
    return;
  }

  // Calcular o clock lógico com base nos horários locais dos clientes
  const totalClientTime = clientTimes.reduce(
    (sum, client) => sum + client.clientTime,
    0,
  );
  const logicalClock = Math.floor(totalClientTime / clientTimes.length);
  console.log("New Logical Clock:", formatTime(logicalClock));

  // Ajustar os tempos dos clientes com base na diferença entre o tempo de envio e o tempo do servidor
  const adjustedClientTimes = clientTimes.map((client) => {
    const delay = client.clientSendTime - serverTime;
    const adjustedClientTime = client.clientTime + delay;
    const secondDelay = client.clientSendTime - client.clientTime;
    console.log(`Client ${client.clientNumber} Delay (minutes):`, delay);
    console.log(
      `Adjusted Client ${client.clientNumber} Time (minutes):`,
      adjustedClientTime,
    );
    console.log(
      `Client ${client.clientNumber} Second Delay (minutes):`,
      secondDelay,
    );
    return {
      time: formatTime(client.clientTime),
      adjustedClientTime,
      delay,
      secondDelay,
      clientNumber: client.clientNumber,
      sendTime: formatTime(client.clientSendTime),
    };
  });

  // Ordenar os clientes com base no secondDelay
  adjustedClientTimes.sort((a, b) => a.secondDelay - b.secondDelay);

  // Calcular o maior valor de secondDelay
  const maxSecondDelay = Math.max(
    ...adjustedClientTimes.map((client) => client.secondDelay),
  );

  // Ajustar o tempo do servidor com base no maior secondDelay
  const adjustedServerTime = serverTime + maxSecondDelay;
  console.log("Server Time (minutes):", serverTime);
  console.log("Adjusted Server Time (minutes):", adjustedServerTime);

  // Recalcular o clock lógico com base nos tempos ajustados dos clientes e do servidor
  const totalAdjustedTime = adjustedClientTimes.reduce(
    (sum, client) => sum + client.adjustedClientTime,
    adjustedServerTime,
  );
  const newLogicalClock = Math.floor(
    totalAdjustedTime / (adjustedClientTimes.length + 1),
  );
  console.log("Recalculated Logical Clock:", formatTime(newLogicalClock));

  return {
    logicalClock: formatTime(newLogicalClock),
    adjustedServerTime: formatTime(adjustedServerTime),
    finalAdjustedClientTimes: adjustedClientTimes.map((client) => ({
      ...client,
      adjustedClientTime: formatTime(client.adjustedClientTime),
    })),
  };
}
