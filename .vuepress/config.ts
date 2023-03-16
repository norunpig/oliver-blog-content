import { defineUserConfig } from 'vuepress'
import { defaultTheme } from 'vuepress'

export default {
  lang: 'zh-CN',
  base: '/blog/',
  title: 'Oliver ',//博客空间
  description: 'Oliver',// 博客空间
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'en-US',
      title: 'Oliver',
      description: 'Oliver',
    },
    '/zh/': {
      lang: '中文',
      title: 'Oliver',
      description: 'Oliver',
    },
  },
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
          {
            text: 'b站资源',
            link: '/otherPage/b.md'
          },
          {
            text: 'csdn资源',
            link: '/otherPage/a.md'
          }
        ]
      }
    ],
    repo: 'https://github.com/norunpig/oliver-blog-content',
    selectLanguageText: 'EN/中'
  }),
}