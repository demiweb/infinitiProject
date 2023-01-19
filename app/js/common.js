
//menu controls
let menuBtn = [...document.querySelectorAll('.menu-btn')];
let btnSlds = [...document.querySelectorAll('.btn-sld')];
let btnDots = [...document.querySelectorAll('.single-dot')];
let bigMenu = document.querySelector('.big-menu');
let globalClose = document.querySelector('.global-close');
let controlSec = document.querySelector('.section-control');
let activeSlide = false;

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
                    btnDots.forEach((dt) => {
                        dt.classList.remove('active');
                    });
                    btnDots[k].classList.add('active');
                    document.body.classList.add('activate');
                    activeSlide = k;
                    btn.classList.add('is-active');
                    bigMenu.classList.add('has-active');
                    controlSec.classList.add('vis');
                }
            })
        });
        btnDots.forEach((dot, m) => {
            dot.addEventListener('click', () => {
                menuBtn.forEach((bt, k) => {
                    bt.classList.remove('is-active');
                    bt.classList.add('is-hidden');

                });
                activeSlide = m;
                menuBtn[m].classList.add('is-active');
                menuBtn[m].classList.remove('is-hidden');
                document.body.dataset.active = activeSlide;
                btnDots.forEach((dt) => {
                    dt.classList.remove('active');
                });
                dot.classList.add('active');
            })
        });
        btnSlds.forEach((btn) => {
            btn.addEventListener('click', () => {
                if (btn.classList.contains('sld--prev')) {
                    activeSlide -= 1;
                    if (activeSlide <= -1) {
                        activeSlide = 2;

                    }
                    menuBtn.forEach((bt, k) => {
                        bt.classList.remove('is-active');
                        bt.classList.remove('is-hidden');
                        if (k !== activeSlide) {
                            bt.classList.add('is-hidden');
                        }
                    });
                    menuBtn[activeSlide].classList.add('is-active');
                    document.body.dataset.active = activeSlide;
                    document.body.classList.add('activate');
                    btnDots.forEach((dt) => {
                        dt.classList.remove('active');
                    });
                    btnDots[activeSlide].classList.add('active');
                } else {
                    activeSlide += 1;
                    if (activeSlide >= 3) {
                        activeSlide = 0;

                    }
                    menuBtn.forEach((bt, k) => {
                        bt.classList.remove('is-active');
                        bt.classList.remove('is-hidden');
                        if (k !== activeSlide) {
                            bt.classList.add('is-hidden');
                        }
                    });
                    menuBtn[activeSlide].classList.add('is-active');
                    document.body.dataset.active = activeSlide;
                    document.body.classList.add('activate');
                    btnDots.forEach((dt) => {
                        dt.classList.remove('active');
                    });
                    btnDots[activeSlide].classList.add('active');
                }
            })
        });
        globalClose.addEventListener('click', () => {
          menuBtn.forEach((bt) => {
              bt.classList.remove('is-active');
              bt.classList.remove('is-hidden');
              document.body.dataset.active = false;
              document.body.classList.remove('activate');
              activeSlide = false;
              bigMenu.classList.remove('has-active');
              controlSec.classList.remove('vis');
              btnDots.forEach((dt) => {
                  dt.classList.remove('active');
              });

          })
        })
    }
}
menuControl();

//menu controls

//hover stands



let shelfs = [...document.querySelectorAll('.back-center .plates-center ol li')];
let mirrors = [...document.querySelectorAll('.back-left .mirror .img')];

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


let dropMobile = [...document.querySelectorAll('.mobile-drop')];

function interactDropMobile() {
    if (dropMobile.length) {
        dropMobile.forEach((btn) => {
            let btn2 = btn.querySelector('.btn-mark');

            btn2.addEventListener('click', () => {
                btn.classList.toggle('open');
            })
        })
    }
}

interactDropMobile();



//btn-drop interact

//mobile anim

let mobileShelf = [...document.querySelectorAll('.back-mobile .plates-center li')];

function cotrolMobileShelf() {
    if (mobileShelf.length) {
        mobileShelf.forEach((btn) => {
            btn.addEventListener('click', () => {
                document.querySelector('.backblock').classList.add('stepping');

                setTimeout(() => {
                    document.querySelector('.backblock').classList.add('hide');
                }, 2000);
            })
        })
    }
}
cotrolMobileShelf();
//mobile anim

//modal-window

let sun = [...document.querySelectorAll('.btn-sun')];
let modal = document.querySelector('.modal-window');

function modalControl() {
    if (sun.length) {
        sun.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
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


//video control

let videoBtn = [...document.querySelectorAll('.video-block .play')];
let videoModal = document.querySelector('.modal-video');

function controlVideoOpens() {
    if (videoBtn.length) {
        videoBtn.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                e.preventDefault();

                let number = document.body.dataset.active;

                let videoLink = menuBtn[Number(number)].dataset.vid;

                videoModal.classList.add('active');
                videoModal.querySelector('iframe').src = videoLink;
            })
        });

        videoModal.addEventListener('click', () => {
            videoModal.classList.remove('active');
            videoModal.querySelector('iframe').src = '';
        });
        videoModal.querySelector('.close').addEventListener('click', () => {
            videoModal.classList.remove('active');
            videoModal.querySelector('iframe').src = '';
        });
        videoModal.querySelector('.video-container').addEventListener('click', (e) => {
            e.stopPropagation();
            e.preventDefault();
        });
    }
}

controlVideoOpens();


//video control






