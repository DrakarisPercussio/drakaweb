export function initializeCarousels() {
  const carousels = document.querySelectorAll('.photo-carousel');
  
  carousels.forEach(carousel => {
    const track = carousel.querySelector('.carousel-track');
    if (!track) return;
    
    const cards = track.querySelectorAll('.photo-placeholder');
    let currentIndex = 0;
    const totalCards = cards.length;
    let isTransitioning = false;

    function updateCardWidth() {
      const firstCard = cards[0];
      if (firstCard) {
        const cardRect = firstCard.getBoundingClientRect();
        return cardRect.width;
      }
      return 300;
    }

    let cardWidth = updateCardWidth();
    
    function moveCarousel() {
      if (isTransitioning || totalCards <= 1) return;
      
      isTransitioning = true;
      currentIndex = (currentIndex + 1) % totalCards;
      
      cardWidth = updateCardWidth();
      const translateX = -currentIndex * cardWidth;
      track.style.transform = `translateX(${translateX}px)`;
      
      setTimeout(() => {
        isTransitioning = false;
      }, 500);
    }
    
    setInterval(moveCarousel, 4000);

    window.addEventListener('resize', function() {
      cardWidth = updateCardWidth();
      const translateX = -currentIndex * cardWidth;
      track.style.transform = `translateX(${translateX}px)`;
    });
  });
}
