import Icon from './assets/call.svg';


function buildContactScreen(){
    const section = document.createElement('section');
    section.classList.add('contact');

    const title = document.createElement('h1');
    title.textContent = 'Contact us';

    const phoneDiv = document.createElement('div');
    phoneDiv.classList.add('phone');

    const phoneIcon = new Image();
    phoneIcon.src = Icon;
    phoneIcon.classList.add('phone-icon');

    const phoneNumber = document.createElement('div');
    phoneNumber.classList.add('phone-number');
    phoneNumber.textContent = '123-4567';

    const times = document.createElement('div');
    times.classList.add('hours');

    const days = document.createElement('div');
    days.textContent = 'Monday - Saturday';

    const hours = document.createElement('div');
    hours.textContent = '10:00am - 9:00pm';


    //put it all together
    times.appendChild(days);
    times.appendChild(hours);

    phoneDiv.appendChild(phoneIcon);
    phoneDiv.appendChild(phoneNumber);

    section.appendChild(title);
    section.appendChild(phoneDiv);
    section.appendChild(times);

    return section;
}


function loadContact() {
    
    const main = document.querySelector('main');
    main.classList.remove('home');
    main.classList.add('inverse-color');

    // clear main
    main.innerHTML = '';

    // main.innerHTML = 
    //     `<section class='contact'>
    //         <h1>Contact us</h1>
    //         <h2>123-4567</h2>
    //         <div class='hours'>
    //             <div>Monday - Saturday</div>
    //             <div>10:00am - 9:00pm</div>
    //         </div>
    //     </section>`;

    main.appendChild(buildContactScreen());
    
}

export default loadContact;