var btncopy = document.querySelector('.js-copy');
        if(btncopy) {
            btncopy.addEventListener('click', docopy);
        }

        function docopy() {
            var dummy = document.createElement("textarea");
            document.body.appendChild(dummy);
            dummy.value = "f.darques@hotmail.fr";
            dummy.select();
            document.execCommand("copy");
            document.body.removeChild(dummy);
        };