import type { NavbarConfig } from '@vuepress/theme-default'

export const navbarEn: NavbarConfig = [
    {
        text: 'Home',
        link: 'https://norunpig.github.io/',
    },
    {
        text: 'blog',
        link: '/',
    },
    {
        text: '√',
        children: [
            {
                text: 'nodes notes',
                link: '/docs/node/1.http模块.md'
            },
            {
                text: 'RXJS',
                link: '/docs/RXJS/1.RxJS概述.md'
            }
        ],
    },
    {
        text: 'resource',
        children: [
            {
                text: 'bilibili',
                link: '/otherPage/a.md'
            },
            {
                text: 'csdn',
                link: '/otherPage/b.md'
            }
        ]
    }
]