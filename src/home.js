
function loadHome() {
    
    const main = document.querySelector('main');
    main.classList.remove('inverse-color');
    main.classList.add('home');
    main.innerHTML =
        `<h1>Sunrise Cafe</h1>
        <span>est. 1967</span>`;


}

export default loadHome;