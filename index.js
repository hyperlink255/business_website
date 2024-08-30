
document.addEventListener("DOMContentLoaded" , () => {
window.addEventListener('scroll', () => {
document.querySelector('.navbar').classList.toggle
('window-scroll', window.scrollY > 5)
})  
const navbarToggle = document.querySelector('.navbar-toggle')
const headerRight = document.querySelector('.header-right')
 navbarToggle.addEventListener('click', () => {
    headerRight.classList.toggle('active')
    let nav = navbarToggle.querySelector("i")
    nav.classList.toggle('fa-remove')

 })
 window.addEventListener('scroll',() => {
    document.querySelectorAll('.zoom').forEach(item => {
        item.classList.toggle('animation', window.scrollY > 10)
    })    
 })
  
const center = document.querySelectorAll('.item')
center.forEach(item => {
item.addEventListener('click',() => {
    console.log('asdn')
    center.forEach(item => {
        item.classList.remove('active')
    })
    item.classList.add('active')
})
})

function loader(){
    document.querySelector('.loader-container').classList.add('fade-out');
    }
    function fadeOut(){
        setInterval(loader,1000)
    }
    window.onload = fadeOut
    
})