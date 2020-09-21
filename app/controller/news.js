/*
 * @Author: your name
 * @Date: 2020-09-21 11:16:18
 * @LastEditTime: 2020-09-21 16:28:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /eggjs/app/controller/news.js
 */
const Controller = require('egg').Controller;

class NewsController extends Controller{
    async list() {
        const dataList = {
            list: [
                {id: 1,  title: 'this. is news 1', url: '/news/1', time: 1600676462118},
                {id: 2,  title: 'this. is news 2', url: '/news/2', time: 1600676907850},
            ]
        };
        // const page = this.ctx.query.page|| 1;
        // const newsList = await this.ctx.service.news.list(page);
        await this.ctx.render('news/list.tpl', dataList);
    }
}

module.exports = NewsController;