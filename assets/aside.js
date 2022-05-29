const filename = document.location.pathname.substring(document.location.pathname.lastIndexOf('/')+1);
async function onLoadAside(){
    // Téléchargement de l'aside
    await fetch('./includes/aside.html').then((response) => response.text()).then((data) => document.querySelector('nav').innerHTML = data);
    switch (filename) {
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
        case "journee.html":
            document.querySelector('#nav-journee').classList.add('show');
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
            if (filename === "10-bonnes-raisons.html") {
                changeSlide(elm.getAttribute('value'));
            }
            else{
                url.href = `./10-bonnes-raisons.html?page=${elm.getAttribute('value')}`
            }
            break;
        case "nav-techno":
            if (filename === "nouvelles-technologies.html") {
                scrollSlide(elm.getAttribute('value'));
            }
            else{
                url.href = `./nouvelles-technologies.html?page=${elm.getAttribute('value')}`
            }
            break;
        case "nav-journee":
            if (filename === "journee.html") {
                scrollSlide(elm.getAttribute('value'));
            }
            else{
                url.href = `./journee.html?page=${elm.getAttribute('value')}`
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
            animateSlide(slideSelected);
        }
        else{
            slide.classList.replace('d-block', 'd-none');
        }
    });
    activeLinkNav(idPage);
}

function scrollSlide(idPage){
    const slideSelected = document.querySelector(`#${idPage}`);
    slideSelected.scrollIntoView();
}

function activeLinkNav(idPage){
    const ancreSelected = document.querySelector(`[value="${idPage}"]`);
    if (ancreSelected) {
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
}

onLoadAside();