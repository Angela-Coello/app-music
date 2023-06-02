// click

let bomboCajon = document.getElementById('bomboCajon');
bomboCajon.addEventListener('click', (e) => {
    e.preventDefault();
    const audio = new Audio('../media/sounds/bomboCajon.wav');
    audio.play();
})

let agudoCajon = document.getElementById('agudoCajon');
agudoCajon.addEventListener('click', (e) => {
    e.preventDefault();
    const audio = new Audio('../media/sounds/AgudoCajon.wav');
    audio.play();
})

let agudoCajonFuerte = document.getElementById('agudoCajonFuerte');
agudoCajonFuerte.addEventListener('click', (e) => {
    e.preventDefault();
    const audio = new Audio('../media/sounds/AgudoCajonFuerte.wav');
    audio.play();
})

let clap = document.getElementById('clap')
clap.addEventListener('click', (e) => {
    e.preventDefault();
    const audio = new Audio('../media/sounds/clap.mp3');
    audio.play();
})


// tecla


function cajonKeydownSound(event) {
    let audio;
    switch (event.keyCode) {
        case 71: {
            audio = new Audio('../media/sounds/AgudoCajon.wav');
            audio.play();
            break;
        }
        case 72: {
            audio = new Audio('../media/sounds/AgudoCajonFuerte.wav');
            audio.play();
            break;
        }
        case 66: {
            audio = new Audio('../media/sounds/bomboCajon.wav');
            audio.play();
            break;
        }
        case 76: {
            audio = new Audio('../media/sounds/clap.mp3');
            audio.play();
            break;
        }
        default: {
            break;
        }
    }
}

document.addEventListener("keydown", cajonKeydownSound);