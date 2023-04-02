const changeArea = document.querySelector('.change-area')
const $tab = document.querySelector('.tab')

$tab.addEventListener('click', (e) => {
  if(!e.target.classList.contains('tablist')) return null
  const activeDOM = document.querySelector('.active')
  activeDOM.classList.remove('active')
  e.target.classList.add('active')
  changeArea.innerText = `${e.target.innerText} 영역`
})