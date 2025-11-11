export function initCarousel() {
  const track = document.getElementById('carouselTrack');
  if (!track) return;
  
  const cards = track.querySelectorAll('.agenda-card');
  let currentIndex = 0;
  const originalCards = cards.length / 2; 
  let isTransitioning = false;

  function updateCardWidth() {
    const firstCard = cards[0];
    if (firstCard) {
      const cardRect = firstCard.getBoundingClientRect();
      return cardRect.width + 20;
    }
    return 300;
  }

  let cardWidth = updateCardWidth();
  
  function moveCarousel() {
    if (isTransitioning) return;
    
    isTransitioning = true;
    currentIndex++;
    
    cardWidth = updateCardWidth();
    const translateX = -currentIndex * cardWidth;
    track.style.transform = `translateX(${translateX}px)`;
    
    if (currentIndex >= originalCards) {
      setTimeout(() => {
        track.style.transition = 'none';
        currentIndex = 0;
        track.style.transform = `translateX(0px)`;

        setTimeout(() => {
          track.style.transition = 'transform 0.8s ease-in-out';
          isTransitioning = false;
        }, 50);
      }, 800); 
    } else {
      setTimeout(() => {
        isTransitioning = false;
      }, 800);
    }
  }
  
  setInterval(moveCarousel, 3000);

  window.addEventListener('resize', function() {
    cardWidth = updateCardWidth();
    const translateX = -currentIndex * cardWidth;
    track.style.transform = `translateX(${translateX}px)`;
  });
}
