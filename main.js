const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('card-animated');
    }
  });
});
observer.observe(document.querySelector('.card'));
observer.observe(document.querySelector('.card:nth-child(2)'));
observer.observe(document.querySelector('.card:nth-child(3)'));
observer.observe(document.querySelector('.card:nth-child(4)'));
observer.observe(document.querySelector('.card:nth-child(5)'));
observer.observe(document.querySelector('.card:nth-child(6)'));
observer.observe(document.querySelector('.card:nth-child(7)'));
observer.observe(document.querySelector('.card:nth-child(8)'));
observer.observe(document.querySelector('.card:nth-child(9)'));
observer.observe(document.querySelector('.card:nth-child(10)'));
observer.observe(document.querySelector('.card:nth-child(11)'));
observer.observe(document.querySelector('.card:nth-child(12)'));
observer.observe(document.querySelector('.card:nth-child(13)'));
observer.observe(document.querySelector('.card:nth-child(14)'));
observer.observe(document.querySelector('.card:nth-child(15)'));
observer.observe(document.querySelector('.gridcard-big'));
observer.observe(document.querySelector('.gridcardd'));
observer.observe(document.querySelector('.griidcardd'));
observer.observe(document.querySelector('.griidcard'));
observer.observe(document.querySelector('.griiidcard'));
observer.observe(document.querySelector('.griiidcardd-big'));
observer.observe(document.querySelector('.cardexp:nth-child(1)'));
observer.observe(document.querySelector('.cardexp:nth-child(2)'));
observer.observe(document.querySelector('.cardexp:nth-child(3)'));
observer.observe(document.querySelector('.cardexp:nth-child(4)'));


const observer2 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in1');
    }
  });
});
observer.observe(document.querySelector('.skil'));
observer.observe(document.querySelector('.Devskil'));
observer.observe(document.querySelector('.check'));
observer.observe(document.querySelector('.projp'));
observer.observe(document.querySelector('.experienceparagraf'));
observer.observe(document.querySelector('.habout'));



const observer3 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in2');
    }
  });
});
observer.observe(document.querySelector('.myskil'));
observer.observe(document.querySelector('.myint'));
observer.observe(document.querySelector('.porth'));
observer.observe(document.querySelector('.experienceh'));
observer.observe(document.querySelector('.hhabout'));


const observer4 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in3');
    }
  });
});
observer.observe(document.querySelector('.aboutskil'));
observer.observe(document.querySelector('.workp'));
observer.observe(document.querySelector('.experienceparagrafofaboutmyskill'));
observer.observe(document.querySelector('.paboutme'));

const observer5 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in4');
    }
  });
});
observer.observe(document.querySelector('.linehtml'));
