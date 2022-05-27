async function onLoadAside(){
    // Téléchargement de l'aside
    await fetch('./includes/aside.html').then((response) => response.text()).then((data) => document.querySelector('nav').innerHTML = data);
    // Affichage de la liste en fonction de l'url
    switch (window.location.pathname.split('/')[2]) {
        case "nouvelles-technologies.html":
            document.querySelector('#nav-techno').classList.add('show');
            break;
        case "10-bonnes-raisons.html":
            if (window.location.search) {
                document.querySelector(`[value=${window.location.search.split('=')[1]}]`).classList.add('active');
            }
            else{
                document.querySelector(`[value="intro"]`).classList.add('active');

            }
            document.querySelector('#nav-raisons').classList.add('show');
            break;
        default:
            break;
    }
}

function navbarShowList(elm){
    const list = elm.parentNode.querySelectorAll('button');
    list.forEach((btn) => {
        if (btn === elm) {
            btn.classList.add('show');
        }
        else{
            btn.classList.remove('show');
        }
    });
}

function navbarListClick(elm){
    const url = window.location;
    switch (elm.parentNode.previousElementSibling.id) {
        case "nav-raisons":
            if (url.pathname.split('/')[1] === "10-bonnes-raisons.html") {
                changeSlide(elm.getAttribute('value'));
            }
            else{
                url.href = `./10-bonnes-raisons.html?page=${elm.getAttribute('value')}`
            }
            break;
        case "nav-techno":
            if (url.pathname.split('/')[1] === "nouvelles-technologies.html") {
                scrollSlide(elm.getAttribute('value'));
            }
            else{
                url.href = `./nouvelles-technologies.html?page=${elm.getAttribute('value')}`
            }
            break;
        default:
            break;
    }
}

function changeSlide(idPage){
    const slideSelected = document.querySelector(`#${idPage}`);
    const listSlide = slideSelected.parentNode.querySelectorAll('article');
    listSlide.forEach((slide) => {
        if (slide === slideSelected) {
            slide.classList.replace('d-none', 'd-block');
        }
        else{
            slide.classList.replace('d-block', 'd-none');
        }
    });
    const ancreSelected = document.querySelector(`[value="${idPage}"]`);
    const listAncre = ancreSelected.parentNode.querySelectorAll('li');
    listAncre.forEach((ancre) => {
        if (ancre === ancreSelected) {
            ancre.classList.add('active');
        }
        else{
            ancre.classList.remove('active');
        }
    });
}

function scrollSlide(idPage){
    const slideSelected = document.querySelector(`#${idPage}`);
    const listSlide = slideSelected.parentNode.querySelectorAll('article');
    // TODO: Faire scroll sur le slide sélectionné
    console.log(slideSelected);
}

onLoadAside();