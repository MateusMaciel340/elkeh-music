import { listCategory } from "../data/category.js";

function viewListCategory() {
    const elementListCategory = document.querySelector('#view-category');
    const elementListByCategory = document.querySelector('#view-by-category') || document;

    listCategory.forEach((category) => {
        elementListCategory.innerHTML += `
            <li class="footer__item">${category.title}</li>
        `;

        elementListByCategory.innerHTML += `
            <div class="category__layer">
                <img src="images/category/${category.img}.png" alt="Categoria - x" class="category__image"/>
                <h2 class="category__title">${category.title}</h2>
                <img src="images/category/icon-stars.png"/>
                <a href="https://wa.me/85991378240?text=Tenho interesse na categoria (${category.title}), pode me ajudar?" target="_blank" class="link-whatsapp">
                    Chamar no whatsapp
                </a>
            </div>
        `;
    });
}

viewListCategory();