/*
 * @Author: your name
 * @Date: 2020-09-21 10:59:39
 * @LastEditTime: 2020-09-21 11:01:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /eggjs/app/controller/home.js
 */
const Controller = require('egg').Controller;

class HomeController extends Controller{
    async index() {
        this.ctx.body = 'hello egg';
    }
}

module.exports = HomeController;