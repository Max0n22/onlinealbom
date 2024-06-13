
function matchImageWidths() {
    const firstImage = document.getElementById('firstImage');
    const secondImage = document.getElementById('secondImage');

    const firstImageWidth = firstImage.offsetWidth;
    secondImage.style.width = firstImageWidth + 'px';
}

window.addEventListener('load', matchImageWidths);
window.addEventListener('resize', matchImageWidths);