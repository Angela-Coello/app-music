/*Asegurarse de que el DOM está cargado*/
document.addEventListener("DOMContentLoaded", function(e) {
    /*
      Seleccionamos todos los elementos del tipo rect
    */
    let theSound = document.querySelectorAll("rect");
  
    /*
       theSound es un arreglo que contiene todos los elementos con el tipo rect,
       los recorremos y aplicamos un listener que será la función playSound
    */
  
    theSound.forEach(function(el, idx) {
      el.addEventListener("click", playSound, false)
    });
  
});
  
  /*
      Usamos this+propiedad  
      para obtener lo que deseemos del elemento
      aquí obtenemos por ejemplo el id
  */
    function playSound(e) {
        e.preventDefault();
        const audio = new Audio(`media/sounds/${this.id}.wav`);
        audio.play();
    }



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
