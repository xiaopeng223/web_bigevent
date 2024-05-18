$(function () {
    var form = layui.form

    form.verify({
        nickname: function (value) {
            if (value.length > 6) {
                return '昵称的长度必须在1-6之间'
            }
        }
    })
    // 重置表单的数据
    $('#btnReset').on('click', function (e) {
        e.preventDefault();
    })
})
