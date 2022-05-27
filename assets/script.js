function onLoadPage(){
    const slideToLoad = document.querySelector(`#${window.location.search.split('=')[1]}`);
    switch (window.location.pathname.split('/')[1]) {
        case "nouvelles-technologies.html":
            if (window.location.search) {
                const slideSelected = document.querySelector(`#${window.location.search.split('=')[1]}`);
                setTimeout(() => {
                    slideSelected.scrollIntoView();
                }, 750);
            }
            break;
        case "10-bonnes-raisons.html":
            if (slideToLoad) {
                animateSlide(slideToLoad);
            }
            else{
                document.querySelector('#intro').classList.replace('d-none', 'd-block');
            }
            break;
        default:
            break;
    }
}

function animateSlide(slide){
    let i = 1;
    const listCol = slide.querySelectorAll('[class*="col-"]');
    for (const col of listCol) {
        col.style.opacity = "0";
    }
    listCol[0].classList.add('animate__fadeIn');
    listCol[0].classList.add('animate__animated');
    const timer = setInterval(() => {
        if (i >= listCol.length) {
            clearInterval(timer);
            for (const col of listCol) {
                col.classList.remove('animate__fadeIn');
                col.classList.remove('animate__animated');
                col.style.opacity = "unset";
            }
            return;
        }
        listCol[i].classList.add('animate__fadeIn');
        listCol[i].classList.add('animate__animated');
        i++;
    }, 350);
    slide.classList.replace('d-none', 'd-block');
}

onLoadPage();