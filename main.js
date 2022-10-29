const DATA_FETCH_INTERVAL = 5000;
const API_ROOT = 'https://radio.vladh.net/api/'


function showError(message) {
    const elError = document.querySelector('.error');
    elError.style.display = 'block';
    const elMessage = elError.querySelector('.error__message');
    elMessage.innerHTML = message;
}


function showNotice(message) {
    const elNotice = document.querySelector('.notice');
    elNotice.style.display = 'block';
    elNotice.innerHTML = message;
}


function populateSongData() {
    const elStations = document.querySelectorAll('.station');
    elStations.forEach((station) => {
        const id = station.getAttribute('data-id');
        const elTitle = station.querySelector('.song__title')
        const elArtist = station.querySelector('.song__artist')
        const elAlbum = station.querySelector('.song__album')
        const npUrl = API_ROOT + id + '/np'
        fetch(npUrl).then((r) => r.json()).then((data) => {
            if ('err' in data) {
                return showError(data.err);
            }
            if (data.path.length == 0) {
                elTitle.innerHTML = '(song info will appear shortly)';
                return;
            }
            elTitle.innerHTML = data.title;
            elArtist.innerHTML = data.artist;
            elAlbum.innerHTML = data.album;
        })
    });
}


function main() {
    populateSongData();
    setInterval(populateSongData, DATA_FETCH_INTERVAL);
}


main();
