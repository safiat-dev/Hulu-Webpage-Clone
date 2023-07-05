const modal = document.queryselector('.modal')
const loginBtn = document.queryselector('.login-btn')
const closeBtn = document.queryselector('.close')

loginBtn.addEventListener('click', openModal)
closeBtn.addEventListener('click', closeModal)
window.addEventListener('click', outsideClick)

function openModal() {
    modal.style.display = 'block'
}
function closeModal() {
    modal.style.display = 'none'
}