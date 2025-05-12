import { listSlide } from "../data/slide.js";

function viewListSlide() {
    const elementListSlide = document.querySelector('#view-slide');

    listSlide.forEach((slide) => {
        elementListSlide.innerHTML += `
            <div class="swiper-slide">
                <img src="images/slide/${slide.image}.png" alt="Slide apresentação (${slide.title})"/>
            </div>
        `;
    });
}

viewListSlide();