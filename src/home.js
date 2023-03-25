
function loadHome() {
    
    const main = document.querySelector('main');
    main.classList.remove('inverse-color');
    main.classList.add('home');
    main.innerHTML =
        `
        <?xml version="1.0" encoding="UTF-8"?><svg width="48px" height="48px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#c7bdb2"><path d="M3 15c2.483 0 4.345-3 4.345-3s1.862 3 4.345 3c2.482 0 4.965-3 4.965-3s2.483 3 4.345 3M3 20c2.483 0 4.345-3 4.345-3s1.862 3 4.345 3c2.482 0 4.965-3 4.965-3s2.483 3 4.345 3M19 10a7 7 0 10-14 0" stroke="#c7bdb2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>

        <h1>Sunrise Cafe</h1>
        <span>est. 1967</span>`;


}

export default loadHome;