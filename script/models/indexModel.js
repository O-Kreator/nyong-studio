import iconAbout from './../../img/icon_about.svg'

import menuWorks1 from './../../img/image_menu_works1.jpg'
import menuWorks2 from './../../img/image_menu_works2.jpg'
import menuWorks3 from './../../img/image_menu_works3.jpg'

export default {

    data: {
        
        setting: {
            id: 'index',
            isFullscreen: true
        },

        iconAbout: iconAbout,

        catchphrase: `Dreaming<span class="only-over-huge"><br></span>
                      freshly<span class="only-under-huge"><br></span>
                      like a<span class="only-over-huge"><br></span>
                      spring breeze`,
        greeting   : 'Hi! I\'m Doro-nyong.',
        introduce  : `Learning artist<span class="only-over-huge"><br></span><span class="only-under-small"><br></span>
                      specialized in digital illustration`,

        worksMenu  : [
            {
                title    : 'Visual Dev.',
                caption  : 'Concept art<br>Character design<br>and more...',
                anchor   : '#',
                thumbnail: menuWorks1
            },
            {
                title    : 'Illustration',
                caption  : 'Fan arts<br>Commission works<br>and more...',
                anchor   : '#',
                thumbnail: menuWorks2
            },
            {
                title    : 'Storytelling',
                caption  : 'Comic books<br>Music videos<br>and more...',
                anchor   : '#',
                thumbnail: menuWorks3
            }
        ]

    }
}