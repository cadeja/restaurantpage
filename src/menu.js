let menuElements = [];

// returns menu item element
// still needs to be appended to the document
function addMenuItem(name,description,price) {

    const item = document.createElement('div');
    item.classList.add('menu-item');

    const title = document.createElement('h3');
    title.textContent = name;

    const cost = document.createElement('div');
    cost.textContent = price;

    const desc = document.createElement('p');
    desc.textContent = description;

    item.appendChild(title);
    item.appendChild(cost);
    item.appendChild(desc);

    menuElements.push(item);
}

function addMenuSection(title){

    const item = document.createElement('h2');
    item.textContent = title;

    menuElements.push(item);
}


// Menu

addMenuSection('Starter');
addMenuItem('Item 1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', '$10.00');
addMenuItem('Item 2', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', '$10.00');

addMenuSection('Entree');
addMenuItem('Item 3', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', '$10.00');
addMenuItem('Item 4', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', '$10.00');

addMenuSection('Dessert');
addMenuItem('Item 5', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', '$10.00');
addMenuItem('Item 6', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', '$10.00');

addMenuSection('Drinks');
addMenuItem('Item 5', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', '$10.00');
addMenuItem('Item 6', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', '$10.00');

function loadMenu() {
    // clear main
    const main = document.querySelector('main');
    main.innerHTML = '';

    const title = document.createElement('h1');
    title.classList.add('menu-title');
    title.textContent = "Menu";
    main.appendChild(title);

    main.classList.add('menu');


    for (let i = 0; i < menuElements.length; i++){
        main.appendChild(menuElements[i]);
    }


}


export default loadMenu;