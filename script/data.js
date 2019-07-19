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
* Contact Data
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



/*
* DOM
*/

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