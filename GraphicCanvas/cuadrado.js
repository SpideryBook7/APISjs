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

function cuadrito(x, y){
    ctx.fillStyle = hslColor(ini);
    ini += 2;
    ctx.fillRect(x, y, 40, 40);
    ctx.strokeRect(x, y, 40, 40);
}

function emoji(x, y){
    ctx.font = '30px Serif';
    ctx.fillText('🎃', x, y);
}

function emoji2(x, y){
    ctx.font = '30px Serif';
    ctx.fillText('👻', x, y);
}

for(let i = 0; i < 5; i++){
    const x = Math.round(Math.random() * 20);
    const y = Math.round(Math.random() * 30);
    emoji2(x * 20, y *20);
}

document.querySelector('body')
.addEventListener('keypress', (e) => {
    e.preventDefault();
})

setInterval(() => {
    emoji(idx, idy);
    idx++;
    emoji2(idx, idy);
    if(idx > 650)idx = 0;
    /* idx += 20;
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
    }*/
    // Cambiar direcciones 
    if (idx > 590) dirX = 2;
    if (idx < 10) dirX = 1;
    if (idy > 390) dirY = 2;
    if (idy < 10) dirY = 1;
}, 0);