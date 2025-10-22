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


const observer4 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in3');
    }
  });
});
observer.observe(document.querySelector('.aboutskil'));
observer.observe(document.querySelector('.workp'));

const observer5 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in4');
    }
  });
});
observer.observe(document.querySelector('.linehtml'));
