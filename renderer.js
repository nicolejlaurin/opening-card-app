// document.getElementById('left').addEventListener('click', () => {
//     document.getElementById('card').classList.toggle('open');
//     audio.currentTime = 0; // rewind if already played
//     audio.play();
// });
  

//   document.getElementById('right').addEventListener('click', () => {
//     document.getElementById('card').classList.remove('open');
//    // audio.pause(); 
// });


document.addEventListener('DOMContentLoaded', () => {
    const card = document.getElementById('card');
    const audio = document.getElementById('birthday-audio');
  
    card.addEventListener('click', () => {
      const isOpen = card.classList.toggle('open');
  
      if (isOpen) {
        audio.currentTime = 0;
        audio.volume = 1;
        audio.play().catch((err) => {
          console.error('Audio play failed:', err);
        });

        confetti({
            particleCount: 200,
            spread: 90,
            angle: 90,            
            startVelocity: 40,
            origin: { y: 0.7 }
          });

      } else {
        audio.pause();
      }
    });
  });
  