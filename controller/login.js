var userList = require('../model/user.js').list;

function checkAccount(id, pwd) {
	var user = userList[0];

	console.log(user)
	console.log('id:', id)
	console.log('pwd:', pwd)

	if(id !== user.id) {
		return 'nouser';
	}
	else if(pwd !== user.pwd) {
		return 'failpwd';
	}

	return 'success';
}

exports.check = function(id, pwd, callback) {
	var checkResult = checkAccount(id, pwd);

	var siginMsg = {}

	switch (checkResult) {
		case 'nouser':
			siginMsg = {
				rtnCode: '-1',
				rtnMsg: '账号不存在'
			}
			break;
		case 'failpwd':
			siginMsg = {
				rtnCode: '-2',
				rtnMsg: '密码错误'
			}
			break;
		default:
			siginMsg = {
				rtnCode: '1',
				rtnMsg: '登陆成功'
			}
			break;
	}

	callback(siginMsg)
}

