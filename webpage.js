// JavaScript for interactivity
document.addEventListener('DOMContentLoaded', () => {
    console.log("Website loaded and ready!");

    const changeBgBtn = document.getElementById('change-bg-btn');
    const body = document.body;

    // Array of background colors to choose from
    const colors = ['#FFDDC1', '#C1FFD7', '#C1EFFF', '#FFD1DC', '#FFF4C1'];

    // Function to change the background color
    changeBgBtn.addEventListener('click', () => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        body.style.backgroundColor = randomColor;
    });
});