export function updateOrderOfEvents(clientsData, avgTime) {
  const orderLabels = [
    "First",
    "Second",
    "Third",
    "Fourth",
    "Fifth",
    "Sixth",
    "Seventh",
    "Eighth",
    "Ninth",
    "Tenth",
  ];

  const orderOfEvents = clientsData
    .map((client, index) => {
      const {
        sendTime,
        time: localTime,
        delay,
        adjustedClientTime: adjustedTime,
        clientNumber,
      } = client;
      return `
        <div class="padding-1 border margin article center-align">
          <span class="bold">${orderLabels[index] || `${index + 1}th`}:</span>
          <span class="bold">Client ${clientNumber}</span>
          <div>Local Time: ${localTime}</div>
          <div>Send Time: ${sendTime}</div>
          <div>Calculated Delay: ${delay} minutes</div>
          <div>Adjusted Time: ${adjustedTime}</div>
        </div>`;
    })
    .join("");

  document.getElementById("orderOfEvents").innerHTML = `
    <article class="blue-background test animate__animated animate__fadeIn">
      <h5 class="bold">Logical Clock (Average Time): ${avgTime}</h5>
      <p>${orderOfEvents}</p>
      <nav class="center-align">
        <button id="closeOrderOfEvents" class="close-button rounded small-margin">
          Close<i class="fa-solid fa-xmark"></i>
        </button>
        <button id="openDialog" class="open-button rounded small-margin hidden">
          Show Chart<i class="fa-solid fa-chart-line"></i>
        </button>
      </nav>
    </article>
    <dialog id="beerDialog" class="modal large">
      <h5>Time Chart</h5>
      <nav class="center-align no-space bottom">
        <button id="cancelDialog" class="close-button">Close<i class="fa-solid fa-xmark"></i></button>
      </nav>
    </dialog>
    `;

  const closeOrderOfEventsButton =
    document.getElementById("closeOrderOfEvents");
  if (closeOrderOfEventsButton) {
    closeOrderOfEventsButton.addEventListener("click", () => {
      document.getElementById("orderOfEvents").innerHTML = "";
    });
  }

  const openDialogButton = document.getElementById("openDialog");
  if (openDialogButton) {
    openDialogButton.addEventListener("click", () => {
      document.querySelector(".container").classList.add("blur-background");
      document.getElementById("theme-toggle").classList.add("hidden");
      document.getElementById("beerDialog").showModal();
    });
  }

  const cancelDialogButton = document.getElementById("cancelDialog");
  if (cancelDialogButton) {
    cancelDialogButton.addEventListener("click", () => {
      document.querySelector(".container").classList.remove("blur-background");
      document.getElementById("theme-toggle").classList.remove("hidden");
      document.getElementById("beerDialog").close();
    });
  }

  const confirmDialogButton = document.getElementById("confirmDialog");
  if (confirmDialogButton) {
    confirmDialogButton.addEventListener("click", () => {
      document.querySelector(".container").classList.remove("blur-background");
      document.getElementById("beerDialog").close();
    });
  }
}
