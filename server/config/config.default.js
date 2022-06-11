/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
const path = require("path")
module.exports = appInfo => {
	/**
	 * built-in config
	 * @type {Egg.EggAppConfig}
	 **/
	const config = exports = {};

	// use for cookie sign key, should change to your own and keep security
	config.keys = appInfo.name + '_1654598554963_652';

	// add your middleware config here
	config.middleware = [];

	// add your user config here
	const userConfig = {
		// myAppName: 'egg',
	};
	//这段是让表单提交可以正常,允许post请求
	config.security = {
		csrf: {
			enable: false
		},
	};
	config.cors = {
		origin: "*", //允许所有跨域访问，注释掉则允许上面白名单访问。
		credentials: true, //允许跨域请求携带cookies
		allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
	};
	// 设置secret,注意,secret不能泄露
	config.jwt = {
		secret: "xiaozhoubaogao"
	};
	config.sequelize = {
		dialect: 'mysql',
		database: 'helloworld',
		host: 'localhost',
		port: 3306,
		username: 'root',
		password: 'shenshi728',
		timezone: '+08:00'
	};
	config.view = {
		defaultViewEngine: 'nunjucks'
	};
	config.static = {
		prefix: '/', //访问路径
		dir: path.join(appInfo.baseDir, 'app/public'), //设置静态文件目录
	};

	return {
		...config,
		...userConfig,
	};
};
