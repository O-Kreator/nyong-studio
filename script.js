/*
* Works Data
*/

const works = {
    visualDev: [
        {
            position: 'left',
            thumbnail: {
                image: 'https://placehold.it/800x800',
                type: 'square' 
            },
            view: {
                title: '“Give me<br>some sweets<br>or I\'ll trick ya!<br>Gao-!”',
                date: '2019-07-17',
                description: '‘박쥐 인간 복장을 입은<br>여우 동물 어린이 캐릭터’로,<br>화려한 색과 빛을<br>표현하고자 하였습니다.',
                image: 'https://placehold.it/2400x1800'
            }
        },
        {
            position: 'left',
            thumbnail: {
                image: 'https://placehold.it/800x800',
                type: 'rectangle_hor' 
            },
            view: {
                title: 'Test',
                date: '2019-07-17',
                description: '이 설명은 테스트 설명입니다.',
                image: 'https://placehold.it/800x1200'
            }
        },
        {
            position: 'right',
            thumbnail: {
                image: 'https://placehold.it/800x800',
                type: 'rectangle_hor' 
            },
            view: {
                title: 'Test',
                date: '2019-07-17',
                description: '이 설명은 테스트 설명입니다.',
                image: 'https://placehold.it/800x1200'
            }
        },
        {
            position: 'right',
            thumbnail: {
                image: 'https://placehold.it/800x800',
                type: 'rectangle_ver' 
            },
            view: {
                title: 'Test',
                date: '2019-07-17',
                description: '이 설명은 테스트 설명입니다.',
                image: 'https://placehold.it/800x1200'
            }
        }
    ],
    illustration:  [
        {
            position: 'left',
            thumbnail: {
                image: 'https://placehold.it/800x800',
                type: 'square' 
            },
            view: {
                title: '“Give me<br>some sweets<br>or I\'ll trick ya!<br>Gao-!”',
                date: '2019-07-17',
                description: '‘박쥐 인간 복장을 입은<br>여우 동물 어린이 캐릭터’로,<br>화려한 색과 빛을<br>표현하고자 하였습니다.',
                image: 'https://placehold.it/800x2400'
            }
        },
        {
            position: 'left',
            thumbnail: {
                image: 'https://placehold.it/800x800',
                type: 'rectangle_hor' 
            },
            view: {
                title: 'Test',
                date: '2019-07-17',
                description: '이 설명은 테스트 설명입니다.',
                image: 'https://placehold.it/800x1200'
            }
        },
        {
            position: 'right',
            thumbnail: {
                image: 'https://placehold.it/800x800',
                type: 'rectangle_hor' 
            },
            view: {
                title: 'Test',
                date: '2019-07-17',
                description: '이 설명은 테스트 설명입니다.',
                image: 'https://placehold.it/800x1200'
            }
        },
        {
            position: 'right',
            thumbnail: {
                image: 'https://placehold.it/800x800',
                type: 'rectangle_ver' 
            },
            view: {
                title: 'Test',
                date: '2019-07-17',
                description: '이 설명은 테스트 설명입니다.',
                image: 'https://placehold.it/800x1200'
            }
        }
    ],
    storytelling: [
        {
            thumbnail: {
                image: 'https://placehold.it/800x800',
            },
            view: {
                title: 'Test',
                date: '2019-07-17',
                description: '이 설명은 테스트 설명입니다.',
                image: 'https://placehold.it/800x1200'
            }
        },
        {
            thumbnail: {
                image: 'https://placehold.it/800x800',
            },
            view: {
                title: 'Test',
                date: '2019-07-17',
                description: '이 설명은 테스트 설명입니다.',
                image: 'https://placehold.it/800x1200'
            }
        }
    ]
}


/*
* Menu Data
*/

