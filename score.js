const score = document.querySelector('.score span')
const canoEvent = document.querySelector(".cano");

canoEvent.addEventListener("animationiteration", () => {
    let valorScore = +score.innerHTML;
    let incraseScore = valorScore + 1;
    
    score.innerHTML = `${incraseScore}`
})

