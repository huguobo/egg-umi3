"use strict";

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // api
  router.all("/api/*", controller.api.index);
  // page
  router.get("/*", controller.page.index);
};
