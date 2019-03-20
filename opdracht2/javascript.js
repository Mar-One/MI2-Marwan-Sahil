;
(function () {
    'use strict';
    window.addEventListener('load', function () {
        document.getElementById('btnLogin').addEventListener('click', function () {
            document.getElementById('loginmodal').classList.remove('loginmodal--verborgen');
        });


        document.getElementById('btnCancel').addEventListener('click', function () {
            document.getElementById('loginmodal').classList.add('loginmodal--verborgen');
        });

        document.getElementById('login__form').setAttribute('novalidate', 'novalidate');

        // intercept document submit
        document.getElementById('login__form').addEventListener('click', function (e) {
            // halt event
            e.preventDefault();
            e.stopPropagation();

            // form checking
            let isValid = true;


            // error messages shortcuts
            let errPwd = document.getElementById('errPwd');
            let errEmail = document.getElementById('errEmail');

            // input shortcuts
            let inpEmail = document.getElementById('inpEmail');
            let inpPwd = document.getElementById('inpPwd');

            // hide all error messages
            let formerror = document.querySelectorAll('.formerror');
            for (let i = 0; i < formerror.length; i++) {
                formerror[i].style.display = 'none';
            }
            if (inpEmail.value == "") {
                isValid = false;
                errEmail.innerHTML = 'gelieve een e-mail in te vullen aub';
                errEmail.style.display = 'block';
            }

            if (inpPwd.value == "") {
                isValid = false;
                errPwd.innerHTML = 'gelieve een passwoord in te vullen aub';
                errPwd.style.display = 'block';
            }

            if (isValid) {
                console.log('all ok');
            } else {
                console.log('form contains errors');
            }


        });
    });

})();