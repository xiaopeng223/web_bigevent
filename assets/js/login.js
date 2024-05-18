$(function () {
    //点击”去注册账号“的链接
    $('#link_reg').on('click', function () {
        $('.login-box').hide();
        $('.reg-box').show();
    })

    //点击”去登录“的链接
    $('#link_login').on('click', function () {
        $('.login-box').show();
        $('.reg-box').hide();
    })
    //从layui 中获取 form 对象
    var form = layui.form
    // 通过form.verify()函数自定义校验规则
    var layer = layui.layer
    form.verify({
        // 自定义了一个叫pwd的校验规则
        pwd: [/^[\S]{6,12}$/, '密码必须6到12位，且不能出现空格'],
        repwd: function (value) {
            //通过形参拿到确定密码中的内容
            //还需要拿到密码框中的内容
            //进行一次判断
            //判断失败，return一个提示消息
            var pwd = $('.reg-box [name=password]').val()
            if (pwd !== value) {
                return '两次密码不一致！'
            }
        }
    })
    //监听注册表单的提交事件
    $('#form_reg').on('submit', function (e) {
        e.preventDefault();
        $.post('http://big-event-api-t.itheima.net/api/reguser', {
            username: $('#form_reg [name=username]').val(),
            password: $('#form_reg [name=password]').val()
        }, function (res) {
            if (res.code !== 0) {
                return layer.msg('注册失败');
            }
            layer.msg('注册成功');
            //模拟人的点击行为
            $('#link_login').click()

        })
    })
})

//监听登录表单的提交事件
// $('#form_login').submit(function (e) {
//     e.preventDefault()
//     $.ajax({
//         url: "http://big-event-api-t.itheima.net/api/login",
//         method: "POST",
//         // 快速获取表单中的数据
//         data: $(this).serialize(),
//         success: function (res) {
//             if (res.status !== 0) {
//                 return layer.msg('登陆失败')
//             }
//             layer.msg('登录成功')
//             // console.log(res.token);

//             // 跳转到主页
//             location.href = '/index.html'
//         }
//     })
// })
$('.layui-btn').on('click', function () {
    location.href = '/index.html'
})