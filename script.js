particlesJS('particles', {
    particles: {
        number: { value: 100 },
        color: { value: '#ffffff' },
        shape: { type: 'circle' },
        opacity: { value: 0.5 },
        size: { value: 3 },
        move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false
        }
    }
});


let currentSlide = 0;
const slider = document.getElementById('slides');
const totalSlides = document.querySelectorAll('#slides > div').length;

function updateSlide() {
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlide();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlide();
}

function createLoveRain() {
    const container = document.getElementById('love-rain');
}

function clearLoveRain() {
    const container = document.getElementById('love-rain');
    container.innerHTML = '';
}

function openModal() {
    const modal = document.getElementById('modal');
    particlesJS('modal', {
        particles: {
            number: { value: 30 },
            color: { value: '#ff3f3f' },
            shape: {
                type: 'image',
                image: {
                    src: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiBmaWxsPSIjZmYzZjNmIj48cGF0aCBkPSJNMTIgMjEuMzVsLTEuNDUtMS4zMkM1LjQgMTUuMzYgMiAxMi4yOCAyIDguNSAyIDUuNDIgNC40MiAzIDcuNSAzYzEuNzQgMCAzLjQxLjgxIDQuNSAyLjA5QzEzLjA5IDMuODEgMTQuNzYgMyAxNi41IDMgMTkuNTggMyAyMiA1LjQyIDIyIDguNWMwIDMuNzgtMy40IDYuODYtOC41NSAxMS41NEwxMiAyMS4zNXoiLz48L3N2Zz4='
                }
            },
            opacity: { value: 0.8 },
            size: { value: 16 },
            move: {
                enable: true,
                speed: 5,
                direction: 'bottom',
                straight: true,
                out_mode: 'out',
                bounce: false
            }
        }
    });
    modal.classList.remove('hidden');
    modal.classList.remove('opacity-0');
    modal.classList.add('opacity-100', 'flex');
    createLoveRain();
    currentSlide = 0;
    updateSlide();
}

function closeModal() {
    document.getElementById('modal').classList.add('hidden');
    clearLoveRain();
}

document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape') closeModal();
    if(e.key === 'ArrowLeft') prevSlide();
    if(e.key === 'ArrowRight') nextSlide();
});

let touchStartX = 0;
let touchEndX = 0;

slider.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
});

slider.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    if(touchStartX - touchEndX > 50) nextSlide();
    if(touchStartX - touchEndX < -50) prevSlide();
});