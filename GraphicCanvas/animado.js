const lienzo = document.querySelector('#canva');

const ctx = lienzo.getContext('2d');

let idX = 0;
let idY = 0;

function rgbRandom(){
    const letras = '0123456789abcdef';
    let colorRgb = '#';
    for (let i = 0; i < 6; i++){
        colorRgb += letras.charAt(Math.floor(Math.random() * 16));
    }
    return colorRgb;
}

function cuadro(x, y){
    ctx.fillStyle = rgbRandom();
    ctx.fillRect(x, y, 16, 16);
    ctx.strokeRect(x, y, 16, 16);
}

setInterval(() => {
    cuadro(idX, idY);
    if(idX < 380){
        idX += 20;
    } else {
        idY += 20;
            idX = 0;
    }
}, 60);
