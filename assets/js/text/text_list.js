$(function () {
    var laypage = layui.laypage
    function renderPage(totle) {
        laypage.render({
            elem: 'pageBpx',
            count: totle,
            limit: q.pagesize,
            curr: q.pagenum
        })
    }
})