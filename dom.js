document.addEventListener('DOMContentLoaded', function () {

    const input = document.querySelector('#text');

    const bold = document.querySelector('#bold');
    const italic = document.querySelector('#italic');
    const mono = document.querySelector('#mono');
    const upper = document.querySelector('#upper');

    input.addEventListener('input', function(e) {
        const value = e.target.value;

        bold.textContent = value;
        italic.textContent = value;
        mono.textContent = value;
        upper.textContent = value.toUpperCase();
    });

});