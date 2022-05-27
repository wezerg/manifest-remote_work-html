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
                slideToLoad.classList.replace('d-none', 'd-block');
            }
            else{
                document.querySelector('#intro').classList.replace('d-none', 'd-block');
            }
            break;
        default:
            break;
    }
}

onLoadPage();