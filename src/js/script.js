
let name = 'User Name';
let place = 'Flavortown';

console.log( `Hello ${name}, ready for ${place}?` );

const sliderControls = document.querySelector('.reviews__slider-controls');
const sliderControl = document.querySelectorAll('.slider__control');
const sliderList = document.querySelector('.reviews__list');

sliderControls.addEventListener('click', function(e){
        const _this = e.target;
        if (!_this.classList.contains('active')) {
            for (let i = 0; i < sliderControl.length; i++) {
                sliderControl[i].classList.remove('active');
            }
            var scroll = _this.dataset.test;
            console.log(scroll)
            sliderList.style.left = "0";
            sliderList.style.left = `${scroll * -100}%`;
            _this.classList.add('active');

        };

        //  else {
        //     sliderList.style.left = `${active.dataset.test * -100}%`;
        // }

});

$(document).ready(function(){
    $('.nav__link').click( function(){
	var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) { 
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500); 
        }
	    return false;
    });
});

