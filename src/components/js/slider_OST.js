// Own slider by OstKost
function nextSlide(up = true) {
    const slider = document.querySelector('.apparatus__slider');
    const slides = slider.childNodes;
    const sliderWidth = slider.offsetWidth;
    const sliderFullWidth = slider.scrollWidth;
    const sliderScrolled = slider.scrollLeft;
    const itemWidth = sliderFullWidth / slides.length;
    const maxItems = Math.round(sliderWidth / itemWidth);
    const maxScroll = (slides.length - maxItems) * itemWidth;
    let left = 0;
    if (up) {
        left = sliderScrolled >= maxScroll ? 0 : sliderScrolled + itemWidth;
    } else {
        left = sliderScrolled <= 0 ? maxScroll : sliderScrolled - itemWidth;
    }
    slider.scrollTo({
        left,
        behavior: 'smooth',
    });
}

function initApparatusSlider() {
    let interval = null;
    const machines = (apparatus && apparatus.records) || [];

    const slider = document.querySelector('.apparatus__slider');
    if (!slider) return;
    slider.addEventListener('mouseover', stopSlider);
    slider.addEventListener('mouseout', startSlider);

    const controls = document.querySelectorAll('.apparatus__control-btn');
    controls[0].addEventListener('click', () => nextSlide(false));
    controls[1].addEventListener('click', () => nextSlide(true));
    controls.forEach((btn) => {
        btn.addEventListener('mouseover', stopSlider);
        btn.addEventListener('mouseout', startSlider);
    });

    function render() {
        machines.forEach((machine) => {
            const { Photo, Name } = machine.fields || {};
            const hasImage = Array.isArray(Photo) && Photo.length > 0;
            const imageUrl = hasImage ? Photo[0].url : 'img/anygear.png'; // сделать запасную фотку если фото нет
            const sliderItem = document.createElement('li');
            sliderItem.classList.toggle('apparatus__slider-item', true);

            const apparatEl = document.createElement('div');
            apparatEl.classList.toggle('apparat', true);

            const apparatImageEl = document.createElement('div');
            apparatImageEl.classList.toggle('apparat__image', true);
            apparatImageEl.style.backgroundImage = `url(${imageUrl})`;

            const apparatNameEl = document.createElement('div');
            apparatNameEl.classList.toggle('apparat__name', true);
            apparatNameEl.innerText = Name;

            const apparatBtnEl = document.createElement('div');
            apparatBtnEl.classList.toggle('apparat__btn', true);
            apparatBtnEl.innerText = 'Подробнее';
            apparatEl.appendChild(apparatImageEl);
            apparatEl.appendChild(apparatNameEl);
            apparatEl.appendChild(apparatBtnEl);
            sliderItem.appendChild(apparatEl);
            slider.appendChild(sliderItem);
        });
        sliderGetAppID();
    }

    function startSlider() {
        interval = setInterval(() => {
            nextSlide();
        }, 5000);
    }
    function stopSlider() {
        clearInterval(interval);
    }

    render();
    startSlider();
}

function name(params) {
    if (up) {
        left = sliderScrolled < maxScroll && sliderScrolled + itemWidth;
    } else if (sliderScrolled >= maxScroll) {
        left = 0;
        slider.current.scrollTo({
            left,
            behavior: 'instant',
        });
    } else {
        left = sliderScrolled <= 0 ? maxScroll : sliderScrolled - itemWidth;
        left = sliderScrolled <= 0 ? maxScroll : sliderScrolled - itemWidth;
    }
    slider.current.scrollTo({
        left,
        behavior: 'smooth',
    });

    if (up) {
        if (sliderScrolled >= maxScroll) {
            left = 0;
            slider.current.scrollTo({
                left,
                behavior: 'instant',
            });
        }
        left = sliderScrolled < maxScroll && sliderScrolled + itemWidth;
    } else {
        if (sliderScrolled <= 0) {
            left = maxScroll;
        } else {
            left = sliderScrolled - itemWidth;
        }
    }
    slider.current.scrollTo({
        left,
        behavior: 'instant',
    });
}

if (up) {
    left = sliderScrolled < maxScroll && sliderScrolled + itemWidth;
} else if (sliderScrolled >= maxScroll) {
    left = 0;
    slider.current.scrollTo({
        left,
        behavior: 'instant',
    });
} else {
    left = sliderScrolled <= 0 ? maxScroll : sliderScrolled - itemWidth;
    left = sliderScrolled <= 0 ? maxScroll : sliderScrolled - itemWidth;
}
slider.current.scrollTo({
    left,
    behavior: 'smooth',
});
