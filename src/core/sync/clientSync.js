import { showError } from "../messages/messageHandler";

export const clients = Array.from({ length: 3 }, (_, i) => ({
  id: i + 1,
  name: `Client ${i + 1}`,
}));

export function createClientElements() {
  const container = document.getElementById("clientsContainer");
  container.innerHTML = "";

  clients.forEach((client) => {
    const clientDiv = document.createElement("div");
    clientDiv.id = `client${client.id}`;
    clientDiv.className =
      "client-content column center-align animate__animated active";
    clientDiv.innerHTML = `
      <fieldset class="no-border">
        <legend class="small-margin"><h2>${client.name}</h2></legend>
        <div class="field border round small">
          <label class="small-margin large-text" for="client${client.id}Time">
            Local Time:
          </label>
          <input
            type="time"
            id="client${client.id}Time"
            title="Enter the client's local time"
            placeholder="HH:MM"
          />
        </div>
        <div class="field border round small">
          <label class="small-margin large-text" for="client${client.id}SendTime">
            Send Time:
          </label>
          <input
            type="time"
            id="client${client.id}SendTime"
            title="Enter the client's send time"
            placeholder="HH:MM"
          />
        </div>
      </fieldset>
    `;
    container.appendChild(clientDiv);
  });
}

export function createClientNavBar() {
  const navBar = document.getElementById("clientsNavBar");
  navBar.innerHTML = "";

  createThemeToggleButton();

  navBar.className = "bottom fixed";

  clients.forEach((client) => {
    const clientLink = document.createElement("a");
    clientLink.onclick = () => showClient(client.id);
    clientLink.title = `Switch to ${client.name}`;
    clientLink.innerHTML = `
      <i class="fa-solid fa-clock primary-text"></i>
      <div>${client.name}</div>
    `;
    navBar.appendChild(clientLink);
  });
}

function createThemeToggleButton() {
  const themeToggleButton = document.getElementById("theme-toggle");
  if (!themeToggleButton) {
    const newThemeToggleButton = document.createElement("button");
    newThemeToggleButton.className =
      "secondary rounded small-margin fixed top right animate__animated animate__fadeIn";
    newThemeToggleButton.id = "theme-toggle";
    newThemeToggleButton.title = "Toggle light/dark theme";
    newThemeToggleButton.innerHTML = `
      <i class="fas fa-moon"></i>
    `;
    document.body.appendChild(newThemeToggleButton);
  }
}

export function removeThemeToggleButton() {
  const themeToggleButton = document.getElementById("theme-toggle");
  if (themeToggleButton) {
    themeToggleButton.classList.add("animate__fadeOut");
    themeToggleButton.addEventListener(
      "animationend",
      () => {
        themeToggleButton.remove();
      },
      { once: true },
    );
  }
}

export function generateClients() {
  const newClientId = clients.length + 1;
  const newClient = { id: newClientId, name: `Client ${newClientId}` };
  clients.push(newClient);
  const container = document.getElementById("clientsContainer");
  const clientDiv = document.createElement("div");
  clientDiv.id = `client${newClient.id}`;
  clientDiv.className =
    "client-content column center-align hidden animate__animated";
  clientDiv.innerHTML = `
    <fieldset class="no-border">
      <legend class="small-margin"><h2>${newClient.name}</h2></legend>
      <div class="field border round small">
        <label class="small-margin large-text" for="client${newClient.id}Time">
          Local Time:
        </label>
        <input
          type="time"
          id="client${newClient.id}Time"
          title="Enter the client's local time"
          placeholder="HH:MM"
        />
      </div>
      <div class="field border round small">
        <label class="small-margin large-text" for="client${newClient.id}SendTime">
          Send Time:
        </label>
        <input
          type="time"
          id="client${newClient.id}SendTime"
          title="Enter the client's send time"
          placeholder="HH:MM"
        />
      </div>
    </fieldset>
  `;
  container.appendChild(clientDiv);
  const navBar = document.getElementById("clientsNavBar");
  const clientLink = document.createElement("a");
  clientLink.onclick = () => showClient(newClient.id);
  clientLink.title = `Switch to ${newClient.name}`;
  clientLink.innerHTML = `
    <i class="fa-solid fa-clock primary-text"></i>
    <div>${newClient.name}</div>
  `;
  navBar.appendChild(clientLink);
  console.log(`Client ${newClientId} generated:`, newClient);
}

export function removeClient() {
  if (clients.length > 1) {
    const clientToRemove = clients.pop();
    const clientDiv = document.getElementById(`client${clientToRemove.id}`);
    clientDiv.classList.add("animate__fadeOut");
    clientDiv.addEventListener(
      "animationend",
      () => {
        clientDiv.remove();
      },
      { once: true },
    );

    const navBar = document.getElementById("clientsNavBar");
    const lastClientLink = navBar.lastElementChild;
    lastClientLink.classList.add("animate__fadeOut");
    lastClientLink.addEventListener(
      "animationend",
      () => {
        lastClientLink.remove();
      },
      { once: true },
    );

    console.log(`Client ${clientToRemove.id} removed`);
  } else {
    showError("Cannot remove the last client.");
  }
}

export function generateRandomTimes() {
  clients.forEach((client) => {
    const randomHour = String(Math.floor(Math.random() * 24)).padStart(2, "0");
    const randomMinute = String(Math.floor(Math.random() * 60)).padStart(
      2,
      "0",
    );
    const randomTime = `${randomHour}:${randomMinute}`;
    document.getElementById(`client${client.id}Time`).value = randomTime;

    const clientTimeDate = new Date(`1970-01-01T${randomTime}Z`);

    const randomOffset = Math.floor(Math.random() * 30 * 60 * 1000);

    const sendTimeDate = new Date(clientTimeDate.getTime() + randomOffset);

    const sendTime = sendTimeDate.toISOString().substring(11, 16);
    document.getElementById(`client${client.id}SendTime`).value = sendTime;

    console.log(
      `Client ${client.id} - Generated local time: ${randomTime}, Generated send time: ${sendTime}`,
    );
  });
}

export function showClient(clientId) {
  clients.forEach((client) => {
    const clientDiv = document.getElementById(`client${client.id}`);
    if (client.id === clientId) {
      clientDiv.classList.remove("hidden");
      clientDiv.classList.add("active", "animate__animated", "animate__fadeIn");
    } else {
      clientDiv.classList.remove("active", "animate__fadeIn");
      clientDiv.classList.add("hidden");
    }
  });
}
