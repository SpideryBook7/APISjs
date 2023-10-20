const lienzo = document.querySelector('#canva');
const ctx = lienzo.getContext('2d');


ctx.fillStyle = "gray";
ctx.beginPath();
ctx.arc(100, 100, 0, 60, Math.PI * 2, true);
ctx.fill();
ctx.beginPath();

ctx.fillStyle = "black";
ctx.arc(150, 170, 20, 0, Math.PI * 2, true);
ctx.fill();
ctx.arc(250, 170, 20, 0, Math.PI * 2, true);
ctx.fill();
ctx.beginPath();
ctx.arc(200, 220, 40, 0, Math.PI, false);
ctx.fill();
ctx.beginPath();

ctx.fillStyle = "red";
ctx.arc(150, 170, 10, 0, Math.PI * 2, true);
ctx.fill();
ctx.arc(250, 170, 10, 0, Math.PI * 2, true);
ctx.fill();
ctx.beginPath();

ctx.fillStyle = "black";
ctx.arc(200, 200, 10, 0, Math.PI * 2, true);
ctx.fill();
ctx.beginPath();

ctx.fillStyle = "red";
ctx.arc(200, 220, 60, 2, Math.PI, false);
ctx.fill();

// Quadratic curves example
ctx.beginPath();

// Calcular el centro del lienzo
const centerX = lienzo.width / 2;
const centerY = lienzo.height / 2;
const offsetX = 100; // Valor de desplazamiento hacia la derecha
const offsetY = 50; // Valor de desplazamiento hacia abajo

// Definir las coordenadas de las curvas cuadráticas más grandes y centradas
ctx.moveTo(centerX - 100 + offsetX, centerY - 150 + offsetY);
ctx.quadraticCurveTo(centerX - 200 + offsetX, centerY - 150 + offsetY, centerX - 200 + offsetX, centerY - 25 + offsetY);
ctx.quadraticCurveTo(centerX - 200 + offsetX, centerY + 50 + offsetY, centerX - 100 + offsetX, centerY + 50 + offsetY);
ctx.quadraticCurveTo(centerX - 100 + offsetX, centerY + 90 + offsetY, centerX - 190 + offsetX, centerY + 100 + offsetY);
ctx.quadraticCurveTo(centerX - 130 + offsetX, centerY + 90 + offsetY, centerX - 120 + offsetX, centerY + 50 + offsetY);
ctx.quadraticCurveTo(centerX + offsetX, centerY + 50 + offsetY, centerX + offsetX, centerY - 25 + offsetY);
ctx.quadraticCurveTo(centerX + offsetX, centerY - 150 + offsetY, centerX - 100 + offsetX, centerY - 150 + offsetY);

// Dibujar las curvas cuadráticas
ctx.stroke();