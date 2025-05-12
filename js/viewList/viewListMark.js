import { listMark } from "../data/mark.js";

function viewListMark() {
    const elementListMark = document.querySelector('#view-mark');

    listMark.forEach((mark) => {
        elementListMark.innerHTML += `
            <div class="mark__layer">
                <h3 class="mark__title">${mark.title}</h3>
            </div>
        `;
    });
}

viewListMark();