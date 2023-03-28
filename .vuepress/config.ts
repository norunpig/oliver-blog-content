import { defineUserConfig } from 'vuepress'
import { defaultTheme } from 'vuepress'
import { navbarEn, navbarZh, sidebarEn, sidebarZh } from './configs/index.js'
console.log(sidebarEn,sidebarZh)
export default {
	lang: 'zh-CN',
	base: '/blog/',
	title: 'Oliver ',//博客空间
	description: 'Oliver',// 博客空间
	locales: {
		// 键名是该语言所属的子路径
		// 作为特例，默认语言可以使用 '/' 作为其路径。
		'/en/': {
			lang: 'en-US',
			title: 'Oliver',
			description: 'Oliver',
		},
		'/': {
			lang: 'zh-CN',
			title: 'Oliver',
			description: 'Oliver',
		},
	},
	theme: defaultTheme({
		logo: '/images/logo.png',
		repo: 'https://github.com/norunpig/oliver-blog-content',
		docsDir: 'oliver-blog-content',//
		contributors: false,
		// theme-level locales config
		locales: {
			/**
			 * English locale config
			 *
			 * As the default locale of @vuepress/theme-default is English,
			 * we don't need to set all of the locale fields
			 */
			'/en/': {
				// navbar
				navbar: navbarEn,
				// sidebar
				sidebar: sidebarEn,
				// page meta
				editLinkText: 'Edit this page on GitHub',
			},

			/**
			 * Chinese locale config
			 */
			'/': {
				// navbar
				navbar: navbarZh,
				selectLanguageName: '简体中文',
				selectLanguageText: '选择语言',
				selectLanguageAriaLabel: '选择语言',
				// sidebar
				sidebar: sidebarZh,
				// page meta
				editLinkText: '在 GitHub 上编辑此页',
				lastUpdatedText: '上次更新',
				// custom containers
				tip: '提示',
				warning: '注意',
				danger: '警告',
				// 404 page
				notFound: [
					'这里什么都没有',
					'我们怎么到这来了？',
					'这是一个 404 页面',
					'看起来我们进入了错误的链接',
				],
				backToHome: '返回首页',
				// a11y
				openInNewWindow: '在新窗口打开',
				toggleColorMode: '切换颜色模式',
				toggleSidebar: '切换侧边栏',
			},
		},
	}),
}