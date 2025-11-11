export class InfiniteCarousel {
  constructor(element) {
    this.carousel = element;
    this.track = element.querySelector('.carousel-track');
    this.dots = element.querySelectorAll('.dot');
    this.currentIndex = 0;
    this.totalSlides = this.track.children.length; // Count actual slides instead of dots
    this.autoplayInterval = null;
    
    this.init();
  }

  init() {
    this.startAutoplay();
    
    // Pause on hover
    this.carousel.addEventListener('mouseenter', () => this.pauseAutoplay());
    this.carousel.addEventListener('mouseleave', () => this.startAutoplay());
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.totalSlides;
    this.updateCarousel();
  }

  updateCarousel() {
    const translateX = -this.currentIndex * 100;
    this.track.style.transform = `translateX(${translateX}%)`;
  }

  startAutoplay() {
    this.autoplayInterval = setInterval(() => {
      this.nextSlide();
    }, 3500);
  }

  pauseAutoplay() {
    if (this.autoplayInterval) {
      clearInterval(this.autoplayInterval);
    }
  }
}

// Initialize carousels when DOM is loaded
export function initializeCarousels() {
  document.addEventListener('DOMContentLoaded', () => {
    const carousels = document.querySelectorAll('.photo-carousel');
    carousels.forEach(carousel => {
      new InfiniteCarousel(carousel);
    });
  });
}
