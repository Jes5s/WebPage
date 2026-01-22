/*3rdsectopm*/
const items = document.querySelectorAll('.item');
const tooltip = document.querySelector('.tooltip');

items.forEach(item => {
    item.addEventListener('mouseover', () => {
        tooltip.textContent = item.getAttribute('data-info');
        tooltip.style.display = 'block';
    });
    
    item.addEventListener('mousemove', (e) => {
        tooltip.style.top = `${e.clientY + 10}px`;
        tooltip.style.left = `${e.clientX + 10}px`;
    });
    
    item.addEventListener('mouseout', () => {
        tooltip.style.display = 'none';
    });
});
/*3rdsection*/

/*4thsection*/
document.addEventListener('DOMContentLoaded', () => {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const caption = document.getElementById('caption');
    const close = document.querySelector('.close');

    document.querySelectorAll('.gallery-item').forEach(item => {
        item.addEventListener('click', () => {
            const imgSrc = item.getAttribute('data-image');
            lightboxImg.src = imgSrc;
            lightbox.style.display = 'block';
        });
    });

    close.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    lightbox.addEventListener('click', (event) => {
        if (event.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });
});

function scrollToGallery() {
    document.getElementById('gallery-section').scrollIntoView({ behavior: 'smooth' });
}

window.onscroll = function() {
    let button = document.getElementById('goTopButton');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
};

document.getElementById('goTopButton').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
/*4thsection*/

document.getElementById("darkToggle").addEventListener("click", function() {
    document.body.classList.toggle("dark");
});
