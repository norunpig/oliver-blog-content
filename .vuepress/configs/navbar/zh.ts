import type { NavbarConfig } from '@vuepress/theme-default'

export const navbarZh: NavbarConfig = [
    {
        text: '个人主页',
        link: 'https://norunpig.github.io/',
    },
    {
        text: '导航页',
        link: '/',
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
                link: '/zh/docs/RXJS/1.RxJS概述.md'
            },
            {
                text: 'gulp',
                link: '/zh/docs/gulp/什么是gulp.md'
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