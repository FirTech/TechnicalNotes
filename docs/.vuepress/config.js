/*
每次更新码云技术笔记时，都需要在重新部署Gitee Page刷新

常用MarkDown语法：

插入图片: ![图片介绍](./img/图片名)
MarkDown表格编辑：https://tableconvert.com/

Markdown 拓展：

::: tip 提示
这是一个提示
:::

::: warning 注意
这是一个警告
:::

::: danger 危险警告
这是一个危险警告
:::

::: details 点击查看代码
这是一个详情块，在 IE / Edge 中不生效
:::

*/

module.exports = {
  // 设置网站标题
  title: "杉-技术笔记",
  // 设置网页默认语言
  locales: {
    "/": {
      lang: "zh-CN",
      title: "杉-技术笔记",
      description: "记录工作和学习过程中的笔记",
    },
  },
  // 设置输出目录
  dest: "./dist",
  head: [["link", { rel: "icon", href: "/img/LOGO.ico" }]],
  // 设置站点根路径
  base: "/",
  // 添加 github 链接
  //repo: "https://github.com/txs1992/mt-blog"
  theme: "vuepress-theme-yilia-plus",
  plugins: [
    [
      // https://shanyuhai123.github.io/vuepress-plugin-auto-sidebar/
      "vuepress-plugin-auto-sidebar",
      {
        // 标题的深度
        sidebarDepth: 2,
      },
    ],
    // 快速回顶部
    ["@vuepress/back-to-top", true],
    // 放大图片
    ["@vuepress/medium-zoom"],
    // 显示最后更新时间
    ["@vuepress/last-updated"],
    // PWA支持
    [
      "@vuepress/pwa",
      {
        serviceWorker: true,
        updatePopup: true,
      },
    ],
  ],
  // 配置图片，支持图片中文命名
  markdown: {
    extendMarkdown: (md) => {
      md.use(require("markdown-it-disable-url-encode"));
    },
  },
  // 配置路径别名
  configureWebpack: {
    resolve: {
      alias: {
        // 'models': '/technicalnotes/' + 'models',
      },
    },
  },
  themeConfig: {
    // 添加导航栏
    nav: [
      { text: "首页", link: "/" },
      {
        text: "前端",
        ariaLabel: "前端",
        items: [
          {
            text: "Web 开发",
            items: [
              { text: "HTML5", link: "/front-end/HTML5/" },
              { text: "CSS3", link: "/front-end/CSS3/" },
              { text: "JavaScript", link: "/front-end/JavaScript/" },
              { text: "TypeScript", link: "/front-end/TypeScript/" },
            ],
          },
          {
            text: "前端框架",
            items: [
              { text: "Vue2", link: "/front-end/Vue2/" },
              { text: "Vue3", link: "/front-end/Vue3/" },
              { text: "React", link: "/front-end/React/" },
              { text: "Webpack", link: "/front-end/Webpack/" },
              { text: "Vite", link: "/front-end/Vite/" },
            ],
          },
          {
            text: "移动端开发",
            items: [
              { text: "Andorid", link: "/front-end/Andorid/" },
              { text: "Flutter", link: "/front-end/Flutter/" },
              { text: "微信小程序", link: "/front-end/WechatApplet/" },
            ],
          },
          {
            text: "其他",
            items: [
              { text: "Electron", link: "/front-end/Electron/" },
              { text: "数据结构与算法", link: "/front-end/DataInterface/" },
            ],
          },
        ],
      },
      {
        text: "后端",
        ariaLabel: "后端",
        items: [
          {
            text: "Java",
            items: [
              { text: "Java 基础", link: "/back-end/Java/" },
              { text: "JavaWeb", link: "/back-end/Java/JavaWeb/" },
              { text: "Mybatis", link: "/back-end/Java/Mybatis/" },
              { text: "Spring", link: "/back-end/Java/Spring/" },
              { text: "SpringMVC", link: "/back-end/Java/SpringMVC/" },
              { text: "SpringBoot", link: "/back-end/Java/SpringBoot/" },
              { text: "JVM", link: "/back-end/Java/JVM/" },
            ],
          },
          {
            text: "Rust",
            items: [{ text: "Rust", link: "/back-end/Rust/" }],
          },
          {
            text: "Node.js",
            items: [{ text: "Node.js", link: "/back-end/Node.js/" }],
          },
          {
            text: "Python",
            items: [
              { text: "Python 基础", link: "/back-end/Python/" },
              { text: "Flask", link: "/back-end/Python/Flask/" },
            ],
          },
          {
            text: "数据库",
            items: [
              { text: "MySQL", link: "/back-end/DataBase/MySQL/" },
              { text: "Redis", link: "/back-end/DataBase/Redis/" },
            ],
          },
          {
            text: "PHP",
            items: [
              { text: "PHP 基础", link: "/back-end/PHP/" },
              { text: "ThinkPHP", link: "/back-end/PHP/ThinkPHP/" },
            ],
          },
        ],
      },
      {
        text: "其他",
        items: [
          { text: "Linux", link: "/Other/Linux/" },
          { text: "Docker", link: "/Other/Docker/" },
          { text: "Git", link: "/Other/Git/" },
          { text: "WinPE", link: "/Other/WinPE/" },
          { text: "Photoshop", link: "/Other/Photoshop/" },
          { text: "Minecraft", link: "/Other/Minecraft/" },
          { text: "FL Studio", link: "/Other/FL Studio/" },
        ],
      },
      { text: "关于", link: "https://firpe.cn/about" },
      { text: "投食 ", link: "https://firpe.cn/donate" },
    ],
    // 设置嵌套的标题链接深度
    sidebarDepth: 2,
    //设置自动侧边栏
    sidebar: "auto",
    // 为以下路由添加侧边栏
    //sidebar: ["/Docs"],
    //搜索框
    search: true,
    //不显示所有页面的标题链接
    displayAllHeaders: false,
    //开启页面滚动效果
    smoothScroll: true,
    lastUpdated: "最后更新",
    // Algolia 全文搜索
    // algolia: {
    //   apiKey: "<API_KEY>",
    //   indexName: "<INDEX_NAME>",
    // },
    yilia_plus: {
      // github-corner(关闭请设置为false)
      github: {
        url: false,
      },
      footer: {
        // 网站成立年份(若填入年份小于当前年份，则显示为 2018-2019 类似的格式)
        since: 2020,
        // 网站作者(关闭请设置为false)
        //author: "<a href="https://gitee.com/fir834772509" target="_blank">杉</a>",
        author: false,
        // 访问量统计功能
        busuanzi: {
          // 是否启用(关闭请设置为false)
          enable: true,
        },
      },
    },
  },
};
