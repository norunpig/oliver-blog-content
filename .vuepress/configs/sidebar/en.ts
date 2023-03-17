import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebarEn: SidebarConfig = {
    '/': [],
    '/otherPage/': [
        {
            text: 'Reference',
            collapsible: true,
            children: ['/otherPage/a.md','/otherPage/b.md'],
        },
    ],
    '/docs/node/': [
        {
            text: 'node notes',
            collapsible: true,
            children: [
                '/docs/node/1.http模块.md',
                '/docs/node/2.模块化.md',
                '/docs/node/3.npm与包.md',
                '/docs/node/4.模块的加载机制.md',
                '/docs/node/5.Express.md',
                '/docs/node/6.编写接口.md'
            ],
        },
    ],
}