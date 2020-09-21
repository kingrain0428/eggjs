/*
 * @Author: your name
 * @Date: 2020-09-21 16:29:57
 * @LastEditTime: 2020-09-21 16:38:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /eggjs/app/middleware/robot.js
 */
// app/middleware/robot.js
// options === app.config.robot
module.exports = (options, app) => {
    return async function robotMiddleware(ctx, next) {
        console.log('middleware', ctx)
      const source = ctx.get('user-agent') || '';
      const match = options.ua.some(ua => ua.test(source));
      if (match) {
        ctx.status = 403;
        ctx.message = 'Go away, robot.';
      } else {
        await next();
      }
    }
  };
  
  // config/config.default.js
  // add middleware robot
  exports.middleware = [
    'robot'
  ];
  // robot's configurations
  exports.robot = {
    ua: [
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36',
    ]
  };