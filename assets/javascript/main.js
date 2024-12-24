/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle')
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
       navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    } )
}


function sendMail() {
    var form = document.getElementById('contactForm');
    var name = form.elements['name'].value;
    var email = form.elements['email'].value;
    var subject = form.elements['subject'].value;
    var message = form.elements['message'].value;

    // Construct mailto link
    var mailtoLink = 'mailto:' + email +
                     '?cc=' + encodeURIComponent(email) +
                     '&subject=' + encodeURIComponent(subject) +
                     '&body=' + encodeURIComponent("Name: " + name + "\nMessage: " + message);

    // Open the mail client
    window.location.href = mailtoLink;
}

// You may want to add an event listener if you prefer not to use the 'onclick' attribute in HTML
document.addEventListener('DOMContentLoaded', function () {
    var sendButton = document.querySelector('#contactForm button[type="button"]');
    if (sendButton) {
        sendButton.addEventListener('click', sendMail);
    }
});

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills__content'),
        skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills(){
    let itemClass = this.parentNode.className

    for(i = 0; i < skillsContent.length; i++){
        skillsContent[i].className = 'skills__content skills__close'
    }
    if(itemClass === 'skills__content skills__close'){
        this.parentNode.className = 'skills__content skills__open'
    }
}

skillsHeader.forEach((el) =>{
    el.addEventListener('click', toggleSkills)
})

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContents =>{
            tabContents.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')

        tabs.forEach(tab =>{
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
    })
})

/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll('.services__modal'),
      modalBtns = document.querySelectorAll('.services__button'),
      modalCloses = document.querySelectorAll('.services__modal-close')

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () =>{
        modal(i)
    })
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () =>{
        modalViews.forEach((modalView) =>{
            modalView.classList.remove('active-modal')
        })
    })
})

/*==================== PORTFOLIO SWIPER  ====================*/
let swiperPortfolio = new Swiper('.portfolio__container', {
    cssMode: true,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

/*==================== TESTIMONIAL ====================*/
let swiperTestimonial = new Swiper('.testimonial__container', {
    loop: true,
    grabCursor: true,
    spaceBetween: 48,
    autoplay: {
        delay: 5000, // 5000ms = 5s between transitions
        disableOnInteraction: false, // Continues autoplay even after user interaction
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
    breakpoints: {
        568:{
            slidesPerView: 2,
        }
    }
});


  
/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*==================== DARK LIGHT THEME ====================*/ 
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)

/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})










/*==================== GLOBAL VARIABLES ====================*/
const music = document.getElementById('christmasSong');
const snowfallCanvas = document.getElementById('snowfall');

/*==================== MUSIC AUTOPLAY ====================*/
function playChristmasMusic() {
    if (music) {
        music.play().then(() => {
            console.log('🎵 Christmas music is playing!');
        }).catch((error) => {
            console.warn('🚫 Autoplay prevented by the browser.', error);
            // Show manual play button
            const playButton = document.createElement('button');
            playButton.innerText = 'Play Christmas Music 🎵';
            playButton.style.position = 'fixed';
            playButton.style.top = '20px';
            playButton.style.left = '50%';
            playButton.style.transform = 'translateX(-50%)';
            playButton.style.zIndex = '9999';
            playButton.style.padding = '10px 20px';
            playButton.style.fontSize = '1rem';
            playButton.style.backgroundColor = '#ff0000';
            playButton.style.color = '#fff';
            playButton.style.border = 'none';
            playButton.style.cursor = 'pointer';
            document.body.appendChild(playButton);

            playButton.addEventListener('click', () => {
                music.play();
                playButton.remove();
            });
        });
    }
}

/*==================== VOICE NARRATION (CHRISTMAS PAGE ONLY) ====================*/
function playChristmasNarration() {
    if (window.location.pathname.includes('christmas-wish.html')) {
        const text = "We wish you a Merry Christmas and a Happy New Year!";
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US';
        utterance.rate = 0.8; // Calm speed
        utterance.pitch = 1; // Normal pitch
        utterance.volume = 1; // Full volume
        speechSynthesis.speak(utterance);
    }
}

/*==================== SNOWFALL EFFECT ====================*/
function startSnowfall() {
    if (!snowfallCanvas) return;

    const ctx = snowfallCanvas.getContext('2d');
    snowfallCanvas.width = window.innerWidth;
    snowfallCanvas.height = window.innerHeight;

    const flakes = [];
    const numFlakes = 100;

    function createFlakes() {
        for (let i = 0; i < numFlakes; i++) {
            flakes.push({
                x: Math.random() * snowfallCanvas.width,
                y: Math.random() * snowfallCanvas.height,
                r: Math.random() * 4 + 1,
                d: Math.random() + 1,
            });
        }
    }

    function drawFlakes() {
        ctx.clearRect(0, 0, snowfallCanvas.width, snowfallCanvas.height);
        ctx.fillStyle = 'white';
        ctx.beginPath();
        for (let i = 0; i < flakes.length; i++) {
            const f = flakes[i];
            ctx.moveTo(f.x, f.y);
            ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2, true);
        }
        ctx.fill();
        moveFlakes();
    }

    function moveFlakes() {
        for (let i = 0; i < flakes.length; i++) {
            const f = flakes[i];
            f.y += Math.pow(f.d, 2);
            if (f.y > snowfallCanvas.height) {
                f.y = 0;
                f.x = Math.random() * snowfallCanvas.width;
            }
        }
    }

    createFlakes();
    setInterval(drawFlakes, 25);
}

/*==================== WISH MODAL LOGIC ====================*/
function showWishModal() {
    const fromChristmasWish = localStorage.getItem('fromChristmasWish');

    if (!fromChristmasWish && document.getElementById('christmasModal')) {
        // Show the modal if not redirected from the wish page
        document.getElementById('christmasModal').classList.add('show');
        playChristmasMusic();
    } else {
        // Clear the flag after redirection
        localStorage.removeItem('fromChristmasWish');
    }
}

function closeWishModal() {
    if (document.getElementById('christmasModal')) {
        document.getElementById('christmasModal').classList.remove('show');
    }
    if (music) {
        music.pause();
    }
    localStorage.setItem('fromChristmasWish', 'true');
    window.location.href = 'index.html';
}

/*==================== PAGE INITIALIZATION ====================*/
window.onload = () => {
    // Snowfall starts automatically
    startSnowfall();

    // Voice narration only on Christmas Wish page
    playChristmasNarration();

    // Music plays on Christmas Wish page
    playChristmasMusic();

    // Handle Modal Logic
    showWishModal();
};

/*==================== CLOSE WISH MODAL EVENT LISTENER ====================*/
const closeButton = document.querySelector('.christmas-close-button');
if (closeButton) {
    closeButton.addEventListener('click', closeWishModal);
}


// Toggle Music Play/Pause
function toggleMusic() {
    const music = document.getElementById('christmasSong');
    const musicButton = document.getElementById('musicControlBtn');

    if (music.paused) {
        music.play();
        musicButton.innerText = '🔊';
    } else {
        music.pause();
        musicButton.innerText = '🔇';
    }
}

// Automatically play music on page load
window.onload = () => {
    const music = document.getElementById('christmasSong');
    if (music) {
        music.play().catch(error => console.log("Autoplay prevented:", error));
    }
    
};






