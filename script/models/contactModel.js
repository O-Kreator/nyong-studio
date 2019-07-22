export default {

    data: {
        mail: {
            a: 'mail',
            value: 'doro' + 'nyong' + '94' + '\u0040' + 'gmail' + '.com',
            href: 'mailto' + ':doro' + 'nyong' + '94' + '\u0040' + 'gmail' + '.com',
            isShownInIndex: false
        },
        twitter: {
            a: 'twitter',
            value: '@doro_nyong_art',
            href: 'https://twitter.com/doro_nyong_art',
            isShownInIndex: true
        },
        discord: {
            a: 'discord',
            value: 'Doro-nyong#4031',
            isShownInIndex: false
        },
        youtube: {
            a: 'youtube',
            value: 'youtube here',
            isShownInIndex: true
        },
        instagram: {
            a: 'instagram',
            value: 'instagram here',
            isShownInIndex: true
        },
        devian: {
            a: 'devian',
            value: 'devian here',
            isShownInIndex: true
        }
    },

    list() {
        return Promise.resolve(
            this.data
        );
    }
}
