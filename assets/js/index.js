$(function () {
    //调用getUserInfo获取用户基本信息
    // getUserInfo()
    var layer = layui.layer
    // 退出按钮
    $('#btnLogout').on('click', function () {
        // 提示用户是否确认退出
        layer.confirm('确定退出登录?', { icon: 3, title: '提示' }, function (index) {

            // 清空本地存储中的token
            // 重新跳转到登录界面
            localStorage.removeItem('token')
            location.href = '/login.html'
            // 关闭询问框
            layer.close(index);
        });

    })
})
// 获取用户的基本信息
// function getUserInfo() {
//     $ajax({
//         method: 'GET',
//         uel: 'http://ajax-api.itheima.net/api/settings',
//         // 请求头配置对象
//         headers: {},
//         success: function (res) {
//             if (res.status !== 0) {
//                 return layui.layer.msg('获取信息失败！')
//             }
//             renderAvatar(res.data)
//         }
//     })
// }
// // 渲染用户头像
// function renderAvatar(user) {
//     // 1.获取用户的名称
//     var name = user.nickname || user.username
//     //2.设置欢迎的文本
//     $('#welcome').html('欢迎&nbsp;&nbsp;' + name)
//     // 3.按需渲染用户的头像
//     if (user.user_pid !== null) {
//         // 3.1渲染图片头像
//         $('.layui-nav-img').attr('src', user.user_pid).show()
//         $('.text-avatar').hide()
//     } else {
//         //3.2渲染文本头像
//         $('.layui-nav-img').hide()
//         var first = name[0].toUpperCase()
//         $('.text-avatar').html(first).show()
//     }

// }