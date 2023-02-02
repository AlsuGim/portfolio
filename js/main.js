const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-btn');
const navBtnImg =document.querySelector('#nav-btn-img');

navBtn.onclick=()=>{
    if (nav.classList.toggle('open')){
        navBtnImg.setAttribute('xlink:href', 'img/sprite-icons.svg#Close');
    } else{
        navBtnImg.setAttribute('xlink:href', 'img/sprite-icons.svg#Nav');
    }

}
AOS.init({
    once: true
}); 