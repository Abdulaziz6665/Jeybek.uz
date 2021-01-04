const socialBox = document.querySelector('.social-link-wrapper')
const socialsBlock = document.querySelector('.social-wrapper')
const btnClose = document.querySelector('.btn-close')

socialBox.addEventListener('click', function (e) {
  socialBox.classList.add('box-hidden')
  socialsBlock.classList.remove('social-block')
})

btnClose.addEventListener('click', function() {
socialBox.classList.remove('box-hidden')
socialsBlock.classList.add('social-block')

})