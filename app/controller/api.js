"use strict";

const Controller = require("egg").Controller;

class ApiController extends Controller {
  async index() {
    const ctx = this.ctx;
    console.log("ctx.path is", ctx.path, ctx.querystring);
    ctx.body = { done: true };
    ctx.status = 200;
  }
}

module.exports = ApiController;
