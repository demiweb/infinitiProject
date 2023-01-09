//hover stands

let shelfs = [...document.querySelectorAll('.plates-center ol li')];
let mirrors = [...document.querySelectorAll('.mirror .img')];

let partsComp = [...document.querySelectorAll('.part-back')];
function shelfInteract() {
    if (shelfs.length) {
        let numberOfpart = 0;
        shelfs.forEach((sh, k) => {
            sh.addEventListener('mouseover', () => {
                mirrors[k].classList.add('act');
            });
            sh.addEventListener('mouseout', () => {
                mirrors[k].classList.remove('act');
            });
            sh.addEventListener('click', () => {
                if (numberOfpart === 0) {
                    partsComp[2].classList.add('hide');

                }
                if (numberOfpart === 1) {
                    partsComp[0].classList.add('hide');
                }

                if (numberOfpart === 2) {
                    partsComp[1].classList.add('hide');
                    document.querySelector('.backblock').classList.add('hide');

                }
                numberOfpart++;
            })
        });
    }
}
shelfInteract();

//hover stands

var allLazyLoad = [...document.querySelectorAll('.lazyload')];

function allLozadImg() {
    allLazyLoad.forEach((el) => {
        var observer = lozad(el); // passing a `NodeList` (e.g. `document.querySelectorAll()`) is also valid
        observer.observe();
        el.addEventListener('load', () => {
            el.classList.add('is-loaded')
        })
        // if (el.loaded()) {
        //     el.classList.add('is-loaded');
        // }
    })
}

allLozadImg();



