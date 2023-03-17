import type { NavbarConfig } from '@vuepress/theme-default'

export const navbarZh: NavbarConfig = [
    {
        text: '个人主页',
        link: 'https://norunpig.github.io/',
    },
    {
        text: '博客',
        link: '/zh/',
    },
    {
        text: '学习笔记',
        children: [
            {
                text: 'node笔记',
                link: '/zh/docs/node/1.http模块.md'
            },
            {
                text: 'RXJS',
                link: '/zh/docs/RXJS/b.md'
            }
        ],
    },
    {
        text: '资源',
        children: [
            {
                text: 'b站资源',
                link: '/zh/otherPage/a.md'
            },
            {
                text: 'csdn资源',
                link: '/zh/otherPage/b.md'
            }
        ]
    }
]