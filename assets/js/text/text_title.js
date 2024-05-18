$(function () {
    var layer = layui.layer
    $('#btnAddCate').on('click', function () {
        var index = layer.open({
            type: 1,
            area: ['500px', '250px'],
            title: '添加文章分类',
            content: $('#dialog-add').html()
        });
    });
}) 