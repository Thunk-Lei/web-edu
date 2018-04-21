/*
 * Filename: d:\node-demo\getbook\docs\index.js
 * Path: d:\node-demo\getbook\docs
 * Created Date: Saturday, April 21st 2018, 3:34:46 am
 * Author: zhaof
 * API
 * Copyright (c) 2018 Your Company
 */

/**
 * 离线模式 Progressive Web Apps
 * @sw.js
 */
if (typeof navigator.serviceWorker !== 'undefined') {
  navigator.serviceWorker.register('sw.js')
}
window.$docsify = {
  name: 'Edu-Web',
  repo: 'Thunk-Lei',
  subMaxLevel: 4,
  maxLevel: 4,
  autoHeader: true,
  // mergeNavbar: true,  //小屏幕合并导航栏到侧边栏
  loadSidebar: 'sidebar.md', // 加载 _sidebar.md
  loadNavbar: 'nav.md',
  alias: {
    '/.*/sidebar.md': '/sidebar.md',
    '/.*/nav.md': '/nav.md'
  },
  search: {
    placeholder: {
      '/': '搜索...'
    },
    noData: {
      '/': '暂时还没有找到你想要的结果喔！'
    }
  } // 默认值
  // coverpage: {
  //   '/': 'start.md'
  // }
}
