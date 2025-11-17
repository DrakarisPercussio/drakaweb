interface ParallaxOptions {
  selector: string;
  containerSelector?: string;
  maxOffset?: number;
  scrollSpeed?: number;
  axis?: 'x' | 'y' | 'both';
}

export function initParallax(options: ParallaxOptions) {
  const {
    selector,
    containerSelector,
    maxOffset = 30,
    scrollSpeed = 0.15,
    axis = 'y'
  } = options;

  const element = document.querySelector(selector) as HTMLElement;
  const container = containerSelector 
    ? document.querySelector(containerSelector) as HTMLElement
    : document.body;

  if (!element) {
    console.warn(`Parallax: Element with selector "${selector}" not found`);
    return;
  }

  let lastScrollY = window.scrollY;
  let offsetY = 0;
  let offsetX = 0;
  let ticking = false;

  function handleScroll() {
    if (!element) return;

    const currentScrollY = window.scrollY;
    const scrollDelta = currentScrollY - lastScrollY;

    // Verificar si el contenedor está visible en viewport
    if (container) {
      const rect = container.getBoundingClientRect();
      const isVisible = rect.bottom > 0 && rect.top < window.innerHeight;
      
      if (!isVisible) {
        lastScrollY = currentScrollY;
        return;
      }
    }

    // Actualizar offsets según el eje configurado
    if (axis === 'y' || axis === 'both') {
      offsetY += scrollDelta * scrollSpeed;
      offsetY = Math.max(-maxOffset, Math.min(maxOffset, offsetY));
    }

    if (axis === 'x' || axis === 'both') {
      offsetX += scrollDelta * scrollSpeed;
      offsetX = Math.max(-maxOffset, Math.min(maxOffset, offsetX));
    }

    // Aplicar transformación
    const transformY = (axis === 'y' || axis === 'both') ? offsetY : 0;
    const transformX = (axis === 'x' || axis === 'both') ? offsetX : 0;
    
    element.style.transform = `translate(${transformX}px, ${transformY}px)`;
    lastScrollY = currentScrollY;
  }

  // Event listener con throttle
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        handleScroll();
        ticking = false;
      });
      ticking = true;
    }
  });

  // Cleanup function
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}
