export default {
    data: {
        
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

        illustration: [
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
    },

    list() {
        return Promise.resolve(
            this.data
        );
    }
}
