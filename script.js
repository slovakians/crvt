// script.js
document.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    document.querySelector('.parallax').style.transform = `translate(-${x * 20}px, -${y * 20}px)`;
});
