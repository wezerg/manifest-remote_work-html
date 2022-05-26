async function onLoadAside(){
    // Téléchargement de l'aside
    await fetch('./includes/aside.html').then((response) => response.text()).then((data) => document.querySelector('nav').innerHTML = data);
    // Affichage de la liste en fonction de l'url
    switch (window.location.pathname.split('/')[2]) {
        case "nouvelles-technologies.html":
            document.querySelector('#nav-techno').classList.add('show');
            break;
        case "10-bonnes-raisons.html":
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
            if (url.pathname.split('/')[2] === "10-bonnes-raisons.html") {
                changeSlide(elm.getAttribute('value'));
            }
            else{
                url.href = `./10-bonnes-raisons.html?page=${elm.getAttribute('value')}`
            }
            break;
        case "nav-techno":
            if (url.pathname.split('/')[2] === "nouvelles-technologies.html") {
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
    })
}

function scrollSlide(idPage){
    const slideSelected = document.querySelector(`#${idPage}`);
    const listSlide = slideSelected.parentNode.querySelectorAll('article');
    // TODO: Faire scroll sur le slide sélectionné
    console.log(slideSelected);
}

onLoadAside();