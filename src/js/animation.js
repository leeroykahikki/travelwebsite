//! Написать на Stackoverflow о баге с анимацией при резком проигрывании

let cards = document.querySelectorAll('.cards-item');

cards.forEach((card) => {
  card.addEventListener('mouseenter', (event) => {
    anime.remove(card);
    
    anime({
      targets: card,
      filter: 'drop-shadow(0 12px 30px rgba(200, 180, 180, 0.2))',
      background: '#fff',
      easing: 'easeInOutQuad',
    });
  });

  card.addEventListener('mouseleave', (event) => {
    anime.remove(card);

    anime({
      targets: card,
      filter: 'drop-shadow(rgba(0, 0, 0, 0) 0px 0px 0px)',
      background: '#f8f8f8',
      easing: 'easeInOutQuad',
    });
  });
});