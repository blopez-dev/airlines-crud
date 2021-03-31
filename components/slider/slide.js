export function slide() {
    const wrapperSlide = document.createElement('div');
    wrapperSlide.classList.add('wrapper-carousel');
    const wrapperImage = document.createElement('img');
    wrapperImage.classList.add('hero-image');
    wrapperImage.setAttribute('src', '../skylab-crud/assets/heroimage.jpg');
    wrapperSlide.appendChild(wrapperImage);
    return wrapperSlide;
}