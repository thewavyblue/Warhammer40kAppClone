const accordion = document.querySelectorAll('.accordion-wrapper');


for (i=0; i<accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    this.classList.toggle('active')

    const chevron = this.querySelector('.chevron');
    chevron.classList.toggle('active');

  })
}