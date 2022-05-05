window.onload = function () {
    var regtel = /^1[3|4|5|7|8]\d{9}$/; // 手机号码的正则表达式
    var regnc = /^[\u4e00-\u9fa5]{2,8}$/;//中文昵称，暂时不用
    var regmsg = /^\d{6}$/;
    var regpwd = /^[a-zA-Z0-9_-]{6,16}$/;
    var tel = document.querySelector('#phonenumber');
    var msg = document.querySelector('#dx');
    var pwd = document.querySelector('#pwd');
    var surepwd = document.querySelector('#repwd');
    var check = document.querySelector('#check');
    var btn = document.querySelector('.btn');
    regexp(tel, regtel, '手机号码'); // 手机号码
    // regexp(nc, regnc, '昵称'); // 昵称
    regexp(msg, regmsg, '验证码'); // 短信验证
    regexp(pwd, regpwd, '密码'); // 密码框
    // 表单验证的函数
    var mu = 0;  //用于判断所有输入框是否都正确
    function regexp(ele, reg, str) {
        ele.onblur = function () {
            if (reg.test(this.value)) {
                this.nextElementSibling.className = 'right message';
                this.nextElementSibling.innerHTML = '您输入的格式正确';
                mu = 1;
            } else {
                this.nextElementSibling.className = 'wrong message';
                this.nextElementSibling.innerHTML = str + '格式不正确，请重新输入 ';
                mu = 0;
            }
        }
    };
    surepwd.onblur = function () {
        if (this.value == pwd.value) {
            this.nextElementSibling.className = 'right message';
            this.nextElementSibling.innerHTML = '您输入的格式正确';
            mu = 1;
        } else {
            this.nextElementSibling.className = 'wrong message';
            this.nextElementSibling.innerHTML = '两次密码输入不一致';
            mu = 0;
        }
    }
    var flag = 1;
    check.addEventListener('click', function () {
        if (flag == 1 && mu == 1) {
            btn.style.backgroundColor = 'red';
            flag = 0;
        }
        else if (flag == 0) {
            btn.style.backgroundColor = '';
            flag = 1;
        }
    })
}