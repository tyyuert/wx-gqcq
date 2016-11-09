$(window).onload = function () {
    new WxMoment.OrientationTip();
    var share = new WxMoment.Share({}),event;
}
$(function () {
    onload();
    formSubmit();
})

function onload(){
//资源预加载
    var basePath = (location.host + location.pathname.slice(0,-15));
    // var basePath = "http://222.com/222/广汽传祺/pro1/wx-gqcq/";
    var loader = new WxMoment.Loader();

//声明资源文件列表
    var fileList = [
        'img/index_bg.jpg',
        'img/main_bg.jpg',
        'img/index_01.png',
        'img/index_02.png',
        'img/index_03.png',
        'img/index_05.png',
        'img/index_06.png',
        'img/index_07.png',
        'img/btn_scroll.png',
        'img/pro_1_01.png',
        'img/pro_1_02.png',
        'img/pro_1_03.png',
        'img/pro_2_01.png',
        'img/pro_2_02.png',
        'img/pro_2_03.png',
        'img/pro_3_01.png',
        'img/pro_3_02.png',
        'img/pro_3_03.png',
        'img/pro_3_04.png',
        'img/pro_4_01.png',
        'img/pro_4_02.png',
        'img/pro_4_03.png',
        'img/pro_4_04.png'
    ];

    for (var i = 0; i < fileList.length; i++) {
        loader.addImage(basePath + fileList[i]);
    }

//进度监听
    loader.addProgressListener(function (e) {
        var percent = Math.round((e.completedCount / e.totalCount) * 100);
        var load = $(".loading");
        //在这里做 Loading 页面中百分比的显示
        load.html("Loading "+ percent+"%");
    });

//加载完成
    loader.addCompletionListener(function () {
        //可以在这里隐藏 Loading 页面开始进入主内容页面
        var load = $(".loading");
        var wrap = $(".wrap");

        load.remove();
        wrap.show();
    });

//启动加载
    loader.start();
}

function formSubmit(){
    //表单数据提交验证
    $('form').submit(function () {
        //获取字段数据
        var name = $('#name').val(),
            tel = $('#tel').val(),
            prov = $('#prov').val(),
            city = $('#city').val(),
            sale1 = $('#sale1').val()

        //检验字段内容
        if(!name || !tel || !prov || !city || !sale1){
            alert('内容填写不完整！');
            return false;
        }
        var mobilePattern = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
        //var provincePattern = /^[\u4e00-\u9fa5]{0,8}$/;
        //var cityPattern = /^[\u4e00-\u9fa5]{0,8}$/;
        if(!mobilePattern.test(tel)){
            alert('手机填写不正确！');
            return false;
        }


        //填写表单内容
        //填写表单内容
        var form = new WxMoment.Form({
            appid: 'wxf217d0411e69ce6e',    //客户公众号appid，可在 微信公众平台->开发者中心 查看
            qid: '25956',                     //表单id，请与运营经理联系获取
            name: name,                     //表单内容，需先与运营经理沟通后配置所需提交的内容
            sex:'男',
            tel: tel,
            prov: prov,
            city: city,
            sale: sale1
        })

        //提交表单
        form.submit(function () {
            //成功的回调
            alert('发送成功！')
        }, function () {
            //失败的回调
            alert('未发送成功！')
        })
        return false;
    });
}


//数据统计
/*var wa = new WxMoment.Analytics({
    //projectName 请与微信商务团队确认
    projectName: "20150504WXMOMENT"
});*/

//可以统计到按钮的点击事件
$('#J-btn').click(function () {
    //两个必填参数，分别为: 事件分类、事件名称
    wa.sendEvent('click', 'yuyue');
});
