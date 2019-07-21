import Works from './worksModel.js';

export default {
    data: {
        
        main: {
            link: ['menu_main'],
            contents: null,
            section: 'main',
            bodyStatus: 'main_menu'
        },

        about: {
            link: ['menu_about'],
            contents: null,
            section: 'about',
            bodyStatus: 'about'
        },

        worksList: {
            link: [
                'menu_works_list_1',
                'menu_works_list_2',
                'menu_works_list_3'
            ],
            contents: [
                {
                    title: 'Visual Dev.',
                    list: Works.visualDev
                },
                {
                    title: 'Illustration',
                    list: Works.illustration
                },
                {
                    title: 'Storytelling',
                    list: Works.storytelling
                }
            ],
            section: 'works_list',
            bodyStatus: 'status_works'
        },

        worksView: {
            link: null,
            contents: null,
            section: 'works_view',
            bodyStatus: 'works_view'
        }
    },

    list() {
        return Promise.resolve(
            this.data
        );
    }
}