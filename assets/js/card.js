const $cards = document.querySelectorAll('.card');
let bounds;

function rotateToMouse(e, card) {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const leftX = mouseX - bounds.x;
    const topY = mouseY - bounds.y;
    const center = {
        x: leftX - bounds.width / 2,
        y: topY - bounds.height / 2
    }
    const distance = Math.sqrt(center.x**2 + center.y**2);

    card.style.transform = `
    scale3d(1.05, 1.05, 1.05)
    rotate3d(
      ${center.y / 100},
      ${-center.x / 100},
      0,
      ${Math.log(distance)* 2}deg
    )
  `;

    card.querySelector('.glow').style.backgroundImage = `
    radial-gradient(
      circle at
      ${center.x * 2 + bounds.width/2}px
      ${center.y * 2 + bounds.height/2}px,
      #ffffff55,
      #0000000f
    )
  `;
}

$cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        bounds = card.getBoundingClientRect();
        const onMouseMove = (e) => rotateToMouse(e, card);
        document.addEventListener('mousemove', onMouseMove);

        card.addEventListener('mouseleave', () => {
            document.removeEventListener('mousemove', onMouseMove);
            card.style.transform = '';
            card.style.background = '';
        }, { once: true });
    });
});