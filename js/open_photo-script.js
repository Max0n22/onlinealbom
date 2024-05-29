
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("modalImage");

var clicked = false;
var lastX, lastY;
var scale = 3;
var offsetX = 0;
var offsetY = 0;

function openModal(src) {
    var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if (!isMobile) {
        modal.style.display = "block";
        modalImg.src = src;
        modalImg.style.transform = "scale(" + scale + ")";
        modalImg.style.position = "absolute";
        modalImg.style.top = "50%";
        modalImg.style.left = "50%";
        modalImg.style.transform = "translate(-50%, -50%) scale(" + scale + ")";

        var span = document.createElement("span");
        span.setAttribute("class", "closeButton");
        span.innerHTML = "&times;";
        span.onclick = function () {
            closeModal();
        };
        modal.appendChild(span);

        modalImg.onwheel = function (e) {
            e.preventDefault();
            var delta = Math.sign(e.deltaY);
            if (delta > 0) {
                scale = Math.max(scale / 1.1, 2);
            } else {
                scale = Math.min(scale * 1.1, 1100);
            }
            modalImg.style.transform = "translate(" + offsetX + "px, " + offsetY + "px) scale(" + scale + ")";
        };

        modalImg.onmousedown = function (e) {
            e.preventDefault();
            clicked = true;
            lastX = e.clientX;
            lastY = e.clientY;
        };

        modalImg.onmousemove = function (e) {
            if (clicked) {
                offsetX += e.clientX - lastX;
                offsetY += e.clientY - lastY;
                lastX = e.clientX;
                lastY = e.clientY;
                modalImg.style.transform = "translate(" + offsetX + "px, " + offsetY + "px) scale(" + scale + ")";
            }
        };

        modalImg.onmouseup = function () {
            clicked = false;
        };
    }
}

function closeModal() {
    modal.style.display = "none";
    modal.removeChild(document.querySelector(".closeButton"));
    modalImg.style.transform = "scale(3)";
    scale = 3;
    offsetX = 0;
    offsetY = 0;
}

window.onclick = function (event) {
    if (event.target == modal) {
        closeModal();
    }
};

