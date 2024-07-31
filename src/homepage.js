import mainDiningRoom from './main-dining-room.jpg';
import './styles.css';



    export function homeComponent() {

        const element = document.getElementById("content");

        const container = document.createElement("div");
        container.classList.add("container");

        const image = new Image();
        image.src = mainDiningRoom;
        image.classList.add("image");


        const text = document.createElement("h1");
        text.innerHTML = "Welcome to our restaurant";
        text.classList.add("text");


        container.appendChild(image);
        container.appendChild(text);
        element.appendChild(container);
        
        return element;

    };


