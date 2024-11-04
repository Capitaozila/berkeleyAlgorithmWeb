import { parseTimeString, formatTime } from "../time/timeUtilities.js";
import { showError } from "../messages/messageHandler.js";

export function calculateLogicalClock(initialValues) {
  const serverTime = parseTimeString(initialValues.manualServerTime);

  console.log("Manual Server Time (before):", initialValues.manualServerTime);

  let hasError = false;
  let maxDelay = 0;

  const adjustedClientTimes = initialValues.clients.map((client, index) => {
    const clientTime = parseTimeString(client.time);
    const clientSendTime = parseTimeString(client.sendTime);

    if (clientSendTime < clientTime) {
      const errorMessage = `Error: Client ${index + 1}'s send time (${
        client.sendTime
      }) is earlier than the local time (${client.time}).`;
      console.error(errorMessage);
      showError(errorMessage, 5000);
      hasError = true;
      return null;
    }

    const delay = clientSendTime - clientTime;
    maxDelay = Math.max(maxDelay, delay);
    const adjustedClientTime = clientTime + delay;

    console.log(`Client ${index + 1} Time (minutes):`, clientTime);
    console.log(`Client ${index + 1} Send Time (minutes):`, clientSendTime);
    console.log(`Client ${index + 1} Delay (minutes):`, delay);
    console.log(
      `Adjusted Client ${index + 1} Time (minutes):`,
      adjustedClientTime
    );

    return {
      time: client.time,
      adjustedClientTime,
      delay,
      clientNumber: index + 1,
      sendTime: client.sendTime,
    };
  });

  if (hasError) {
    console.log("Error found. Stopping execution.");
    return;
  }

  const adjustedServerTime = serverTime + maxDelay;

  console.log("Server Time (minutes):", serverTime);
  console.log("Adjusted Server Time (minutes):", adjustedServerTime);

  const finalAdjustedClientTimes = adjustedClientTimes.map((client, index) => {
    const finalTime =
      client.delay === maxDelay
        ? client.adjustedClientTime
        : client.adjustedClientTime + maxDelay;

    console.log(
      `Adjusted Client ${index + 1} Time (HH:MM):`,
      formatTime(finalTime)
    );
    return { ...client, adjustedClientTime: finalTime };
  });

  finalAdjustedClientTimes.sort(
    (a, b) => a.adjustedClientTime - b.adjustedClientTime
  );

  const totalAdjustedTime = finalAdjustedClientTimes.reduce(
    (sum, client) => sum + client.adjustedClientTime,
    adjustedServerTime
  );
  const logicalClock = Math.floor(
    totalAdjustedTime / (finalAdjustedClientTimes.length + 1)
  );

  console.log("New Logical Clock:", formatTime(logicalClock));
  console.log("Manual Server Time (after):", formatTime(adjustedServerTime));
  finalAdjustedClientTimes.forEach((client, index) => {
    console.log(
      `Client ${index + 1} Time (after):`,
      formatTime(client.adjustedClientTime)
    );
  });

  return {
    logicalClock: formatTime(logicalClock),
    adjustedServerTime: formatTime(adjustedServerTime),
    finalAdjustedClientTimes: finalAdjustedClientTimes.map((client) => ({
      ...client,
      adjustedClientTime: formatTime(client.adjustedClientTime),
    })),
  };
}