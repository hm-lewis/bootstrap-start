const avaaNappi = document.getElementById('uusiikkuna');
const kuva1 = document.getElementById('kuva1');
avaaNappi.addEventListener('click', avaaUuteenIkkunaan);

function avaaUuteenIkkunaan() {
    var url = kuva1.getAttribute('src');
    window.open(url);
}