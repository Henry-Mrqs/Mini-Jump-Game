const mario = document.querySelector(".mario");
const cano = document.querySelector(".cano");
const grama = document.querySelector(".grama");
const nuvem = document.querySelector(".nuvem");
const modalGameOver = document.querySelector(".modal-game-over");

const jumpFunc = () => {
        mario.classList.add("jump");
    
    setTimeout(() => {
        mario.classList.remove("jump");
    }, 500)
}

const loopVerificacao = setInterval(() => {
    const canoPosition = cano.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    const gramaPosition = +window.getComputedStyle(grama).marginLeft.replace('px', '');
    const nuvemPosition = nuvem.offsetLeft;

    if (canoPosition <= 120 && canoPosition > 0 && marioPosition <= 86){
        cano.style.animation = "none";
        cano.style.left = `${canoPosition}px`;

        mario.style.bottom = `${marioPosition}px`;
        mario.src = "./img/game-over.png"
        mario.style.width = "75px"
        mario.style.marginLeft = "50px"
        mario.style.marginBottom = "-10px"

        grama.style.animation = "none";
        grama.style.marginLeft = `${gramaPosition}px`;

        nuvem.style.animation = "none";
        nuvem.style.left = `${nuvemPosition}px`;

        modalGameOver.style.display = "flex";

        clearInterval(loopVerificacao);
    }
}, 10)

document.addEventListener("keydown", jumpFunc);
document.addEventListener("click", jumpFunc);