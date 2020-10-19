/* eslint valid-jsdoc: "off" */

"use strict";

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "_1603079127620_2460";

  // add your middleware config here
  config.middleware = [];

  config.view = {
    mapping: {
      ".html": "nunjucks"
    }
  };

  config.assets = {
    publicPath: "/public/",
    devServer: {
      debug: true,
      command: "umi dev",
      port: 8000,
      env: {
        APP_ROOT: process.cwd() + "/app/web",
        BROWSER: "none",
        ESLINT: "none",
        SOCKET_SERVER: "http://127.0.0.1:8000",
        PUBLIC_PATH: "http://127.0.0.1:8000"
      }
    }
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  config.security = {
    csrf: false
  };

  return {
    ...config,
    ...userConfig
  };
};
