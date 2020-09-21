/*
 * @Author: your name
 * @Date: 2020-09-21 11:01:49
 * @LastEditTime: 2020-09-21 15:52:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /eggjs/app/router.js
 */
module.exports = app => {
    const { router, controller } = app;
    router.get('/', controller.home.index);
    router.get('/news', controller.news.list);
}