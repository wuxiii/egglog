/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1577700845822_8302';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  config.mongoose = {
    client: {
      url: 'mongodb://127.0.0.1/xblog',
      options: {},
    },
  };

  config.security = {
    csrf: false,
  };

  config.view = {
    // 默认渲染引擎
    defaultViewEngine: 'ejs',
    // 设置选用什么类型的文件用什么模版引擎渲染
    mapping: {
      '.ejs': 'ejs',
    },
  };

  return {
    ...config,
    ...userConfig,
  };
};
