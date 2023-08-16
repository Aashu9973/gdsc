let text=document.getElementById('writing');
let planeLeft=document.getElementById('left');
let planeRight=document.getElementById('right');
let gateLeft=document.getElementById('cloud2');
let gateRight=document.getElementById('cloud');
window.addEventListener('scroll', () =>{
    let value = window.scrollY;
    
    text.style.marginTop =  value * 4.5 +'px';
    // text2.style.marginTop =  value * 2.5 +'px';
    planeLeft.style.left = value* -1.5 + 'px';
    planeRight.style.left = value* 1.5 + 'px';
    gateLeft.style.left = value* -1.5 + 'px';
    gateRight.style.left = value* -0.7 + 'px';
});



const menu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');
menu_btn.addEventListener('click', function(){
    menu_btn.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');

})