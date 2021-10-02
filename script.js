const togb = document.getElementsByClassName('toggle-button')[0]
const link = document.getElementsByClassName('main-nav')[0]

togb.addEventListener('click', () => {
  link.classList.toggle('active')
})