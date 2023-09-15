import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebarEn: SidebarConfig = {
    '/en/': [],
    '/en/otherPage/': [
        {
            text: 'Reference',
            collapsible: true,
            children: ['/en/otherPage/a.md','/en/otherPage/b.md'],
        },
    ],
    '/en/docs/node/': [
        {
            text: 'node notes',
            children: [
                '/en/docs/node/1.http模块.md',
                '/en/docs/node/2.模块化.md',
                '/en/docs/node/3.npm与包.md',
                '/en/docs/node/4.模块的加载机制.md',
                '/en/docs/node/5.Express.md',
                '/en/docs/node/6.编写接口.md'
            ],
        },
    ],
    '/en/docs/RXJS/': [
        {
            text: 'RXJS',
            children: [
                '/en/docs/RXJS/1.RxJS概述.md',
                '/en/docs/RXJS/2.RxJS安装说明.md'
            ],
        },
    ],
    '/en/docs/gulp/': [
        {
            text: 'gulp学习',
            // collapsible: true,
            children: [
                '/en/docs/gulp/什么是gulp.md',
                '/en/docs/gulp/创建任务task.md',
                '/en/docs/gulp/处理文件.md',
                '/en/docs/gulp/异步执行.md'
            ],
        },
    ],
}