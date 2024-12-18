// Anchor links now has a smooth movement
document.querySelectorAll('.navbar_link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Função para encontrar e imprimir o elemento pai de um objeto com position absolute
function printOffsetParent(element) {
    const offsetParent = element.offsetParent;
    console.log('Offset Parent:', offsetParent);
}

// Seleciona o elemento com position absolute
const cardElement = document.querySelector('.card');

// Imprime o elemento pai do card
printOffsetParent(cardElement);
