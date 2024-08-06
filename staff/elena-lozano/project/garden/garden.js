document.addEventListener('DOMContentLoaded', function () {
    // Obtiene el elemento de audio
    var audioGarden = document.getElementById('audioGarden');

    // Obtiene el elemento de la modal y el botón
    var modalGarden = document.getElementById('modalGarden');
    var btnOK = document.getElementById('btnOK');

    // Muestra la modal al cargar la página
    modalGarden.style.display = 'block';

    // Asocia un evento al botón OK
    btnOK.addEventListener('click', function () {
        // Oculta la modal
        modalGarden.style.display = 'none';

        // Reproduce el audio en bucle
        audioGarden.play();
    });
});