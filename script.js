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
            },
            view: {
                title: "Test",
                date: "2019-07-17",
                description: "이 설명은 테스트 설명입니다.",
                image: "https://placehold.it/800x2400"
            }
        },
        {
            position: "left",
            thumbnail: {
                image: "https://placehold.it/800x800",
                type: "rectangle_hor" 
            },
            view: {
                title: "Test",
                date: "2019-07-17",
                description: "이 설명은 테스트 설명입니다.",
                image: "https://placehold.it/800x1200"
            }
        },
        {
            position: "right",
            thumbnail: {
                image: "https://placehold.it/800x800",
                type: "rectangle_hor" 
            },
            view: {
                title: "Test",
                date: "2019-07-17",
                description: "이 설명은 테스트 설명입니다.",
                image: "https://placehold.it/800x1200"
            }
        },
        {
            position: "right",
            thumbnail: {
                image: "https://placehold.it/800x800",
                type: "rectangle_ver" 
            },
            view: {
                title: "Test",
                date: "2019-07-17",
                description: "이 설명은 테스트 설명입니다.",
                image: "https://placehold.it/800x1200"
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
    },
    worksView: {
        link: null,
        section: document.getElementById('works_view'),
        bodyStatus: "status_works_view",
        contents: null
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

const worksViewButtonBack = document.querySelector("#works_view a.button_back");
const worksViewTitle = document.querySelector("#works_description h2");
const worksViewDate = document.querySelector("#works_description time");
const worksViewDescription = document.querySelector("#works_description article");
const worksViewImage = document.querySelector("#works_image");

const worksListContentsAdd = function(worksListTarget, contents) {
    for (let i = 0; i < contents.length; i++) {
        let worksListItem = document.createElement("a");
        let worksListItemThumbnail = document.createElement("img");

        worksListItem.setAttribute('class', contents[i].thumbnail.type);
        worksListItem.setAttribute('href', '#');
        worksListItemThumbnail.setAttribute('src', contents[i].thumbnail.image);

        worksListItem.appendChild(worksListItemThumbnail);
        worksListItem.addEventListener('click', function() {
            menuChange(menu.worksView);
            contentsChange("worksView", contents[i]);
        });

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
    } else if ( target === "worksListWide" ) {
        return 0;
    } else if ( target === "worksView" ) {
        worksViewTitle.innerHTML = contents.view.title;
        worksViewDate.innerHTML = contents.view.date;
        worksViewDescription.innerHTML = contents.view.description;

        worksViewImage.setAttribute('src', contents.view.image);
    } else {
        console.error("Error! param of contentsChange: target '" + target + "' is not the right type.");
    }
}



menu.main.link.addEventListener('click', function() { menuChange(menu.main); });
menu.about.link.addEventListener('click', function() { menuChange(menu.about); });

worksListButtonBack.addEventListener('click', function() { menuChange(menu.main); });
worksViewButtonBack.addEventListener('click', function() { menuChange(menu.worksList); });

menu.worksList.link[0].addEventListener('click', function() { menuChange(menu.worksList); contentsChange("worksList", menu.worksList.contents[0]); });
menu.worksList.link[1].addEventListener('click', function() { menuChange(menu.worksList); contentsChange("worksList", menu.worksList.contents[1]); });
menu.worksList.link[2].addEventListener('click', function() { menuChange(menu.worksList); contentsChange("worksList", menu.worksList.contents[2]); });