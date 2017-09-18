/*
 Generates a clickable logo
 */
(function () {

    "use strict";
    'use strict';

    var app = angular.module('viewCustom', ['angularLoad']);
    app.controller('prmLogoAfterController', [function () {
        var vm = this;
        vm.getIconLink = getIconLink;
        function getIconLink() {
            return vm.parentCtrl.iconLink;
        }
    }]);

    app.component('prmLogoAfter', {
        bindings: {parentCtrl: '<'},
        controller: 'prmLogoAfterController',
        template: '<div class="product-logo product-logo-local" layout="row" id="banner" tabindex="0"  role="banner">' + '<a href="http://library.du.edu/"><img class="logo-image" alt="{{::(&apos;nui.header.LogoAlt&apos; | translate)}}" ng-src="{{$ctrl.getIconLink()}}"/></a></div>'
    });
})();

/*
 Generates side menu widget
 */
(function () {

    "use strict";
    'use strict';

    var sideMenuWidget = sideMenuWidget || {};

    (function () {

        var sideMenuWidget_div, sideMenuWidget_load, sideMenuWidget_button;
        var sideMenuWidget_options = {
            "width": "100%",
            "height": 340,
            "slidebutton_url": "",
            "slidebutton_text": "Find More", // Side menu widget tab label
            "slidebutton_position": "l",
            "slidebutton_bcolor": "#8B6F4B",
            "slidebutton_color": "#ffffff",
            "slidebutton_width": "20",
            "slidebutton_height": "125",
            "la_hide": true,
            "color_backg": "#DAD4CB", // Side menu widget background color
            "color_head": "#C60C30",
            "color_btn": "#F3F3F3",
            "color_border": "#8B6F4B"
            //"css": "",
            //"custom_css": "",
        };

        //!check jquery version up to second decimal
        //is the current version >= minimum version
        function minVersion(minv, curr) {
            curr = curr || window.jQuery.fn.jquery;
            var c = curr.split('.');
            var m = minv.split('.');

            if (parseInt(c[0], 10) > parseInt(m[0], 10)) {
                return true;
            } else if (parseInt(c[0], 10) < parseInt(m[0], 10)) {
                return false;
            } else {
                if (typeof c[1] == 'undefined') {
                    c[1] = 0;
                }
                if (typeof m[1] == 'undefined') {
                    m[1] = 0;
                }
                if (parseInt(c[1], 10) > parseInt(m[1], 10)) {
                    return true;
                } else if (parseInt(c[1], 10) < parseInt(m[1], 10)) {
                    return false;
                } else {
                    return true;
                }
            }
        }

        //get jquery either from namespace, window, or by loading it
        if (typeof sideMenuWidget.jq == "undefined") {
            if (window.jQuery === undefined) {
                loadJquery();
            } else {
                if (minVersion('1.7', window.jQuery.fn.jquery)) {
                    sideMenuWidget.jq = window.jQuery;
                    main();
                } else {
                    loadJquery();
                }
            }
        } else {
            main();
        }

        //!Load jQuery
        function loadJquery() {
            var script_tag = document.createElement('script');
            script_tag.setAttribute("type", "text/javascript");
            script_tag.setAttribute("src", "//code.jquery.com/jquery-1.12.2.min.js");
            if (script_tag.readyState) {
                // for IE
                script_tag.onreadystatechange = function () {
                    if (this.readyState == 'complete' || this.readyState == 'loaded') {
                        scriptLoadHandler();
                    }
                };
            } else {
                script_tag.onload = scriptLoadHandler;
            }
            (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(script_tag);
        }

        //!Called once jQuery has loaded
        function scriptLoadHandler() {
            sideMenuWidget.jq = window.jQuery.noConflict(true);
            main();
            changeUserName(sideMenuWidget.jq);
        }

        function main() {

            sideMenuWidget.jq(document).ready(function () {

                //change a % width to some standard pixel width for new window
                if (typeof sideMenuWidget_options.width == 'string' && sideMenuWidget_options.width.indexOf('%') !== -1) {
                    sideMenuWidget_options.width = '400';
                }

                !function (a) {
                    a.fn.tabSlideOut = function (b) {
                        var c = a.extend({
                            tabHandle: ".lcs_sideMenuWidget_button",
                            content_div: ".lcs_load",
                            speed: 300,
                            action: "click",
                            tabLocation: "l",
                            topPos: "200px",
                            leftPos: "20px",
                            fixedPosition: !0,
                            positioning: "absolute",
                            pathToTabImage: null,
                            imageHeight: null,
                            imageWidth: null,
                            onLoadSlideOut: !1,
                            buttonBGcolor: null
                        }, b || {});
                        c.tabHandle = a(c.tabHandle), c.content_div = a(c.content_div);
                        var d = this;
                        c.positioning = c.fixedPosition === !0 ? "fixed" : "absolute", !document.all || window.opera || window.XMLHttpRequest || (c.positioning = "absolute"), null != c.pathToTabImage && c.tabHandle.css({
                            background: "url(" + c.pathToTabImage + ") " + c.buttonBGcolor + " no-repeat",
                            width: c.imageWidth,
                            height: c.imageHeight,
                            textIndent: "-99999px"
                        }), c.tabHandle.css({
                            display: "block",
                            outline: "none",
                            position: "absolute"
                        }), d.css({"line-height": "1", position: c.positioning});
                        var e = {
                            containerWidth: parseInt(d.outerWidth(), 10) + "px",
                            containerHeight: parseInt(d.outerHeight(), 10) + "px",
                            tabWidth: parseInt(c.tabHandle.outerWidth(), 10) + "px",
                            tabHeight: parseInt(c.tabHandle.outerHeight(), 10) + "px"
                        };
                        ("t" === c.tabLocation || "b" === c.tabLocation) && (d.css({left: c.leftPos}), c.tabHandle.css({right: 0})), "t" === c.tabLocation && (d.css({top: "-" + e.containerHeight}), c.tabHandle.css({bottom: "-" + e.tabHeight})), "b" === c.tabLocation && (d.css({
                            bottom: "-" + e.containerHeight,
                            position: "fixed"
                        }), c.tabHandle.css({top: "-" + e.tabHeight})), ("l" === c.tabLocation || "r" === c.tabLocation) && d.css({
                            height: e.containerHeight,
                            top: c.topPos
                        }), "l" === c.tabLocation && (d.css({left: "-" + e.containerWidth}), c.tabHandle.css({right: "-" + e.tabWidth}), c.tabHandle.css(null != c.pathToTabImage ? {top: 0} : {top: e.tabWidth})), "r" === c.tabLocation && (d.css({right: "-" + e.containerWidth}), null != c.pathToTabImage && c.tabHandle.css({left: "-" + e.tabWidth}), c.tabHandle.css({top: 0}), a("html").css("overflow-x", "hidden")), c.tabHandle.click(function (a) {
                            a.preventDefault();
                        });
                        var f = function f() {
                                "t" === c.tabLocation ? d.animate({top: "-" + e.containerHeight}, c.speed).removeClass("open") : "l" === c.tabLocation ? d.animate({left: "-" + e.containerWidth}, c.speed).removeClass("open") : "r" === c.tabLocation ? d.animate({right: "-" + e.containerWidth}, c.speed).removeClass("open") : "b" === c.tabLocation && d.animate({bottom: "-" + e.containerHeight}, c.speed).removeClass("open"), c.content_div.attr("aria-hidden", !0);
                            },
                            g = function g() {
                                "t" == c.tabLocation ? d.animate({top: "-3px"}, c.speed).addClass("open") : "l" == c.tabLocation ? d.animate({left: "-3px"}, c.speed).addClass("open") : "r" == c.tabLocation ? d.animate({right: "-3px"}, c.speed).addClass("open") : "b" == c.tabLocation && d.animate({bottom: "-3px"}, c.speed).addClass("open"), c.content_div.attr("aria-hidden", !1);
                            };
                        c.tabHandle.click(function () {
                            d.hasClass("open") ? f() : g();
                        }), d.on("tabslideout.toggle", function () {
                            d.hasClass("open") ? f() : g();
                        });
                    };
                }(sideMenuWidget.jq);

                sideMenuWidget_div = sideMenuWidget.jq('<div class="lcs_slide_out"></div>').css({
                    'width': sideMenuWidget_options.width,
                    'height': '70px',
                    'border': '5px solid ' + sideMenuWidget_options.color_border,
                    'background-color': sideMenuWidget_options.color_backg,
                    'box-shadow': '0 0 5px #ccc',
                    'z-index': '100'
                }).attr('title', "Click to open menu"); // @todo make this customizable

                sideMenuWidget_button = sideMenuWidget.jq('<a class="lcs_sideMenuWidget_button" href="#"></a>');
                sideMenuWidget_load = sideMenuWidget.jq('<div class="lcs_load" aria-hidden="true"></div>');

                sideMenuWidget_div.append(sideMenuWidget_button);
                sideMenuWidget_div.append(sideMenuWidget_load);
                sideMenuWidget.jq('body').append(sideMenuWidget_div);

                var sideMenuWidget_button_span = sideMenuWidget.jq('<span></span>').html(sideMenuWidget_options.slidebutton_text).css({
                    padding: '10px',
                    display: 'block',
                    borderStyle: 'solid',
                    borderColor: sideMenuWidget_options.slidebutton_color,
                    color: sideMenuWidget_options.slidebutton_color,
                    backgroundColor: 'transparent',
                    margin: '1px'
                });

                if (sideMenuWidget_options.slidebutton_position == 'b') {
                    sideMenuWidget_button.css({
                        backgroundColor: sideMenuWidget_options.slidebutton_bcolor,
                        textDecoration: 'none',
                        boxShadow: 'rgb(204, 204, 204) 0px 0px 5px'
                    });
                    sideMenuWidget_button_span.css({borderWidth: '4px 4px 0px 4px'});
                } else {
                    var rotate = sideMenuWidget_options.slidebutton_position == 'l' ? '270deg' : '-270deg';
                    sideMenuWidget_button.css({
                        transformOrigin: 'top left',
                        transform: 'rotate(' + rotate + ')',
                        backgroundColor: sideMenuWidget_options.slidebutton_bcolor,
                        textDecoration: 'none',
                        boxShadow: 'rgb(204, 204, 204) 0px 0px 5px'
                    });
                    sideMenuWidget_button_span.css({borderWidth: '0px 4px 4px 4px'});
                }

                sideMenuWidget_button.append(sideMenuWidget_button_span);
                sideMenuWidget_div.tabSlideOut({
                    tabLocation: sideMenuWidget_options.slidebutton_position
                });

                sideMenuWidget_button.on('click', function (e) {
                    // window.clearTimeout(chat_timer);
                    if (sideMenuWidget_div.hasClass('open')) {
                        showMenu();
                    } else {
                        // window is closing
                        sideMenuWidget_div.css({
                            'width': sideMenuWidget_options.width,
                            'height': '70px'
                        }).attr('title', "Click to open window");
                    }
                    return true;
                });
            });
        }

        function showMenu() {

            sideMenuWidget_div.css({'width': sideMenuWidget_options.width, 'height': sideMenuWidget_options.height});

            var menuContent = '<div style="margin-left: 35px; padding: 25px">'; // container
            menuContent += '<h2><strong>Try your search in</strong></h2>';
            menuContent += '<p><div><a href="http://encore.coalliance.org/iii/encore/?lang=eng" target="_blank">Prospector</a></div></p>';
            menuContent += '<p><div><a href="http://du.idm.oclc.org/login?url=https://yewno.com/" target="_blank">Yewno</a></div></p>';
            menuContent += '<p><div><a href="http://digital.library.du.edu/blacklight-du" target="_blank">DU Special Collections</a></div></p>';
            menuContent += '<p><div><a href="http://digitalcommons.du.edu/" target="_blank">Digital Commons @ DU</a></div></p>';
            menuContent += '<br>';
            menuContent += '<h2><strong>Need Help?</strong></h2>';
            menuContent += '<p><div><a href="http://libraryhelp.du.edu/" target="_blank">Ask us!</a></div></p>';
            menuContent += '<p>Research Center 303-871-2905</p>';
            menuContent += '<p>Lending Desk 303-871-3707</p>';
            menuContent += '</div>';
            menuContent += '<div style="margin-left: 2px">';
            menuContent += '</div>';

            var $content = sideMenuWidget.jq(menuContent).css({
                'border': '10px',
                'boxSizing': 'border-box',
                'width': '100%',
                'height': sideMenuWidget_options.height
            });

            sideMenuWidget_load.html($content).show();
        }
    })();

    function changeUserName(j) {

        var modifyUserName = function () {

            var checkGuest = document.body.innerHTML.toString().search('user-name');

            if (checkGuest > -1) {
                var isGuest = angular.element(document.querySelector('.user-name'))[0].innerHTML;

                if (isGuest.indexOf('Guest') > -1) {
                    j('.user-name').text('Sign in');
                    clearInterval(timer1);
                    var timer2 = setInterval(function () {
                        modifyUserName();
                    }, 10000);
                }
            }
        };

        var timer1 = setInterval(function () {
            modifyUserName();
        }, 50);
    }

})();