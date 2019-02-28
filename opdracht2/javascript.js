;(function(){
'use strict';
        window.addEventListener('load', function(){       
                    document.getElementById('btnLogin').addEventListener('click', function() {
                    document.getElementById('loginmodal').classList.remove('loginmodal--verborgen');
                    });


                document.getElementById('btnCancel').addEventListener('click', function() {
                document.getElementById('loginmodal').classList.add('loginmodal--verborgen');
            });
        });

    })();