const menu = {
    main: {
        link: document.getElementById('menu_main'),
        section: document.getElementById('main'),
        bodyStatus: 'status_main_menu',
        contents: null
    },
    about: {
        link: document.getElementById('menu_about'),
        section: document.getElementById('about'),
        bodyStatus: 'status_about',
        contents: null
    },
    worksList: {
        link: [
            document.getElementById('menu_works_list_1'),
            document.getElementById('menu_works_list_2')
        ],
        section: document.getElementById('works_list'),
        contents: [
            {
                title: 'Visual Dev.',
                list: works.visualDev
            },
            {
                title: 'Illustration',
                list: works.illustration
            }
        ],
        bodyStatus: 'status_works'
    },
    worksListWide: {
        link: document.getElementById('menu_works_list_3'),
        section: document.getElementById('works_list_wide'),
        contents: [
            {
                title: 'Storytelling',
                list: works.storytelling
            }
        ],
        bodyStatus: 'status_works'
    },
    worksView: {
        link: null,
        section: document.getElementById('works_view'),
        bodyStatus: 'status_works_view',
        contents: null
    }
}



/*
* Contact Data, and applying.
*/

const contact = {
    mail: {
        a: document.getElementsByClassName('link_mail'),
        value: 'doro' + 'nyong' + '94' + '\u0040' + 'gmail' + '.com',
        href: 'mailto' + ':doro' + 'nyong' + '94' + '\u0040' + 'gmail' + '.com'
    },
    twitter: {
        a: document.getElementsByClassName('link_twitter'),
        value: '@doro_nyong_art',
        href: 'https://twitter.com/doro_nyong_art'
    },
    discord: {
        a: document.getElementsByClassName('link_discord'),
        value: 'Doro-nyong#4031',
        href: null
    },
    youtube: {
        a: document.getElementsByClassName('link_youtube'),
        value: 'youtube here',
        href: null
    },
    instagram: {
        a: document.getElementsByClassName('link_instagram'),
        value: 'instagram here',
        href: null
    },
    devian: {
        a: document.getElementsByClassName('link_devian'),
        value: 'devian here',
        href: null
    }
}

const contactList = Object.keys(contact);

for( let i = 0; i < contactList.length; i++ ) {
    let anchor = contact[contactList[i]].a;
    let value = contact[contactList[i]].value;
    let href = contact[contactList[i]].href;

    anchor[anchor.length - 1].innerHTML = value;

    if( href !== null ) {
        for( let j = 0; j < anchor.length; j++ ) {
            anchor[j].setAttribute('href', href);
        }
    } else {
        for( let j = 0; j < anchor.length; j++ ) {
            anchor[j].removeAttribute('href');
        }
    }
}



/*
* SPA
*/

let currentMenu = menu.main;
let previousMenu;
let previousWorksList;
let previousWorksListTarget;

const worksListHeadline = document.querySelector('#works_list .works_headline h2');
const worksListButtonBack = document.querySelector('#works_list a.button_back');
const worksListLeft = document.querySelector('#works_list article:first-of-type');
const worksListRight = document.querySelector('#works_list article:last-of-type');

const worksListWideHeadline = document.querySelector('#works_list_wide .works_headline h2');
const worksListWideButtonBack = document.querySelector('#works_list_wide a.button_back');
const worksListWideTarget = document.querySelector('#works_list_wide article');

const worksViewButtonBack = document.querySelector('#works_view a.button_back');
const worksViewTitle = document.querySelector('#works_description h2');
const worksViewDate = document.querySelector('#works_description time');
const worksViewDescription = document.querySelector('#works_description article');
const worksViewImage = document.querySelector('#works_image');

let removeListenerList = [];

const workListRemoveEventListener = function() {
    removeListenerList.forEach(function(item) { item(); });
    this.removeEventListener('click', workListRemoveEventListener);
    removeListenerList = [];
}



