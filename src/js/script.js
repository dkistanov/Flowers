
let name = 'User Name';
let place = 'Flavortown';

console.log( `Hello ${name}, ready for ${place}?` );

const sliderControl = document.querySelectorAll('.slider__control');

sliderControl.forEach(function(item, i, sliderControl){ 
    alert( i + ": " + item + " (массив:" + sliderControl + ")" );
})