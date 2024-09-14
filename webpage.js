document.addEventListener('DOMContentLoaded', () => {
    console.log('McDonald\'s themed background loaded!');
});

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
const lightbox = document.querySelectorAll('.lightbox');
const overlay = document.createElement('div');
overlay.className = 'lightbox-overlay';
document.body.appendChild(overlay);

lightbox.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const img = document.createElement('img');
        img.src = link.href;
        overlay.innerHTML = '';
        overlay.appendChild(img);
        overlay.style.display = 'flex';
    });
});

overlay.addEventListener('click', () => {
    overlay.style.display = 'none';
});
/*4thsection*/