function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
}

testWebP(function (support) {
    if (support == true) {
        document.querySelector('body').classList.add('webp');
    }
});

const headerBurger = document.querySelector('.header__burger');
const headerBody = document.querySelector('.header__body');
const headerLink = document.querySelectorAll('.header__link');
if (headerBurger) {
    headerBurger.addEventListener('click', () => {
        headerBurger.classList.toggle('active');
        headerBody.classList.toggle('active');
        document.body.classList.toggle('_lock');
    });

    headerLink.forEach((el) => {
        el.addEventListener('click', () => {
            headerBurger.classList.remove('active');
            headerBody.classList.remove('active');
            document.body.classList.remove('_lock');
        });
    });
}

new Swiper('.examples__slider', {
    loop: true,
    slidesPerView: 1,
    navigation: {
        nextEl: '.examples__next',
        prevEl: '.examples__prev',
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
    },
});

const scrollLinks = document.querySelectorAll('a[href*="#"]');

if (scrollLinks.length > 0) {
    for (let i = 0; i < scrollLinks.length; i++) {
        scrollLinks[i].addEventListener('click', function (e) {
            e.preventDefault();

            const scrollID = scrollLinks[i].getAttribute('href').substr(1);
            if (scrollID.length > 0) {
                const scrollTarget = document.getElementById(scrollID);

                const scrollTopOffset = 0;
                const scrollElementPosition = scrollTarget.getBoundingClientRect().top;
                const scrollOffsetPosition = scrollElementPosition - scrollTopOffset;

                if (scrollLinks[i].classList.contains('.header-top__link')) {
                    headerBurger.classList.remove('active');
                    document.body.classList.remove('body-lock');
                    headerNav.classList.remove('active');
                }

                window.scrollBy({
                    top: scrollOffsetPosition,
                    behavior: 'smooth',
                });
            }
        });
    }
}
