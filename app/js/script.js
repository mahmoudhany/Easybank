const header = document.querySelector(".header")
const btnHamburgur = document.querySelector("#btnHamburgur")
const body = document.querySelector('body')
const overlay = document.querySelector('.overlay')
const fadeElems = document.querySelectorAll('.has-fade')

btnHamburgur.addEventListener('click', () => {
  if (header.classList.contains('open')) {
    header.classList.remove('open');
    body.classList.remove('no-scroll')
    fadeElems.forEach(element => {
      element.classList.remove('fade-in');
      element.classList.add('fade-out');
      overlay.addEventListener('click', () => {
        header.classList.remove('open');
        element.classList.remove('fade-in');
        element.classList.add('fade-out');
      })
    })
  } else {
    header.classList.add('open');
    body.classList.add('no-scroll')
    fadeElems.forEach(element => {
      element.classList.add('fade-in');
      element.classList.remove('fade-out');
    })
  }
})


