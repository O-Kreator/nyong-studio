/*
* SPA
*/

const menu = {
    main: {
        link: document.getElementById('menu_main'),
        contents: document.getElementById('main'),
        bodyStatus: "status_main_menu"
    },
    about: {
        link: document.getElementById('menu_about'),
        contents: document.getElementById('about'),
        bodyStatus: "status_about"
    }
}

let currentMenu = menu.main;

const menuChange = function(target) {
    if (target === currentMenu) { return; }

    currentMenu.contents.classList.add('opacity0');
    setTimeout( function() {
        currentMenu.contents.classList.add('displaynone');
        target.contents.classList.remove('displaynone');
    }, 200);
    setTimeout( function() {
        target.contents.classList.remove('opacity0');
    }, 300);

    document.body.classList.remove(currentMenu.bodyStatus);
    document.body.classList.add(target.bodyStatus);

    setTimeout( function() { currentMenu = target; }, 200);
}

menu.main.link.addEventListener('click', function() { menuChange(menu.main); });
menu.about.link.addEventListener('click', function() { menuChange(menu.about); });