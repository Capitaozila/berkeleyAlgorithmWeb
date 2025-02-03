# Tempo que se passou por cliente 0 min 10 min 20 min

| Cliente/Sistema | Hora após 0 min | Hora após 10 min | Hora após 20 min |
| --------------- | --------------- | ---------------- | ---------------- |
| Cliente 1       | 02:45           | 02:55            | 03:05            |
| Cliente 2       | 02:55           | 03:05            | 03:15            |
| Sistema         | 03:05           | 03:15            | 03:25            |
| Clock Lógico    | 02:55           | 03:05            | 03:15            |

## Como calcular o tempo que se passou por um cliente?

vamos primeiro pegar todas as horas locais de cada cliente e transformar em uma linha do tempo em ordem cronologica.
seguindo o exemplo de :

```javascript
window.onload = function () {
  // Definir valores iniciais padrão
  document.getElementById("manualServerTime").value = "03:05";
  // Valores do Cliente 1
  document.getElementById("client1Time").value = "02:45";
  document.getElementById("client1SendTime").value = "02:45";
  // Valores do Cliente 2
  document.getElementById("client2Time").value = "02:55";
  document.getElementById("client2SendTime").value = "03:05";
};
```

com isso, temos a seguinte linha do tempo do menor ao maior tempo:

| Cliente/Sistema | Hora local |
| --------------- | ---------- |
| Cliente 1       | 2:45       |
| Cliente 2       | 2:55       |
| Sistema         | 3:05       |

|                   | Hora após 0 min    | Hora após 10 min   | Hora após 15 min   | Hora após 20 min   |
| ----------------- | ------------------ | ------------------ | ------------------ | ------------------ |
| Cliente 1         | 14:45              | 14:55              | 15:00              | 15:05              |
| Cliente 2         | 14:55              | 15:05              | 15:10              | 15:15              |
| Sistema           | 15:05              | 15:15              | 15:20              | 15:25              |
| Clock Lógico      | 14:55              | 15:05              | 15:10              | 15:15              |
| ----------------- | ------------------ | ------------------ | ------------------ | ------------------ |

Teste 2

|                   | Hora após 0 min    | Hora após 10 min   | Hora após 20 min   | Hora após 30 min   |
| ----------------- | ------------------ | ------------------ | ------------------ | ------------------ |
| Cliente 1         | 10:00              | 10:10              | 10:20              | 10:30              |
| Cliente 2         | 10:10              | 10:20              | 10:30              | 10:40              |
| Sistema           | 10:30              | 10:40              | 10:50              | 11:00              |
| Clock Lógico      | 10:13              | 10:23              | 10:33              | 10:43              |
| ----------------- | ------------------ | ------------------ | ------------------ | ------------------ |
