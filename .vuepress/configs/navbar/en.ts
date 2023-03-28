import type { NavbarConfig } from '@vuepress/theme-default'

export const navbarEn: NavbarConfig = [
    {
        text: 'Home',
        link: 'https://norunpig.github.io/',
    },
    {
        text: 'navigation page',
        link: '/en/',
    },
    {
        text: 'study notes',
        children: [
            {
                text: 'nodes notes',
                link: '/en/docs/node/1.http模块.md'
            },
            {
                text: 'RXJS',
                link: '/en/docs/RXJS/1.RxJS概述.md'
            }
        ],
    },
    {
        text: 'resource',
        children: [
            {
                text: 'bilibili',
                link: '/en/otherPage/a.md'
            },
            {
                text: 'csdn',
                link: '/en/otherPage/b.md'
            }
        ]
    }
]