const Menubtn = document.getElementById('menu');
const navBar = document.getElementById('nav-menu');
const bar1 = document.getElementById('bar1');
const bar2 = document.getElementById('bar2');
const bar3 = document.getElementById('bar3');

const onClickMenu = () => {

    if(!navBar.hasAttribute("class",'closed')){
        navBar.setAttribute("class",'closed')
        bar1.style.transform = "translateY(-4px)"
        bar3.style.transform = "translateY(4px)"
        bar2.style.transform = "translateX(0px)"
        bar2.style.opacity = "1"
    }else{
        navBar.removeAttribute("class",'closed')
        bar1.style.transform = "translateY(4px) rotate(45deg)"
        bar3.style.transform = "translateY(-2px) rotate(-45deg)"
        bar2.style.transform = "translateX(5px)"
        bar2.style.opacity = "0"
    }

}