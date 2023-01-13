
//menu controls
let menuBtn = [...document.querySelectorAll('.menu-btn')];
let bigMenu = document.querySelector('.big-menu');
let globalClose = document.querySelector('.global-close');

function menuControl() {
    if (menuBtn.length) {
        menuBtn.forEach((btn, k) => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                e.preventDefault();
                if (btn.classList.contains('.is-active')) {

                } else {
                    menuBtn.forEach((btn2, l) => {
                        if (l === k) {

                        } else {
                            btn2.classList.remove('is-active');
                            btn2.classList.add('is-hidden');
                        }
                    });
                    document.body.dataset.active = k;
                    btn.classList.add('is-active');
                    bigMenu.classList.add('has-active');
                }
            })
        });
        globalClose.addEventListener('click', () => {
          menuBtn.forEach((bt) => {
              bt.classList.remove('is-active');
              bt.classList.remove('is-hidden');
              document.body.dataset.active = false;
              bigMenu.classList.remove('has-active');
          })
        })
    }
}
menuControl();

//menu controls

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


//btn-drop interact

let dropBtn = [...document.querySelectorAll('.drop-btn')];

function interactDropBtn() {
    if (dropBtn.length) {
        dropBtn.forEach((btn) => {
            let btn2 = btn.querySelector('.btn-drop');

            btn2.addEventListener('click', () => {
                btn.classList.toggle('open');
            })
        })
    }
}

interactDropBtn();

//btn-drop interact

//modal-window

let sun = [...document.querySelectorAll('.sun')];
let modal = document.querySelector('.modal-window');

function modalControl() {
    if (sun.length) {
        sun.forEach((btn) => {
            btn.addEventListener('click', () => {
                document.querySelector('.modal-window').classList.add('visible');
            });
            modal.addEventListener('click', () => {
                modal.classList.remove('visible');
            });

            modal.querySelector('.close').addEventListener('click', () => {
                modal.classList.remove('visible');
            });
            modal.querySelector('.modal-container').addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
            })
        })

    }
}

modalControl();

//modal-window






