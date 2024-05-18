$(function () {
    var form = layui.form

    form.verify({
        pwd: [/^[\S]{6,12}$/, '密码必须6到12位, 且不能出现空格'],
        samepwd: function (value) {
            if (value === $('[name=oldPwd]').val()
            ) {
                return '新密码不能和旧密码相同'
            }
        },
        newpwd: function (value) {
            if (value !== $('[name=newPwd]').val()) {
                return '两次输入新密码不同'
            }
        }
    })
})