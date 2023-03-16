let menuButton = document.querySelector(".menu-btn");
let openBar = document.querySelector(".sideBar");
let mainOpen = document.querySelector("main");

menuButton.onclick = e =>{
    if(!openBar.classList.contains('open')){
        openBar.classList.add('open');
    }else{
        openBar.classList.remove('open');
    }
    if(!mainOpen.classList.contains('open')){
        mainOpen.classList.add('open');
    }else{
        mainOpen.classList.remove('open');
    }
}