import { lista_webs } from "./data_web.js";

lista_webs.forEach((cada_web)=>{
    let div_paginas = document.querySelector(".paginas");

    let div_web = document.createElement("div");
    div_web.innerHTML = `

            <a href="${cada_web.github_page}">
                <img src="${cada_web.img}" alt="">
                <h2 class="titulo">${cada_web.nombre}</h2>
                <p class="descripcion">${cada_web.descripcion}</p>
                <center><a href="${cada_web.link_repo}" class="github">GitHub Page</a></center>
            </a>
    `;
    div_paginas.appendChild(div_web);
});