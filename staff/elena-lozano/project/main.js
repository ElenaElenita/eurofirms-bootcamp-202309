// DOMContentLoaded Se ejecuta antes de que cargue el contenido
document.addEventListener('DOMContentLoaded', function () {
    // Obtiene el elemento de audio
    var audioExt = document.getElementById('audioExt');
    var hoverAudio = document.getElementById('hoverAudio');
    var waterAudio = document.getElementById("waterAudio");

    // Obtiene el elemento de la modal y el botón
    var modal = document.getElementById('myModal');
    var btnOK = document.getElementById('btnOK');

    // Muestra la modal al cargar la página
    modal.style.display = 'block';

    // Asocia un evento al botón OK
    btnOK.addEventListener('click', function () {
        // Oculta la modal
        modal.style.display = 'none';

        // Reproduce el audio en bucle
        audioExt.play();
    });


    // 1-Obtiene la zona de la derecha
    var rightZone = document.querySelector('.right-zone');

    // 2-Reproduce el audio hoverAudio al entrar en la zona derecha
    rightZone.addEventListener('mouseenter', function () {
        console.log("Mouse entered right zone, attempting to play hoverAudio");
        hoverAudio.play().catch(function (e) {
            console.error("Error playing hoverAudio: ", e);
        });
    });

    // 3-Pausa el audio hoverAudio al salir de la zona derecha
    rightZone.addEventListener('mouseleave', function () {
        console.log("Mouse left right zone, pausing hoverAudio");
        hoverAudio.pause();
        hoverAudio.currentTime = 0;
    });

    // 4-Reproduce el audio hoverAudio cuando el div right-zone recibe el enfoque
    rightZone.addEventListener('focus', function () {
        console.log("Right zone focused, attempting to play hoverAudio");
        hoverAudio.play().catch(function (e) {
            console.error("Error playing hoverAudio: ", e);
        });
    });

    // 5-Pausa el audio hoverAudio cuando el div right-zone pierde el enfoque
    rightZone.addEventListener('blur', function () {
        console.log("Right zone lost focus, pausing hoverAudio");
        hoverAudio.pause();
        hoverAudio.currentTime = 0;
    });

    // Obtiene la parte izquierda
    var leftZone = document.querySelector('.left-zone');

    // 1-Reproduce el audio waterAudio al entrar en la zona izquierda
    leftZone.addEventListener('mouseenter', function () {
        console.log("Mouse entered right zone, attempting to play waterAudio");
        waterAudio.play().catch(function (e) {
            console.error("Error playing waterAudio: ", e);
        });
    });
    //2-Reproduce el audio waterAudio al entrar en la zona derecha
    leftZone.addEventListener('mouseenter', function () {
        console.log("Mouse entered left zone, attempting to play waterAudio");
        waterAudio.play().catch(function (e) {
            console.error("Error playing waterAudio: ", e);
        });
    });
    //3-Pausa el audio waterAudio al salir de la zona izda
    leftZone.addEventListener('mouseleave', function () {
        console.log("Mouse left left zone, pausing waterAudio");
        waterAudio.pause();
        waterAudio.currentTime = 0;
    });
    // 4-Reproduce el audio waterAudio cuando el div left-zone recibe el enfoque del tab
    leftZone.addEventListener('focus', function () {
        console.log("Left zone focused, attempting to play waterAudio");
        waterAudio.play().catch(function (e) {
            console.error("Error playing waterAudio: ", e);
        });
    });
    // 5-Pausa el audio waterAudio cuando el div left-zone pierde el enfoque
    leftZone.addEventListener('blur', function () {
        console.log("Left zone lost focus, pausing waterAudio");
        waterAudio.pause();
        waterAudio.currentTime = 0;
    });
});