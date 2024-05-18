$(function () {
    var layer = layui.layer
    // 1.1 获取裁剪区域的 DOM 元素
    var $image = $('#image')
    // 1.2 配置选项
    const options = {
        // 纵横比
        aspectRatio: 1,
        // 指定预览区域
        preview: '.img-preview'
    }
    // 1.3 创建裁剪区域
    $image.cropper(options)
    // 上传按钮模拟点击事件
    $('#btnChooseImage').on('click', function () {
        $('#file').click()
    })
    // 为文件选择框绑定change事件
    $('#file').on('change', function (e) {
        var filelist = e.target.files
        if (filelist.length === 0) {
            return layer.msg('请选择照片')
        }
        // 拿到用户选择的文件
        var file = e.target.files[0]
        // 将文件转化为路径
        var imageURL = URL.createObjectURL(file)
        //重新初始化裁剪区
        $image
            .cropper('destroy')      // 销毁旧的裁剪区域
            .attr('src', imageURL)  // 重新设置图片路径
            .cropper(options)        // 重新初始化裁剪区域
    })
})