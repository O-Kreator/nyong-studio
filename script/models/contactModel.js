import mail from './../../img/icon_mail.svg'
import twitter from './../../img/icon_twitter.svg'
import discord from './../../img/icon_discord.svg'
import youtube from './../../img/icon_youtube.svg'
import instagram from './../../img/icon_instagram.svg'
import devian from './../../img/icon_devian.svg'


export default {

    data: {
        mail: {
            icon: mail,
            class: 'mail',
            value: 'doro' + 'nyong' + '94' + '\u0040' + 'gmail' + '.com',
            href: 'mailto' + ':doro' + 'nyong' + '94' + '\u0040' + 'gmail' + '.com',
            isShownInIndex: false
        },
        twitter: {
            icon: twitter,
            class: 'twitter',
            value: '@doro_nyong_art',
            href: 'https://twitter.com/doro_nyong_art',
            isShownInIndex: true
        },
        discord: {
            icon: discord,
            class: 'discord',
            value: 'Doro-nyong#4031',
            isShownInIndex: false
        },
        youtube: {
            icon: youtube,
            class: 'youtube',
            value: 'youtube here',
            isShownInIndex: true
        },
        instagram: {
            icon: instagram,
            class: 'instagram',
            value: 'instagram here',
            isShownInIndex: true
        },
        devian: {
            icon: devian,
            class: 'devian',
            value: 'devian here',
            isShownInIndex: true
        }
    }

}
