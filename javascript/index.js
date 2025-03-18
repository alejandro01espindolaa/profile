document.addEventListener(`DOMContentLoaded`,()=>{
    const menubtn = document.getElementById(`menubtn`);
    const navmenu = document.getElementById(`navmenu`);

menubtn.addEventListener(`click`,()=>{
    navmenu.classList.toggle(`active`) 
});

const navLinks = document.querySelectorAll(`#navmenu a`);


navLinks.forEach((link)=>{
    link.addEventListener(`click`, function(){
        navmenu.classList.remove(`active`);    
    });
});

document.addEventListener(`click`,function(event){
    const isClickInsideMenu = navmenu.contains(event.target);
    const isClickOnMenuBtn = menubtn.contains(event.target);

    if(!isClickInsideMenu && isClickOnMenuBtn && navmenu.classList.contains(`active`)){

    }
});

});