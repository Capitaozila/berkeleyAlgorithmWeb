import { updateServerTime } from "../sync/serverTimeSync.js";
import { syncTimes } from "../timeSync.js";

window.onload = function () {
  document.getElementById("manualServerTime").value = "04:45";
  document.getElementById("client1Time").value = "05:30";
  document.getElementById("client1SendTime").value = "05:30";
  document.getElementById("client2Time").value = "05:45";
  document.getElementById("client2SendTime").value = "05:45";
  document.getElementById("client3Time").value = "06:00";
  document.getElementById("client3SendTime").value = "06:00";

  // document.getElementById("manualServerTime").value = "06:30";
  // document.getElementById("client1Time").value = "07:15";
  // document.getElementById("client1SendTime").value = "07:15";
  // document.getElementById("client2Time").value = "07:45";
  // document.getElementById("client2SendTime").value = "07:45";
  // document.getElementById("client3Time").value = "08:00";
  // document.getElementById("client3SendTime").value = "08:00";

  document.getElementById("syncButton").addEventListener("click", syncTimes);
  updateServerTime();
};
