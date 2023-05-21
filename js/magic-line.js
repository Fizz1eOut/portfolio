document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('.nav'),
          navLine = document.querySelector('.nav__line'),
          navItem = document.querySelectorAll('.nav__item');

    navLine.style.width = `${navItem[0].offsetWidth}px`;

    navItem.forEach((el) => {
        el.addEventListener('mouseenter', (e) => {
            navLine.style.width = `${e.currentTarget.offsetWidth}px`;
            navLine.style.left = `${e.currentTarget.offsetLeft}px`;
        });
    });
});