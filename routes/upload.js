var express = require('express');
var router = express.Router();

var path = require('path');
var fs = require('fs');

var multiparty = require('connect-multiparty');
var multipartyMiddleware = multiparty();

var targetDir = path.resolve(__dirname, '../uploadFile')

/* GET users listing. */
router.route('/')
	.get(function(req, res, next) {
		res.render('upload', {
			title: 'upload'
		});
	})
	.post(multipartyMiddleware, function(req, res, next) {
		var file = req.files.file;

		writeFile(file, res)
	})

// 保存文件到本地文件夹
function writeFile(file, res) {
	var originPath = file.path;
	var targetPath = path.join(targetDir, file.originalFilename);

	fs.rename(originPath, targetPath, function(err) {

		if (err) {
			throw err;
		}

		res.send('文件上传成功')
	})
}

// 直接用multer的方案
// var multer = require('multer');

// var uploading = multer({
//   dest: __dirname + '../public/uploads/',
//   // 设定限制，每次最多上传1个文件，文件大小不超过1MB
//   limits: {fileSize: 1000000, files:1},
// })

// router.post('/upload', uploading, function(req, res) {

// })

module.exports = router;