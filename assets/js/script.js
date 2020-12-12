
    // Mengubah foreach nodelist menjadi array
    NodeList.prototype.forEach = Array.prototype.forEach;
    // Untuk setiap sidebar menu
    let links = document.querySelectorAll('.sidebar-menu-links');
    links.forEach((e) => {
        let x = e;
        e.addEventListener('click', () => {
            let xNext = x.nextElementSibling;
            if(x.classList.contains('clicked')) {
                x.classList.remove('clicked');
                xNext.classList.remove('animasi');
                setTimeout(() => {xNext.style.display = "none"}, 250);
                return;
            } else {
                x.classList.add('clicked');
                setTimeout(() => {xNext.style.display = "block"}, 200);
                setTimeout(() => {xNext.classList.add('animasi')}, 250);
            }
            // xNext.classList.add('animasi');
            // setTimeout((e) => {xNext.style.display = "block"}, 250);
        })
    });

    // Untuk sidebar mobile
    let mblMenu = document.querySelector('.mobile-menu');

    mblMenu.addEventListener('click', () => {
        let mnStrip = mblMenu.querySelectorAll('.mobile-menu_strip');
        let stripOne = mnStrip[0];
        let stripTwo = mnStrip[1];
        let stripThree = mnStrip[2];
        if(mblMenu.classList.contains('open')) {
            stripOne.classList.remove('left');
            stripTwo.classList.remove('right');
            stripThree.style.display = "block";
            mblMenu.classList.remove('open');
            return;
        }
        stripOne.classList.add('left');
        stripTwo.classList.add('right');
        stripThree.style.display = "none";
        mblMenu.classList.add('open');
    });

    // masih belum bisa untuk "mobile res-support"    
    // Untuk mengukur ketinggian sidebar-menu
    window.addEventListener('resize', sideMenuResize);
    function sideMenuResize () {
        let heightArr = ['.sidebar-logo','.sidebar-profile','.sidebar-logout', '.sidebar-footer'];
        let sideMenu = document.querySelector('.sidebar-menu');

        let heightSize = 0;
        heightArr.forEach((e) => {
            let height = heightLookers(e);
            heightSize += height;
        });

        function heightLookers(x) {
            let height = document.querySelector(x).clientHeight;
            return height;
        };

        sideMenu.style.height = "calc(100% - " + heightSize + "px)";
    };
    (sideMenuResize)();