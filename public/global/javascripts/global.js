/**
 * Created by Double-Black on 2016/1/27.
 */

/**
 * 页面ready方法
 */
$(document).ready(function() {
    categoryDisplay();
    backToTop();
    panelToggle ();
    ToolTip();
});

/**
 * load方法，页面的加载完成后触发
 * {fixFooterInit();} 固定Footer栏
 */


/**
 * 固定底栏的初始化方法
 * 在一开始载入页面时，使用fixFooter()方法固定底栏。
 * 在浏览器窗口改变大小是，依然固定底栏
 * @return {[type]} [description]
 */
function fixFooterInit() {
    var footerHeight = $('footer').outerHeight();
    var footerMarginTop = getFooterMarginTop() - 0; //类型转换

    fixFooter(footerHeight, footerMarginTop); //fix footer at the beginning

    $(window).resize(function() { //when resize window, footer can auto get the postion
        fixFooter(footerHeight, footerMarginTop);
    });

}

/**
 * 固定底栏
 * @param  {number} footerHeight    底栏高度
 * @param  {number} footerMarginTop 底栏MarginTop
 * @return {[type]}                 [description]
 */
function fixFooter(footerHeight, footerMarginTop) {
    var windowHeight = $(window).height();
    var contentHeight = $('body>.container').outerHeight() + $('body>.container').offset().top + footerHeight + footerMarginTop;
    console.log(contentHeight);
    if (contentHeight < windowHeight) {
        $('footer').addClass('navbar-fixed-bottom');
    } else {
        $('footer').removeClass('navbar-fixed-bottom');
    }
    $('footer').show(400);
}

/**
 * 使用正则表达式得到底栏的MarginTop
 * @return {string} 底栏的MarginTop
 */
function getFooterMarginTop() {
    var margintop = $('footer').css('marginTop');
    var patt = new RegExp("[0-9]*");
    var re = patt.exec(margintop);
    // console.log(re[0]);
    return re[0];
}

/**
 * 分类展示
 * 点击右侧的分类展示时
 * 左侧的相关裂变展开或者收起
 * @return {[type]} [description]
 */
function categoryDisplay() {
    /*only show All*/
    $('.post-list-body>div[post-cate!=All]').hide();
    /*show category when click categories list*/
    $('.categories-list-item').click(function() {
        var cate = $(this).attr('cate'); //get category's name

        $('.post-list-body>div[post-cate!=' + cate + ']').hide(250);
        $('.post-list-body>div[post-cate=' + cate + ']').show(400);
    });
}

/**
 * 回到顶部
 */
function backToTop() {
    //滚页面才显示返回顶部
    $(window).scroll(function() {
        if ($(window).scrollTop() > 100) {
            $("#toTop").fadeIn(500);
        } else {
            $("#toTop").fadeOut(500);
        }
    });
    //点击回到顶部
    $("#toTop").click(function() {
        $("body").animate({
            scrollTop: "0"
        }, 500);
    });

}


/**
 * Sidebar panel toggle.
 */
function panelToggle () {

    var toggleBtn = jQuery('.panel-toggle');

    toggleBtn.data('toggle', true);

    toggleBtn.click(function() {

        var btn = jQuery(this);

        if(btn.data('toggle')) {

            btn.removeClass(' icon-chevron-up').addClass(' icon-chevron-down');
            btn.parents('div.panel').addClass('toggled');
            btn.data('toggle', false);
        } else {
            btn.removeClass(' icon-chevron-down').addClass('icon-chevron-up');
            btn.parents('div.panel').removeClass('toggled');
            btn.data('toggle', true);
        }
    });
    $('#information-info').collapse('show');
    $('#mark-info').collapse('toggle');
    $('#diagnosis').collapse('toggle');
    $('#treatment').collapse('toggle');
    $('#doc-info').collapse('toggle');//d_information page
    $('#doc-major').collapse('toggle');//d_information page
    $('#left').collapse('toggle');//d_gather page
    /*p_index page*/
    $('#solved').collapse('toggle');
    $('#accepted').collapse('toggle');
    $('#refuse').collapse('toggle');
}

function ToolTip(){
    $("[data-toggle='tooltip']").tooltip();
}