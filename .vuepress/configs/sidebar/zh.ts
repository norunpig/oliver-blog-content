import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebarZh: SidebarConfig = {
    '/zh/': [],
    '/zh/otherPage/': [
        {
            text: 'Reference',
            collapsible: true,
            children: [
                '/zh/otherPage/a.md',
                '/zh/otherPage/b.md'
            ],
        },
    ],
    '/zh/docs/node/': [
        {
            text: 'node笔记',
            collapsible: true,
            children: [
                '/zh/docs/node/1.http模块.md',
                '/zh/docs/node/2.模块化.md',
                '/zh/docs/node/3.npm与包.md',
                '/zh/docs/node/4.模块的加载机制.md',
                '/zh/docs/node/5.Express.md',
                '/zh/docs/node/6.编写接口.md'
            ],
        },
    ],
}