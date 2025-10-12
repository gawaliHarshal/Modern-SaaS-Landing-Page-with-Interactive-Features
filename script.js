// video
const video = document.getElementById('productVideo');
const playBtn = document.getElementById('playPauseBtn');
const videoPoster = document.getElementById('videoPoster');

function togglePlay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

video.addEventListener('play', () => {
  playBtn.classList.add('hide');
  videoPoster.style.opacity = '0';
});

video.addEventListener('pause', () => {
  playBtn.classList.remove('hide');
  videoPoster.style.opacity = '1';
});

playBtn.addEventListener('click', togglePlay);
video.addEventListener('click', togglePlay);

video.addEventListener('ended', () => {
  playBtn.classList.remove('hide');
  videoPoster.style.opacity = '1';
});

// Initial state
videoPoster.style.opacity = '1';


// --- Testimonials Carousel ---
const slides = document.querySelectorAll('.testimonial-slide');
const dotsContainer = document.getElementById('testimonialDots');
let activeIndex = 0;
let slideInterval;

function createDots() {
  slides.forEach((_, idx) => {
    const dot = document.createElement('button');
    dot.className = 'testimonial-dot';
    dot.setAttribute('aria-label', `Show testimonial ${idx + 1}`);
    dot.addEventListener('click', () => goToSlide(idx, true));
    dotsContainer.appendChild(dot);
  });
}
function updateDots() {
  const dots = dotsContainer.querySelectorAll('.testimonial-dot');
  dots.forEach((dot, idx) => {
    dot.classList.toggle('active', idx === activeIndex);
  });
}
function showSlide(idx) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === idx);
  });
  updateDots();
}
function nextSlide() {
  activeIndex = (activeIndex + 1) % slides.length;
  showSlide(activeIndex);
}
function goToSlide(idx, userClicked) {
  activeIndex = idx;
  showSlide(activeIndex);
  if (userClicked) resetInterval();
}
function resetInterval() {
  clearInterval(slideInterval);
  slideInterval = setInterval(nextSlide, 5000);
}

createDots();
showSlide(activeIndex);
resetInterval();


// Contact Us Modal Logic
const contactForm = document.getElementById('contactForm');
const modal = document.getElementById('contactModal');
const closeModal = document.getElementById('closeModal');

contactForm.addEventListener('submit', function(e) {
  e.preventDefault();
  if (!contactForm.checkValidity()) {
    contactForm.reportValidity();
    return;
  }
  modal.style.display = 'flex';
  document.body.classList.add('modal-open');
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
  document.body.classList.remove('modal-open');
});

// Also close modal on pressing Escape
document.addEventListener('keydown', function(e) {
  if (e.key === "Escape" && modal.style.display === 'flex') {
    modal.style.display = 'none';
    document.body.classList.remove('modal-open');
  }
});

