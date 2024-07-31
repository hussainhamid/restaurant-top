
import './styles.css';


    export function menuComponent() {
        const content = document.getElementById('content');

        const menuContainer = document.createElement('div');
        menuContainer.classList.add("menu-container");


// the menu heading code
        const menuHeading = document.createElement('h1');
        menuHeading.innerHTML = "Menu";
        menuHeading.classList.add('menu-heading');

// the menu list code
        const menuList = document.createElement("div");
        menuList.classList.add("menu-list");

// this is actually a all dish code buit i accidently named it first dish 
        const firstDish = document.createElement("div");
        firstDish.classList.add("first-dish");


// this is the actual first dish code
        const firstDishName = document.createElement('h2');
        firstDishName.innerHTML = "pasta";
        firstDishName.classList.add("dish-name");

        const firstDishPrice = document.createElement("h3");
        firstDishPrice.innerHTML = '$20.0';
        firstDishPrice.classList.add("dish-price");


// this is the second dish code
        const secondDish = document.createElement("div");
        secondDish.classList.add("second-dish");

        const secondDishName = document.createElement('h2');
        secondDishName.innerHTML = "Lasagna";
        secondDishName.classList.add("dish-name");

        const secondDishPrice = document.createElement("h3");
        secondDishPrice.innerHTML = '$40.0';
        secondDishPrice.classList.add("dish-price");
        

// this is the third dish code
        const thirdDish = document.createElement('div');
        thirdDish.classList.add("third-dish");

        const thirdDishName = document.createElement('h2');
        thirdDishName.innerHTML = "Steak";
        thirdDishName.classList.add("dish-name");

        const thirdDishPrice = document.createElement("h3");
        thirdDishPrice.innerHTML = '$40.0';
        thirdDishPrice.classList.add("dish-price");


// this is the fourth dish code
        const fourthDish = document.createElement('div');
        fourthDish.classList.add("fourth-dish");

        const fourthDishName = document.createElement('h2');
        fourthDishName.innerHTML = "ratatouille";
        fourthDishName.classList.add("dish-name");

        const fourthDishPrice = document.createElement("h3");
        fourthDishPrice.innerHTML = '$60.0';
        fourthDishPrice.classList.add("dish-price");


// this is me appending all the dishes name and price to their respective div
        firstDish.appendChild(firstDishName);
        firstDish.appendChild(firstDishPrice);

        secondDish.appendChild(secondDishName);
        secondDish.appendChild(secondDishPrice);

        thirdDish.appendChild(thirdDishName);
        thirdDish.appendChild(thirdDishPrice);

        fourthDish.appendChild(fourthDishName);
        fourthDish.appendChild(fourthDishPrice);


// this is appening those divs to menulist
        menuList.appendChild(firstDish);
        menuList.appendChild(secondDish);
        menuList.appendChild(thirdDish);
        menuList.appendChild(fourthDish);


        menuContainer.appendChild(menuHeading);
        menuContainer.appendChild(menuList)
        content.appendChild(menuContainer);        

        return content;
        
    };

    



    



