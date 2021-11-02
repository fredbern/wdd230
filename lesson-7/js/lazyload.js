//lazyload
const imagesToLoad = document.querySelectorAll('img[data-src]');

const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
        image.removeAttribute('data-src');
    };
};

const imgOptions = {
    threshold: 1
};
//if this is true
if ('IntersectionObserver' in window) {
    // is supported so let's go!!!
    const imgObserver = new IntersectionObserver((items) => {
        items.forEach((item) => {
            if (item.isIntersecting) {
                loadImages(item.target);
                imgObserver.unobserve(item.target);
            }
        });
    }, imgOptions);

    // load image if necessary
    imagesToLoad.forEach((img) => {
        imgObserver.observe(img);
    });
} else { //just load all images if not supported
    imagesToLoad.forEach( (img) => {
        loadImages(img);
    });
}

//windChill
const tempNumber = parseFloat(document.querySelector('#temp').textContent);
const speedNumber = parseFloat(document.querySelector('#speed').textContent);
const windChill = Math.round(35.74 + (0.6215 * tempNumber) - (35.75 * Math.pow(speedNumber, 0.16)) +
    (0.4275 * tempNumber * Math.pow(speedNumber, 0.16)));
if (speedNumber > 3 && tempNumber <= 50) {
    x = document.getElementById('chill').textContent = 'Wind Chill is ' + windChill + '\xB0F';
} else {
    x = document.getElementById('chill').textContent = "No Wind Chill Today";
    }