import {
  createClientElements,
  createClientNavBar,
  generateClients,
  removeClient,
  generateRandomTimes,
  showClient,
} from "../sync/clientSync.js";
import { syncTimes, updateServerTime } from "../sync/berkeleyAlgorithm.js";

document.getElementById("syncButton").addEventListener("click", syncTimes);
document
  .getElementById("generateButton")
  .addEventListener("click", generateRandomTimes);
document
  .getElementById("generateClientButton")
  .addEventListener("click", generateClients);
document
  .getElementById("removeClientButton")
  .addEventListener("click", removeClient);

createClientElements();
createClientNavBar();
showClient(1);

setInterval(updateServerTime, 1000);
updateServerTime();

function initializeRiveCanvas(canvasId, src, stateMachine) {
  return new rive.Rive({
    src: src,
    canvas: document.getElementById(canvasId),
    autoplay: true,
    stateMachines: stateMachine,
    onLoad: () => {
      r.resizeDrawingSurfaceToCanvas();
      r.play();
    },
  });
}

const r = initializeRiveCanvas(
  "canvas",
  "./images/lil_guy_azul_branco.riv",
  "State Machine 1",
);
const r2 = initializeRiveCanvas(
  "canvas2",
  "./images/lil_guy_vermelho_versao_dois.riv",
  "State Machine 1",
);

window.addEventListener("resize", () => {
  r.resizeDrawingSurfaceToCanvas();
  r2.resizeDrawingSurfaceToCanvas();
});
