const toTop = document.querySelector(".to-top");
window.addEventListener("scroll",() =>{
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        toTop.style.display = 'block' ;
    }else{
        toTop.style.display = 'none'
    }

})
toTop.addEventListener('click' , () => {
    window.scroll({
        top: 0 ,
        behavior:"smooth"
    })
})

const mainmenu = document.querySelector('.nav-links');
const closemenu = document.querySelector('.closemenu');
const openmenu = document.querySelector('.openmenu');

openmenu.addEventListener('click',show);
closemenu.addEventListener('click',close);

function show(){
    mainmenu.style.display = 'flex';
    mainmenu.style.top = '0';
}
function close(){
    mainmenu.style.top = '-100%';
}