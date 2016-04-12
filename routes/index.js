var express = require('express');
var router = express.Router();

var loginCtrl = require('../controller/login.js')

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', {
		title: 'Express'
	});
});

router.route('/sigup')
	.get(function(req, res, next) {
		res.send('注册')
	})

router.route('/login')
	.get(function(req, res, next) {
		res.send('登陆')
	})
	.post(function(req, res, next) {
		var id = req.body.id;
		var pwd = req.body.password;
		
		loginCtrl.check(id, pwd, function(resultMsg) {
			res.render('login_result', resultMsg)
		})
	})

router.get('/users', function(req, res, next) {
	res.send('用户管理')
})

router.get('/article', function(req, res, next) {
	res.render('article', {
		titile: '文章列表'
	})
})

router.get('/article/:id', function(req, res, next) {
	res.send('文章页面－文章id: ' + req.params.id)
})



module.exports = router;