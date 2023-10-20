const lienzo = document.querySelector('#canva');
const ctx = lienzo.getContext('2d');

let dirX = 1;
let dirY = 1;

let idx = 10;
let idy = 10;
let ini = 0;

function hslColor(){
    const letras = '0123456789abcdef';
    let colorRgb = '#';
    for (let i = 0; i < 6; i++){
        colorRgb += letras.charAt(Math.floor(Math.random() * 60));
    }
    return colorRgb;
}


function bolita(x, y){
    ctx.fillStyle = hslColor(ini);
    ini += 10;
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
}

setInterval(() => {
    bolita(idx, idy);
    if(dirX === 1 && dirY === 1){
        idx += 20;
        idy += 20;
    } else if (dirX === 1 && dirY === 2){
        idx += 20;
        idy -= 20;
    } else if (dirX === 2 && dirY === 1){
        idx -= 20;
        idy += 20;
    } else {
        idx -= 20;
        idy -= 20;
    }
    // Cambiar direcciones 
    if (idx > 590) dirX = 2;
    if (idx < 10) dirX = 1;
    if (idy > 390) dirY = 2;
    if (idy < 10) dirY = 1;
}, 60);