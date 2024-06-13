function matchImageWidths() {
    const firstImage = document.getElementById('firstImage');
    const secondImage = document.getElementById('secondImage');
    const thirdImage = document.getElementById('thirdImage');

    const firstImageWidth = firstImage.offsetWidth;
    secondImage.style.width = firstImageWidth + 'px';
    thirdImage.style.width = firstImageWidth + 'px';
}

window.addEventListener('load', matchImageWidths);
window.addEventListener('resize', matchImageWidths);
