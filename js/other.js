$(function () {
    slider();
})
function slider(){
    var pageSlider = new WxMoment.PageSlider({
        pages: $('.screen'),
        rememberLastVisited: true,
        currentClass: 'active'
    });
}