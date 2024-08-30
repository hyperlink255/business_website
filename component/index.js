document.addEventListener('DOMContentLoaded', () => {
    fetch("header.html")
    .then((res) => {
        if(!res.ok){
            throw new Error ("Network response was not ok")
        }
        return res.text()
    }).then((content) => {
        document.querySelector(".header-container").innerHTML = content
        window.addEventListener('scroll', () => {
        document.querySelector('.navbar').classList.toggle
        ('window-scroll', window.scrollY > 5)
        })  
        const navbarToggle = document.querySelector('.navbar-toggle')
        const headerRight = document.querySelector('.header-right')
         navbarToggle.addEventListener('click', () => {
            headerRight.classList.toggle('active')
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
        
        
    }).catch((error) => {
        document.querySelector('.header-container').innerHTML = "Error loading header"
    })
    
    fetch("footer.html")
    .then((res) => {
        if(!res.ok){
            throw new Error("Network response was not ok");
        }
        return res.text()
    }).then((res) => {
        document.querySelector(".footer-data").innerHTML = res
    }).catch((err) => {
        console.log('footer-error', err)
        document.querySelector(".footer-data").innerHTML = "Error loading footer"
    })
    
    
    function loader(){
    document.querySelector('.loader-container').classList.add('fade-out');
    }
    function fadeOut(){
        setInterval(loader,1000)
    }
    window.onload = fadeOut
    
    })
    