import { listProduct } from "../data/product.js";

function viewListProduct() {
    const elementListProduct = document.querySelector('#view-product') || document;

    listProduct.forEach((product) => {
        elementListProduct.innerHTML += `
            <div class="product__layer">
                <img src="images/product/0${product.id}.png" alt="Produto (${product.title})"/>
                <p class="content__text">${product.title}</p>
                <span class="product__tag">${product.category}</span>
                <a href="https://wa.me/85991378240?text=Tenho interesse no produto (${product.title}), pode me ajudar?" target="_blank" class="link-whatsapp">Chamar no whatsapp</a>
            </div>
        `;
    });
}

viewListProduct();