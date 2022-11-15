let HeaderElement = document.getElementsByTagName('header');
let nav = document.querySelector('nav');
let container = document.getElementById('container');

window.addEventListener('scroll', (event) => {
    let first_section = document.getElementById('first_section').getBoundingClientRect().top;
    let check  = HeaderElement[0].classList.contains('scrolled');
    let position = HeaderElement[0].getBoundingClientRect().top;
    let sticky = nav.offsetTop;
    console.log(document.getElementById('first_section').offsetTop)
    if(window.pageYOffset > sticky){
        if(!check){
            HeaderElement[0].classList.add("changed_fixed");
            setTimeout(function(){
                HeaderElement[0].classList.add("scrolled");
                document.getElementById('first_section').scrollTop = 80;
                console.log(window.pageYOffset);
            }, 100);
        }        
    }else{
        console.log('top')
        if(check && window.pageYOffset < 1){
                HeaderElement[0].classList.remove("scrolled");
                HeaderElement[0].classList.remove("changed_fixed");
                document.getElementById('first_section').scrollTop = 80;
        }
    }
});