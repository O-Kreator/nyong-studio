/*
* Works Data
*/

const works = {
    visualDev: [
        {
            position: "left",
            thumbnail: {
                image: "https://placehold.it/800x800",
                type: "square" 
            }
        },
        {
            position: "left",
            thumbnail: {
                image: "https://placehold.it/800x800",
                type: "rectangle_hor" 
            }
        },
        {
            position: "right",
            thumbnail: {
                image: "https://placehold.it/800x800",
                type: "rectangle_hor" 
            }
        },
        {
            position: "right",
            thumbnail: {
                image: "https://placehold.it/800x800",
                type: "rectangle_ver" 
            }
        }
    ],
    illustration: [],
    storytelling: []
}


/*
* Menu Data
*/

const menu = {
    main: {
        link: document.getElementById('menu_main'),
        section: document.getElementById('main'),
        bodyStatus: "status_main_menu",
        contents: null
    },
    about: {
        link: document.getElementById('menu_about'),
        section: document.getElementById('about'),
        bodyStatus: "status_about",
        contents: null
    },
    worksList: {
        link: [
            document.getElementById('menu_works_list_1'),
            document.getElementById('menu_works_list_2'),
            document.getElementById('menu_works_list_3')
        ],
        section: document.getElementById('works_list'),
        contents: [
            {
                title: "Visual Dev.",
                list: works.visualDev
            },
            {
                title: "Illustration",
                list: works.illustration
            },
            {
                title: "Storytelling",
                list: works.storytelling
            }
        ],
        bodyStatus: "status_works"
    }
}



/*
* SPA
*/

let currentMenu = menu.main;

const menuChange = function(target) {
    if (target === currentMenu) { return; }

    currentMenu.section.classList.add('opacity0');
    setTimeout( function() {
        currentMenu.section.classList.add('displaynone');
        target.section.classList.remove('displaynone');
    }, 200);
    setTimeout( function() {
        target.section.classList.remove('opacity0');
    }, 300);

    document.body.classList.remove(currentMenu.bodyStatus);
    document.body.classList.add(target.bodyStatus);

    setTimeout( function() { currentMenu = target; }, 200);
}


const worksListHeadline = document.querySelector("#works_list .works_headline h2");
const worksListButtonBack = document.querySelector("#works_list a.button_back");

const worksListLeft = document.querySelector("#works_list section:first-of-type article");
const worksListRight = document.querySelector("#works_list section:last-of-type article");

const worksListContentsAdd = function(worksListTarget, contents) {
    for (let i = 0; i < contents.length; i++) {
        let worksListItem = document.createElement("a");
        let worksListItemThumbnail = document.createElement("img");

        worksListItem.setAttribute('class', contents[i].thumbnail.type);
        worksListItem.setAttribute('href', '#');
        worksListItemThumbnail.setAttribute('src', contents[i].thumbnail.image);
        
        worksListItem.appendChild(worksListItemThumbnail);

        worksListTarget.appendChild(worksListItem);
    }
}

const contentsChange = function(target, contents) {
    if ( target === "worksList" ) {
        worksListHeadline.innerHTML = contents.title;

        let worksListLeftOnly = contents.list.filter( function( item ) { return item.position === "left"; } );
        let worksListRightOnly = contents.list.filter( function( item ) { return item.position === "right"; } );

        worksListLeft.innerHTML = "";
        worksListRight.innerHTML = "";

        worksListContentsAdd(worksListLeft, worksListLeftOnly);
        worksListContentsAdd(worksListRight, worksListRightOnly);
    } else if ( target === "worksView" ) {
        return 0;
    } else {
        console.error("Error! param of contentsChange: target '" + target + "' is not the right type.");
    }
}


menu.main.link.addEventListener('click', function() { menuChange(menu.main); });
menu.about.link.addEventListener('click', function() { menuChange(menu.about); });

worksListButtonBack.addEventListener('click', function() { menuChange(menu.main); });

menu.worksList.link[0].addEventListener('click', function() { menuChange(menu.worksList); contentsChange("worksList", menu.worksList.contents[0]); });
menu.worksList.link[1].addEventListener('click', function() { menuChange(menu.worksList); contentsChange("worksList", menu.worksList.contents[1]); });
menu.worksList.link[2].addEventListener('click', function() { menuChange(menu.worksList); contentsChange("worksList", menu.worksList.contents[2]); });