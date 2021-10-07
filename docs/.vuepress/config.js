module.exports = {
  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],
  //base: "/mylxpantos-admin-docs/",

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    displayAllHeaders: true,
    sidebar: 'auto',
    locales: {
      '/': {
        nav: [
          {
            text: '관리자',
            link: '/admin/'
          },
          {
            text: '사용자',
            link: '/user/',
          },
          {
            text: 'Go to Admin site',
            link: 'https://pantos-admin-pp.kontainers.net/'
          },
          {
            text: 'Go to Customer site',
            link: 'https://pantos-pp.kclient.io/'
          }
        ],
      },
      '/en/': {
        nav: [
          {
            text: 'Admin',
            link: '/en/admin/'
          },
          {
            text: 'Customer',
            link: '/en/user/',
          },
          {
            text: 'Go to Admin site',
            link: 'https://pantos-admin-pp.kontainers.net/'
          },
          {
            text: 'Go to Customer site',
            link: 'https://pantos-pp.kclient.io/'
          }
        ],
        
      }
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ],

  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    '/': {
      lang: 'ko-KR', // this will be set as the lang attribute on <html>
      title: 'LX 판토스 포워딩 플랫폼 가이드',
      description: '사용자와 관리자를 위한 플랫폼 활용 및 연계 방법 가이드',
      
    },
    '/en/': {
      lang: 'en-US',
      title: 'LX Pantos FF Platform User Guide',
      description: 'Platform user and admin guide to use and operate',
    }
  }
}
