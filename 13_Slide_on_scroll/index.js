const debounce = (func, wait = 20, immediate = true) => {
    let timeout;
    return (...args)=> {
        const later = () => {
            timeout = null;
            if (!immediate) func.apply(this, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(this, args);
    };
};

// Selecting images from page
const slidingImages = document.querySelectorAll('.slide-in');

// Check if images has been scrolled over

function checkScroll() {

    slidingImages.forEach(image => {
        // Calculating when image is 50% displayed
        const imageHalfShown = (window.scrollY + window.innerHeight) - image.height/2;
        // Calculating image bottom position in relation to the entire page
        const imageBottom = image.offsetTop + image.height;

        // Check if image has been scrolled past 50% height
        const isHalfShown = imageHalfShown > image.offsetTop;
        // Check if image is still visible / not scrolled past
        const isDisplayed = window.scrollY < imageBottom;
        (isHalfShown && isDisplayed) ? image.classList.add('active') : image.classList.remove('active');
    })
}

// Debounce function to limit the number of event fires and increase performance
window.addEventListener('scroll', debounce(checkScroll));