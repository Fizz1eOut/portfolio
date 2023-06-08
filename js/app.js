const select = document.querySelector('select');
const allLang = ['en', 'ru', 'ua'];

select.addEventListener('change', changeURLLanguage);

// перенаправить на url с указанием языка
function changeURLLanguage() {
    window.location.hash = `#${select.value}`;
    location.reload();
}

function changeLanguage() {
    const hash = window.location.hash.slice(1);
    const lang = allLang.includes(hash) ? hash : allLang[0];

    select.value = lang;
    window.location.hash = `#${lang}`;
    // document.querySelector('title').innerHTML = langArr['unit'][hash];
    // document.querySelector('.lng-chip').innerHTML = langArr['chip'][hash];

    for (let key in langArr) {
        document.querySelectorAll(`.lng-${key}`).forEach((element) => {
            element.innerHTML = langArr[key][lang];
        });
    }
}

changeLanguage();