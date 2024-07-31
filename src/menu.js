import './styles.css';


    export function menuComponent() {
        const content = document.getElementById('content');

        const container = document.createElement('div');



        const menuHeading = document.createElement('h1');
        menuHeading.innerHTML = "hello";
        menuHeading.classList.add('menu-heading');



        container.appendChild(menuHeading);
        content.appendChild(container);        

        return content;
        
    };

    



    



