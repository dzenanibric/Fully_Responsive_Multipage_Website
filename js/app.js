window.addEventListener('scroll', ()=>{
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0);
});

const faqs = document.querySelectorAll('.faq');

faqs.forEach(el =>{
    el.addEventListener('click', ()=>{
            el.classList.toggle('open');

            const icon = el.querySelector('.faq__icon i');
            if(icon.className === 'uil uil-plus'){
                icon.className = "uil uil-minus";
            }
            else{
                icon.className = "uil uil-plus";
            }
    });
});

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints:{
        600: {
            slidesPerView: 2
        }
    }
    });

  const menu = document.querySelector('.nav__menu'),
  menu_btn = document.querySelector('#open-menu-btn'),
  close_btn = document.querySelector('#close-menu-btn');

  menu_btn.addEventListener('click', () =>{
        menu.style.display = 'flex';
        menu_btn.style.display = 'none';
        close_btn.style.display = 'inline-block'; 
  });

  close_btn.addEventListener('click', () =>{
    menu.style.display = 'none';
    menu_btn.style.display = 'inline-block';
    close_btn.style.display = 'none';
  });