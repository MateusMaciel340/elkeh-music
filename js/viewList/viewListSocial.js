import { listSocial } from "../data/social.js";

function viewListSocial() {
    const elementListSocial = document.querySelector('#view-social');
    const elementListSocialHeader = document.querySelector('#view-header-social');

    listSocial.forEach((social) => {
        elementListSocial.innerHTML += `
            <a href="${social.link}" target="_blank" class="footer__social-item">
                ${social.title}
                <img src="images/${social.icon}" alt="Icone do ${social.title}"/>
            </a>
        `;

        elementListSocialHeader.innerHTML += `
            <a href="${social.link}" target="_blank" class="header__link">
                <img src="images/${social.icon}" alt="Icone do ${social.title}"/>
            </a>
        `;
    });
}

viewListSocial();