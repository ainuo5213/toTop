(function ($) {
    //向上插件
    // {
    //     isBack:true,
    //     scrollTop:0,
    //     position:'left',
    //     width:1000,
    //     offset:0,
    //     speed:800,
    //     ifShow:true
    // }
    $.fn.extend({
        "backBtn": function (options) {
            let obj = {//默认值
                isBack: true,
                scrollTop: 0,
                position: 'right',
                width: 1000,
                offset: 50,
                bottom: 200,
                speed: 800,
                ifShow: true
            };
            let opts = $.extend(obj, options);//对象的属性融合，第二个融合第一个
            let win = $(window), dom = $(this);
            let opr = {
                getLeft() {
                    let left, winWidth = win.width();
                    if (opts.position === 'left') {
                        //left=空白区域-间距-当前元素的宽度
                        left = (winWidth - opts.width) / 2 - opts.offset - dom.outerWidth()
                    } else if (opts.position === 'right') {
                        //left=空白区域+内容区域+间距
                        left = (winWidth - opts.width) / 2 + opts.width + opts.offset
                    }
                    return left;
                },
                setPosition() {
                    let left = this.getLeft(), top = this.getTop();
                    dom.css({
                        left: left + 'px',
                        top: top + 'px'
                    })
                },
                getTop() {
                    let top, winHeight = win.height(), domHeight = dom.outerHeight();
                    top = winHeight - domHeight - opts.bottom;
                    return top;
                },
                init() {
                    this.setPosition();
                    win.on('resize', function () {
                        opr.setPosition();
                    });
                    if (opts.ifShow) {
                        dom.show()
                    } else {
                        dom.hide();
                    }
                    if (opts.isBack) {
                        dom.on('click', function () {
                            $('html,body').animate({
                                scrollTop: 0
                            }, opts.speed)
                        });
                    }
                    win.on('scroll', function () {
                        if (win.scrollTop() > opts.scrollTop) {
                            dom.show()
                        } else {
                            dom.hide();
                        }
                    });
                }
            };
            opr.init();
            return this;
        }
    })
})($);
})();