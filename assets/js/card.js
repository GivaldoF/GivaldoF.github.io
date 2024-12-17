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
      rgba(255, 255, 255, 0.2),
      #0000000f
    )
  `;

    card.querySelectorAll('.project_cover').forEach((layer, index) => {
        const depth = index * 10; // Adjust depth based on layer
        const scale = 1 + (index * 0.05); // Adjust scale based on layer
        const translateX = center.x / (10 + depth);
        const translateY = center.y / (10 + depth);
        layer.style.transform = `
        translate3d(
          ${translateX}px,
          ${translateY}px,
          ${depth}px
        )
        scale(${scale})
      `;
        layer.style.boxShadow = `0 ${depth / 2}px ${depth}px rgba(0, 0, 0, 0.2)`;
    });
}

$cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        bounds = card.getBoundingClientRect();
        const onMouseMove = (e) => rotateToMouse(e, card);
        card.addEventListener('mousemove', onMouseMove);

        card.addEventListener('mouseleave', () => {
            card.removeEventListener('mousemove', onMouseMove);
            card.style.transform = '';
            card.querySelector('.glow').style.backgroundImage = '';
            card.querySelectorAll('.project_cover').forEach(layer => {
                layer.style.transform = '';
                layer.style.boxShadow = '';
            });
        }, { once: true });
    });
});