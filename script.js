;
(function () {
    'use strict';
    window.addEventListener('load', function () {
        let img = document.querySelector('#img-van');
        let button = document.querySelector('#btn-sepia');
        let button2 = document.querySelector('#btn-blur');
        let button3 = document.querySelector('#btn-grayscale');
        let button4 = document.querySelector('#btn-hue');
        let buttonNormal = document.querySelector('#btn-normal');

        button.addEventListener('click', function () {
            if (img.classList.contains('blur') ||
                img.classList.contains('sepia') ||
                img.classList.contains('grayscale') ||
                img.classList.contains('hue')) {
                img.classList.remove('blur');
                img.classList.remove('sepia');
                img.classList.remove('grayscale');
                img.classList.remove('hue');
            } else {
                img.classList.add('sepia');
            }
        });

        button2.addEventListener('click', function () {
            if (img.classList.contains('blur') ||
                img.classList.contains('sepia') ||
                img.classList.contains('grayscale') ||
                img.classList.contains('hue')) {
                img.classList.remove('blur');
                img.classList.remove('sepia');
                img.classList.remove('grayscale');
                img.classList.remove('hue');
            } else {
                img.classList.add('blur');
            }
        });

        button3.addEventListener('click', function () {
            if (img.classList.contains('blur') ||
                img.classList.contains('sepia') ||
                img.classList.contains('grayscale') ||
                img.classList.contains('hue')) {
                img.classList.remove('blur');
                img.classList.remove('sepia');
                img.classList.remove('grayscale');
                img.classList.remove('hue');
            } else {
                img.classList.add('grayscale');
            }
        });

        button4.addEventListener('click', function () {
            if (img.classList.contains('blur') ||
                img.classList.contains('sepia') ||
                img.classList.contains('grayscale') ||
                img.classList.contains('hue'))

            {
                img.classList.remove('blur');
                img.classList.remove('sepia');
                img.classList.remove('grayscale');
                img.classList.remove('hue');
            } else {
                img.classList.add('hue');
            }

        });
        buttonNormal.addEventListener('click', function () {
            img.classList.remove('hue');
            img.classList.remove('sepia');
            img.classList.remove('grayscale');
            img.classList.remove('blur');
        });

        let slider = document.getElementById("sliderid");
        let output = document.getElementById("value");
        output.innerHTML = slider.value;
        slider.addEventListener('input', function(e){
         output.innerHTML = slider.value;
         img.style.opacity = slider.value / 100;
        });
  
  
       /*  $('.slidercontainer').change(function (e) {
            let value = $(e.target).val();
            $('#img-van').css('opacity',value);
        }); */

    });
})();