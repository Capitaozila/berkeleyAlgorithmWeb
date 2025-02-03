const initialValues = {
  manualServerTime: "04:45",
  clients: [
    { time: "05:30", sendTime: "05:30" },
    { time: "05:45", sendTime: "05:45" },
    { time: "06:00", sendTime: "06:00" },
    // Adicione mais clientes conforme necessário
  ],
};

function parseTimeString(timeStr) {
  const [hours, minutes] = timeStr.split(":").map(Number);
  return hours * 60 + minutes;
}

function formatTime(minutes) {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${String(hours).padStart(2, "0")}:${String(mins).padStart(2, "0")}`;
}

function calculateLogicalClock() {
  const serverTime = parseTimeString(initialValues.manualServerTime);

  console.log("Manual Server Time (before):", initialValues.manualServerTime);
  initialValues.clients.forEach((client, index) => {
    console.log(`Cliente ${index + 1} Time (before):`, client.time);
    console.log(`Cliente ${index + 1} Send Time (before):`, client.sendTime);
  });
  let hasError = false;
  let maxDelay = 0;

  const adjustedClientTimes = initialValues.clients.map((client, index) => {
    const clientTime = parseTimeString(client.time);
    const clientSendTime = parseTimeString(client.sendTime);

    if (clientSendTime < clientTime) {
      console.error(
        `Valor do horário de envio do cliente ${index + 1} inválido: ${
          client.sendTime
        }`,
      );
      hasError = true;
      return null;
    }

    const delay = clientSendTime - clientTime;
    maxDelay = Math.max(maxDelay, delay);
    const adjustedClientTime = clientTime + delay;

    console.log(`Cliente ${index + 1} Time (minutes):`, clientTime);
    console.log(`Cliente ${index + 1} Send Time (minutes):`, clientSendTime);
    console.log(`Cliente ${index + 1} Delay (minutes):`, delay);
    console.log(
      `Adjusted Cliente ${index + 1} Time (minutes):`,
      adjustedClientTime,
    );

    return { adjustedClientTime, delay };
  });

  if (hasError) {
    console.log("Erro encontrado. Interrompendo a execução.");
    return;
  }

  const adjustedServerTime = serverTime + maxDelay;

  console.log("Server Time (minutes):", serverTime);
  console.log("Adjusted Server Time (minutes):", adjustedServerTime);
  console.log("Adjusted Server Time (HH:MM):", formatTime(adjustedServerTime));

  const finalAdjustedClientTimes = adjustedClientTimes.map((client, index) => {
    const finalTime =
      client.delay === maxDelay
        ? client.adjustedClientTime
        : client.adjustedClientTime + maxDelay;

    console.log(
      `Adjusted Cliente ${index + 1} Time (HH:MM):`,
      formatTime(finalTime),
    );
    return finalTime;
  });

  const totalAdjustedTime = finalAdjustedClientTimes.reduce(
    (sum, time) => sum + time,
    adjustedServerTime,
  );
  const logicalClock = Math.floor(
    totalAdjustedTime / (finalAdjustedClientTimes.length + 1),
  );

  console.log("Novo Clock Lógico:", formatTime(logicalClock));
  console.log("Manual Server Time (after):", formatTime(adjustedServerTime));
  finalAdjustedClientTimes.forEach((clientTime, index) => {
    console.log(`Cliente ${index + 1} Time (after):`, formatTime(clientTime));
  });
}

function runTests() {
  const testCases = [
    // {
    //   manualServerTime: "04:45",
    //   clients: [
    //     { time: "05:30", sendTime: "05:30" },
    //     { time: "05:45", sendTime: "05:45" },
    //     { time: "06:00", sendTime: "06:00" },
    //   ],
    // },
    {
      manualServerTime: "04:45",
      clients: [
        { time: "06:15", sendTime: "06:15" },
        { time: "06:45", sendTime: "06:45" },
        { time: "07:15", sendTime: "07:15" },
      ],
    },
    // {
    //   manualServerTime: "10:30",
    //   clients: [
    //     { time: "10:00", sendTime: "10:00" },
    //     { time: "10:10", sendTime: "10:40" },
    //   ],
    // },
  ];

  testCases.forEach((testCase, index) => {
    console.log(`\nRunning Test Case ${index + 1}`);
    initialValues.manualServerTime = testCase.manualServerTime;
    initialValues.clients = testCase.clients;
    calculateLogicalClock();
  });
}

runTests();
