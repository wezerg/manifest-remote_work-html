function onLoadPage(){
    const slideToLoad = document.querySelector(`#${window.location.search.split('=')[1]}`);
    const filename = document.location.pathname.substring(document.location.pathname.lastIndexOf('/')+1);
    switch (filename) {
        case "nouvelles-technologies.html":
            document.querySelector('main').addEventListener('scroll', (ev) => eventScrollSlide(ev));
            if (window.location.search) {
                if (slideToLoad) {
                    setTimeout(() => {
                        slideToLoad.scrollIntoView();
                    }, 750);
                }
            }
            else{
                document.querySelector('#collaboration').scrollIntoView();
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
        case "journee.html":
            document.querySelector('main').addEventListener('scroll', (ev) => eventScrollSlide(ev));
            if (window.location.search) {
                if (slideToLoad) {
                    setTimeout(() => {
                        slideToLoad.scrollIntoView();
                    }, 750);
                }
            }
            else{
                document.querySelector('#lever').scrollIntoView();
            }
            break;
        default:
            break;
    }
}

function animateSlide(slide){
    let i = 1;
    let listCol = slide.querySelectorAll('[class*="col-"]');
    for (const col of listCol) {
        col.style.opacity = "0";
    }
    // Shuffle Array
    listCol = [...listCol].sort((a, b) => 0.5 - Math.random());
    // Apply animation on elements of slide
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

function eventScrollSlide(ev){
    const main = ev.srcElement;
    const listArticle = main.querySelectorAll('article');
    listArticle.forEach((art) => {
        if (main.scrollTop >= (art.offsetTop - 1) && main.scrollTop < art.offsetTop + art.offsetHeight) {
            if (document.querySelector('.navbar-nav')) {
                const listBtn = document.querySelector(`[value="${art.id}"]`).parentNode.children;
                for (const btn of listBtn) {
                    if (btn === document.querySelector(`[value="${art.id}"]`)) {
                        btn.classList.add('active');
                    }
                    else{
                        btn.classList.remove('active');
                    }
                }
            }
        }        
    });
}

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    /*while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      console.log(randomIndex);
      currentIndex--;
        
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
        console.log(array);
    }*/
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    
    return array;
}

onLoadPage();