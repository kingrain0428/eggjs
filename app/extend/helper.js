/*
 * @Author: your name
 * @Date: 2020-09-21 16:07:10
 * @LastEditTime: 2020-09-21 16:28:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /eggjs/app/extend/helper.js
 */
const moment = require('moment');

exports.relativeTime = time => moment(new Date(time)).fromNow();