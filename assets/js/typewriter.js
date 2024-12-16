var typewriter = new Typewriter('#typewriter', {
    strings: ['Gamer', 'Programmer', 'Game Designer'],
    skipAddStyles: false,
    autoStart: true,
    loop: true,
});

/*
const element = document.getElementById("typewriter");
const phrases = ["Gamer", "Programmer", "Game Designer"];
let currentPhraseIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;
function typewriter(){
    let currentString = phrases[currentPhraseIndex];
    if(!isDeleting) 
    {
        element.textContent = currentString.substring(0, currentCharIndex++);
        
        if (currentCharIndex > currentString.length) {
            isDeleting = true;
        }
    }
    else
    {
        element.textContent = currentString.substring(0, currentCharIndex--);

        if (currentCharIndex < 0) {
            isDeleting = false;
            currentPhraseIndex++;
            if(currentPhraseIndex >= phrases.length)
                currentPhraseIndex = 0;
        }
    }
    
    setTimeout(typewriter, isDeleting ? 100 : 200);
}
document.addEventListener('DOMContentLoaded', (e) =>
{
   typewriter(); 
}); */