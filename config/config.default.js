/*
 * @Author: your name
 * @Date: 2020-09-21 11:03:44
 * @LastEditTime: 2020-09-21 16:17:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /eggjs/config/config.default.js
 */

//此处改为你自己的 Cookie 安全字符串
exports.keys = '1234567890-';

exports.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
        '.tpl': 'nunjucks'
    }
}

exports.news = {
    pageSize: 5,
    serverUrl: 'https://hacker-news.firebaseio.com/v0',
};