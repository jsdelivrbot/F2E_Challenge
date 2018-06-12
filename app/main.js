import React from 'react';
import { render } from 'react-dom';
import router from '~/core/router';

render(
  router({
    i18nInit: 'zh_tw', //預設語系，預設為 zh_tw
    i18nFallback: 'en', //未翻譯文字的顯示語言，預設為 en
    routerIndex: '/ToDoList', //預設頁面路徑
    routerNotFound: null, //找不到路由時候的導向路徑
    routerMiddleware: null //路由要處理的 middleware
  }),
  document.getElementById('container')
);
