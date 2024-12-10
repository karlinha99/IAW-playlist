const inputMusica = document.getElementById('musica');
const btnAdicionar = document.getElementById('adicionar');
const btnContar = document.getElementById('contar');
const divPlaylist = document.getElementById('playlist');

let contador = 0;

btnAdicionar.addEventListener('click', () => {
    const musica = inputMusica.value.trim();
    if (musica) {
        const paragrafo = document.createElement('p');
        paragrafo.textContent = musica;
        divPlaylist.appendChild(paragrafo);
        contador++;
        inputMusica.value = '';
        inputMusica.focus();
    } 
    else {
        alert('Por favor, digite o nome de uma música.');
    }
});

btnContar.addEventListener('click', () => {
    alert(`${contador} música(s) foram adicionadas à playlist.`);
});