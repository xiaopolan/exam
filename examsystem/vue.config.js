// vue.config.js
var path = require('path');
var webpack = require('webpack');
var targeturl="http://192.168.3.71:8089"
var npmScriptsName = process.env.npm_lifecycle_event;

module.exports = {
	publicPath: process.env.NODE_ENV === 'production'
	   ? './'
	   : '/',
	devServer: {
		host:'0.0.0.0',
		port: 8080, // 端口号
		// open: true, //配置自动启动浏览器
		// 配置跨域处理
		proxy: {
			'/api': {
				target: targeturl, // 接口的真正域名及端口
				secure: false, // 如果是https接口，需要配置这个参数为true
				changeOrigin: true, // 如果接口跨域，需要进行这个参数配置为true
				// 路径重写
				pathRewrite: {
					// '/api': '/yh/ihr/api',  // 重写请求，比如我们源访问的包含/api，那么请求会将/api替换为/yh/ihr/api
					'^/api': ''
				}
			}
		},
	},
}