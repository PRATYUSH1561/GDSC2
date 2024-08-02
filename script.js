document.addEventListener('DOMContentLoaded', function () {
    var hamburger = document.getElementById('hamburger');
    var closeBtn = document.getElementById('close');
    var menu = document.getElementById('menu');

    hamburger.addEventListener('click', function () {
        menu.style.display = 'block';
    });

    closeBtn.addEventListener('click', function () {
        menu.style.display = 'none';
    });
});
