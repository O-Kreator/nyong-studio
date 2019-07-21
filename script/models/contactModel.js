export default {

    data: {
        mail: {
            a: 'mail',
            value: 'doro' + 'nyong' + '94' + '\u0040' + 'gmail' + '.com',
            href: 'mailto' + ':doro' + 'nyong' + '94' + '\u0040' + 'gmail' + '.com'
        },
        twitter: {
            a: 'twitter',
            value: '@doro_nyong_art',
            href: 'https://twitter.com/doro_nyong_art'
        },
        discord: {
            a: 'discord',
            value: 'Doro-nyong#4031'
        },
        youtube: {
            a: 'youtube',
            value: 'youtube here'
        },
        instagram: {
            a: 'instagram',
            value: 'instagram here'
        },
        devian: {
            a: 'devian',
            value: 'devian here'
        }
    },

    list() {
        return Promise.resolve(
            this.data
        );
    }
}