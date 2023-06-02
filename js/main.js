let kick = document.getElementById('kick');
kick.addEventListener('click', (e) => {
    e.preventDefault();
    const audio = new Audio('media/sounds/kick.wav');
    audio.play();
})

let tom3 = document.getElementById('tom3');
tom3.addEventListener('click', (e) => {
    e.preventDefault();
    const audio = new Audio('media/sounds/tom3.wav');
    audio.play();
})

let hihat = document.getElementById("hihat");
hihat.addEventListener('click', (e) => {
    e.preventDefault();
    const audio = new Audio('media/sounds/hihat.wav');
    audio.play();
})

let tom1 = document.getElementById("tom1");
tom1.addEventListener('click', (e) => {
    e.preventDefault();
    const audio = new Audio('media/sounds/tom1.wav');
    audio.play();
})

let tom2 = document.getElementById("tom2");
tom2.addEventListener('click', (e) => {
    e.preventDefault();
    const audio = new Audio('media/sounds/tom2.wav');
    audio.play();
})

let ride = document.getElementById("ride");
ride.addEventListener('click', (e) => {
    e.preventDefault();
    const audio = new Audio('media/sounds/ride.mp3');
    audio.play();
})

let box = document.getElementById("box");
box.addEventListener('click', (e) => {
    e.preventDefault();
    const audio = new Audio('media/sounds/box.wav');
    audio.play();
})

//Función para emitir sonido al presionar una tecla
function keydownSound(event) {
    let audio;
    switch (event.keyCode) {
        case 66: {
            audio = new Audio('media/sounds/kick.wav');
            audio.play();
            break;
        }

        case 78: {
            audio = new Audio('media/sounds/tom3.wav');
            audio.play();
            break;
        }

        case 71: {
            audio = new Audio('media/sounds/hihat.wav');
            audio.play();
            break;
        }

        case 72: {
            audio = new Audio('media/sounds/box.wav');
            audio.play();
            break;
        }
            
        case 74: {
            audio = new Audio('media/sounds/ride.mp3');
            audio.play();
            break;
        }

        case 85: {
            audio = new Audio('media/sounds/tom2.wav');
            audio.play();
            break;
        }

        case 89: {
            audio = new Audio('media/sounds/tom1.wav');
            audio.play();
            break;
        }
          
        default: {
            break;
        }
    }
}

document.addEventListener("keydown", keydownSound);