const worksListContentsAdd = function(worksListTarget, contents) {
    const worksListItemEventListener = function(i) {
        return function() {
            menuChange(menu.worksView);
            contentsChange('worksView', contents[i]);
        }
    }

    for (let i = 0; i < contents.length; i++) {
        let worksListItem = document.createElement('a');
        let worksListItemThumbnail = document.createElement('img');
        
        worksListTarget.appendChild(worksListItem);
        worksListItem.appendChild(worksListItemThumbnail);
        
        worksListItem.setAttribute('class', contents[i].thumbnail.type);
        worksListItem.setAttribute('href', '#');
        worksListItemThumbnail.setAttribute('src', contents[i].thumbnail.image);
        
        let eventListener = worksListItemEventListener(i);
        worksListItem.addEventListener('click', eventListener);
        removeListenerList.push(function() { worksListItem.removeEventListener('click', eventListener); });
    }
}

const worksListWideContentsAdd = function(contents) {
    const worksListWideItemEventListener = function (i) {
        return function() {
            menuChange(menu.worksView);
            contentsChange('worksView', contents[i]);
        }
    }

    for (let i = 0; i < contents.length; i++) {
        let worksListWideItem = document.createElement('a');
        let worksListWideItemThumbnail = document.createElement('img');

        worksListWideTarget.appendChild(worksListWideItem);
        worksListWideItem.appendChild(worksListWideItemThumbnail);

        worksListWideItem.setAttribute('href', '#');
        worksListWideItemThumbnail.setAttribute('src', contents[i].thumbnail.image);

        let eventListener = worksListWideItemEventListener(i);
        worksListWideItem.addEventListener('click', eventListener);
        removeListenerList.push(function() { worksListWideItem.removeEventListener('click', eventListener); });
    }
}

const contentsChange = function(target, contents) {
    if ( target === 'worksList' ) {
        worksListHeadline.innerHTML = contents.title;

        let worksListLeftOnly = contents.list.filter( function( item ) { return item.position === 'left'; } );
        let worksListRightOnly = contents.list.filter( function( item ) { return item.position === 'right'; } );

        worksListLeft.innerHTML = '';
        worksListRight.innerHTML = '';

        worksListContentsAdd(worksListLeft, worksListLeftOnly);
        worksListContentsAdd(worksListRight, worksListRightOnly);

        previousMenu = contents;
        previousWorksList = menu.worksList;
        previousWorksListTarget = target;

    } else if ( target === 'worksListWide' ) {
        worksListWideHeadline.innerHTML = contents.title;

        worksListWideTarget.innerHTML = '';

        worksListWideContentsAdd(contents.list);

        previousMenu = contents;
        previousWorksList = menu.worksListWide;
        previousWorksListTarget = target;

    } else if ( target === 'worksView' ) {
        worksViewTitle.innerHTML = contents.view.title;
        worksViewDate.innerHTML = contents.view.date;
        worksViewDescription.innerHTML = contents.view.description;

        worksViewImage.setAttribute('src', contents.view.image);

    } else {
        console.error("Error! param of contentsChange: target '" + target + "' is not the right type.");

    }
}

const menuChange = function(target) {
    if (target === currentMenu) { return; }

    workListRemoveEventListener();

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


menu.main.link.addEventListener('click', function() { menuChange(menu.main); });
menu.about.link.addEventListener('click', function() { menuChange(menu.about); });

worksListButtonBack.addEventListener('click', function() { menuChange(menu.main); });
worksListWideButtonBack.addEventListener('click', function() { menuChange(menu.main); });

worksViewButtonBack.addEventListener('click', function() {
    menuChange(previousWorksList);
    contentsChange(previousWorksListTarget, previousMenu);
});

menu.worksList.link.forEach(function(item, index) {
    item.addEventListener('click', function() {menuChange(menu.worksList);
        contentsChange('worksList', menu.worksList.contents[index]);
    });
});
menu.worksListWide.link.addEventListener('click', function() {
    menuChange(menu.worksListWide);
    contentsChange('worksListWide', menu.worksListWide.contents[0]
    );
});
