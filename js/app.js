// variables
/*==============
      cart
================*/
const points = document.querySelectorAll('.point');
const [price1, price2, price3, price4] = document.querySelectorAll('.price');
const [hot1, hot2, hot3, hot4] = document.querySelectorAll('.hot');

/*===============
    main
=================*/
const links = document.querySelectorAll('.sub-menu a');
const cardRight = document.querySelectorAll('.card-right');
const burger = document.querySelector('.burger');
const navMobile = document.querySelector('.nav-mobile');
const previous = document.querySelector('.previous');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const nex = document.querySelector('.nex');
const [indicatorPrev, indicatorNext] = document.querySelectorAll('.indicator');
const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel-item');






//functions



/*==============
      cart
================*/

function mouseover () {
    if(this.classList.contains('point1')) {
        price1.classList.add('active');
    } 
    if(this.classList.contains('point2')) {
        price2.classList.add('active');
    } 
    if(this.classList.contains('point3')) {
        price3.classList.add('active');
    } 
    if(this.classList.contains('point4')) {
        price4.classList.add('active');
    } 
}

function mouseout () {
    if(this.classList.contains('point1')) {
        price1.classList.remove('active');
    } 
    if(this.classList.contains('point2')) {
        price2.classList.remove('active');
    } 
    if(this.classList.contains('point3')) {
        price3.classList.remove('active');
    } 
    if(this.classList.contains('point4')) {
        price4.classList.remove('active');
    } 
}

function show () {
    if(this.classList.contains('point1')) {
        // this.parentElement.querySelector('.hot.active').classList.remove('active');
        if(!hot1.classList.contains('active')) { 
            price1.classList.add('none');
            hot1.classList.add('active');
        } else {
            hot1.classList.remove('active');
            setTimeout(() => {
                price1.classList.remove('none');
            }, 500);
        }
    } 
    if(this.classList.contains('point2')) {
        if(!hot2.classList.contains('active')) {
            price2.classList.add('none');
            hot2.classList.add('active');
        } else {
            hot2.classList.remove('active');
            setTimeout(() => {
                price2.classList.remove('none');
            }, 500);
            
        }
    } 
    if(this.classList.contains('point3')) {
        if(!hot3.classList.contains('active')) {
            price3.classList.add('none');
            hot3.classList.add('active');
        } else {
            hot3.classList.remove('active');
            setTimeout(() => {
                price3.classList.remove('none');
            }, 500);
        }
    } 
    if(this.classList.contains('point4')) {
        if(!hot4.classList.contains('active')) {
            price4.classList.add('none');
            hot4.classList.add('active');
        } else {
            hot4.classList.remove('active');
            setTimeout(() => {
                price4.classList.remove('none');
            }, 500);
        }
    } 
}

/*===============
    main
=================*/
function activateLink () {
    if(!this.classList.contains('active')) {
        this.parentElement.querySelector('.active').classList.remove('active');
        this.classList.add('active');
    } else {
        return null;
    }
}

function show2 () {
    if(this.classList.contains('card-right1')) {
        if(!hot1.classList.contains('active')) { 
            price1.classList.add('none');
            hot1.classList.add('active');
        } else {
            hot1.classList.remove('active');
            setTimeout(() => {
                price1.classList.remove('none');
            }, 500);
        }
    } 
    if(this.classList.contains('card-right2')) {
        if(!hot2.classList.contains('active')) {
            price2.classList.add('none');
            hot2.classList.add('active');
        } else {
            hot2.classList.remove('active');
            setTimeout(() => {
                price2.classList.remove('none');
            }, 500);
            
        }
    } 
    if(this.classList.contains('card-right3')) {
        if(!hot3.classList.contains('active')) {
            price3.classList.add('none');
            hot3.classList.add('active');
        } else {
            hot3.classList.remove('active');
            setTimeout(() => {
                price3.classList.remove('none');
            }, 500);
        }
    } 
    if(this.classList.contains('card-right4')) {
        if(!hot4.classList.contains('active')) {
            price4.classList.add('none');
            hot4.classList.add('active');
        } else {
            hot4.classList.remove('active');
            setTimeout(() => {
                price4.classList.remove('none');
            }, 500);
        }
    } 
}

function showMenu () {
    if(!navMobile.classList.contains('active')) {
        this.setAttribute('src', './Assets/icons/close-line.svg')
        navMobile.classList.add('active');
    } else {
        this.setAttribute('src', './Assets/icons/burger.svg')
        navMobile.classList.remove('active');
    }
}

//listeners
/*==============
      cart
================*/

for(i = 0; i < points.length; i++) {
    const point = points[i];
    point.addEventListener('mouseover', mouseover);
    point.addEventListener('mouseout', mouseout);
    point.addEventListener('click', show)
}

/*===============
    main
=================*/

for(let i = 0; i < links.length; i++) {
    const link = links[i];
    link.addEventListener('click', activateLink)
} 
for(let i = 0; i < cardRight.length; i++) {
    const right = cardRight[i];
    right.addEventListener('click', show2);
}

burger.addEventListener('click', showMenu);
next.addEventListener('click', () => {
      carousel.classList.add('active');
      if(nex.classList.contains('active')) {
        nex.classList.remove('active');
        prev.classList.add('active');
        indicatorPrev.classList.remove('active');
        indicatorNext.classList.add('active');
      }
})
previous.addEventListener('click', () => {
    carousel.classList.remove('active');
    if(prev.classList.contains('active')) {
        prev.classList.remove('active');
        nex.classList.add('active');
        indicatorNext.classList.remove('active');
        indicatorPrev.classList.add('active');
      }
})

for(i = 0; i < items.length; i++) {
    const item = items[i];
    item.addEventListener('mouseover', () => {
        const star = item.querySelector('.item-quality > img');
        star.classList.add('active');
    })
    item.addEventListener('mouseout', () => {
        const star = item.querySelector('.item-quality > img');
        star.classList.remove('active');
    })
}

// loader


const loader = function () {
    document.querySelector('.loader')
    .classList.add('fondu-out');
}

const fonduOut = function () {
    setInterval(loader, 4000);
}

window.addEventListener('load', fonduOut);