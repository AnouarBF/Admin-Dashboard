const darkbtn = document.getElementById('darkmode');
const main = document.querySelector('.main');
const aside = document.querySelector('.aside');
const header = document.querySelector('.header');
const article = document.querySelector('.article');
const box = document.querySelectorAll('.box');
const antr = document.querySelectorAll('.antr');

function colorize(){
    main.style.backgroundColor = "black";
    
    aside.style.backgroundColor = "rgb(80,80,80)";
    aside.style.color = "black";

    header.style.backgroundColor = "rgb(80,80,80)";
    header.style.color = "black";

    article.style.backgroundColor = "black";
    article.style.color = "white"
    // Changing the photo of the button.
    document.getElementById('darkbtn_img').src = "./icons/white-balance-sunny.svg";
    // Adding the black-border class to all the boxes. 
    for(i of box){
        i.classList.add('black-border');
    }
    for(i of antr){
        i.classList.add('antr-blacked')
    }
}


darkbtn.addEventListener('click', ()=>{

    darkbtn.classList.toggle('blacked')
    console.log("you have clicked and the it contains the blacked class"+darkbtn.classList.contains('blacked'))
    if(darkbtn.classList.contains('blacked')){    
        colorize();
    }else if(!(darkbtn.classList.contains('blacked'))){
        main.style.backgroundColor = "white";

        aside.style.backgroundColor = "rgba(0, 0, 0, .4)";
        aside.style.color = "white";
    
        header.style.backgroundColor = "rgba(0, 0, 0, .4)";
        header.style.color = "white";
    
        article.style.backgroundColor = "white";
        article.style.color = "black";
        document.getElementById('darkbtn_img').src = "./icons/weather-night.svg"
        // removing the balck-border class from all the boxes
        for(i of box){
            i.classList.remove('black-border')
        }
        for(i of antr){
            i.classList.remove('antr-blacked')
        }
    }

})
