import { updateServerTime } from "../sync/serverTimeSync.js";
import { syncTimes } from "../timeSync.js";

window.onload = function () {
  document.getElementById("manualServerTime").value = "14:54";
  document.getElementById("client1Time").value = "14:46";
  document.getElementById("client1SendTime").value = "14:46";
  document.getElementById("client2Time").value = "15:24";
  document.getElementById("client2SendTime").value = "15:24";
  document.getElementById("client3Time").value = "13:46";
  document.getElementById("client3SendTime").value = "14:26";

  document.getElementById("syncButton").addEventListener("click", syncTimes);
  updateServerTime();
};
