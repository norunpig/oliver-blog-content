import { defineUserConfig } from 'vuepress'
import { defaultTheme } from 'vuepress'

export default {
  lang: 'zh-CN',
  base: '/blog/',
  title: 'Oliver ',//博客空间
  description: 'Oliver',// 博客空间
  theme: defaultTheme({
    logo: 'logo.png',
    // 默认主题配置
    navbar: [
      {
        text: '个人主页',
        link: 'https://norunpig.github.io/',
      },
      {
        text: 'blog',
        link: '/',
      },
      {
        text: '资源',
        children: [
          // {
          //   text: 'b站资源',
          //   link: '/otherPage/b.md'
          // },
          // {
          //   text: 'csdn资源',
          //   link: '/otherPage/b.md'
          // }
          '/otherPage/b.md', '/otherPage/a.md'
        ]
      }
    ],
    colorModeSwitch: false,
    repo: 'https://github.com/norunpig/oliver-personal-website.git'
  }),
}