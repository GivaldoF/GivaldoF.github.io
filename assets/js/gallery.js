const modal = document.getElementById('imageModal');
const expandedImg = document.getElementById('expandedImage');
const caption = document.getElementById('caption');
const closeBtn = document.querySelector('.close');

document.querySelectorAll('.gallery-image').forEach(image => {
  image.addEventListener('click', () => {
    modal.style.display = 'block';
    expandedImg.src = image.src;
    caption.textContent = image.alt;
  });
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

// Fechar ao pressionar ESC
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    modal.style.display = 'none';
  }
});