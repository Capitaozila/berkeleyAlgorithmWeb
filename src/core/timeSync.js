import { clients } from "./sync/clientSync.js";
import { updateOrderOfEvents } from "./contentManager.js";
import { calculateLogicalClock } from "./sync/logicalClock.js";
import { showError, showSuccess } from "./messages/messageHandler.js";

export function syncTimes() {
  const manualServerTime = document.getElementById("manualServerTime").value;

  if (!manualServerTime) {
    showError("Please enter the server time.");
    return;
  }

  let hasError = false;

  const initialValues = {
    manualServerTime,
    clients: clients.map((client) => {
      const clientTime = document.getElementById(
        `client${client.id}Time`,
      ).value;
      const sendTime = document.getElementById(
        `client${client.id}SendTime`,
      ).value;

      if (!clientTime || !sendTime) {
        showError(`Please fill in all fields for ${client.name}.`);
        hasError = true;
        return null;
      }

      return { time: clientTime, sendTime };
    }),
  };

  if (hasError) {
    console.log("Error found. Stopping execution.");
    return;
  }

  console.log("Client data before synchronization:", initialValues.clients);

  const result = calculateLogicalClock(initialValues);

  if (result) {
    updateOrderOfEvents(result.finalAdjustedClientTimes, result.logicalClock);
    showSuccess("Synchronization completed successfully!");
  }
}
