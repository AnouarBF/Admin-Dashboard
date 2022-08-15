const darkbtn = document.querySelector('.darkmode');
const main = document.querySelector('.main');
const aside = document.querySelector('.aside');
const header = document.querySelector('.header');
const article = document.querySelector('.article');
const box = document.querySelectorAll('.box')

darkbtn.addEventListener('click', ()=>{

    main.classList.toggle('.main')
    main.style.backgroundColor = "black";

    aside.classList.toggle('.aside')
    aside.style.backgroundColor = "grey";
    aside.style.color = "black";

    header.classList.toggle('.header');
    header.style.backgroundColor = "grey";
    header.style.color = "black";

    article.classList.toggle('.article')
    article.style.backgroundColor = "black";
    article.style.color = "white"

    box.style.borderLeft = "1px solid white"


})
