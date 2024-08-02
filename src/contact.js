import './styles.css';


export function contactComponent() {

    const content = document.getElementById('content');

        const contactContainer = document.createElement('div');
        contactContainer.classList.add("contact-container");


// this is the heading code
        const contactHeading = document.createElement("h1");
        contactHeading.innerHTML = "How can you contact us";
        contactHeading.classList.add('contact-heading');


// this is the code for email contact block
        const emailContact = document.createElement("div");
        emailContact.innerHTML = "Through Email: finestrestaurant@gmail.com";
        emailContact.classList.add("contact-divs");



// this is the code for website contact block
        const websiteContact = document.createElement("div");
        websiteContact.innerHTML = "through our website: finestrestaurant.com checking";
        websiteContact.classList.add("contact-divs")



// this is the code for the phone block
        const phoneContact = document.createElement("div");
        phoneContact.innerHTML = "Through phone: +1 123-456-789";
        phoneContact.classList.add("contact-divs");




        const thankHeading = document.createElement("div");
        thankHeading.innerHTML = 'Thank you very much for choosing us. if you have any problem or concern you can contact us through the given ways.';
        thankHeading.classList.add('contact-divs', 'thank-heading');


        contactContainer.appendChild(contactHeading);

        contactContainer.appendChild(emailContact);
        contactContainer.appendChild(websiteContact);
        contactContainer.appendChild(phoneContact);
        contactContainer.appendChild(thankHeading);



        content.appendChild(contactContainer);

    return content;
};