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
        template: '<div class="product-logo product-logo-local" layout="row" id="banner" tabindex="0"  role="banner">' +
        '<a href="http://library.du.edu/"><img class="logo-image" alt="{{::(&apos;nui.header.LogoAlt&apos; | translate)}}" ng-src="{{$ctrl.getIconLink()}}"/></a></div>'
    });

})();

// side menu
var springSpace = springSpace || {};

(function(){

    var chat_div, chat_load, chat_timer, chat_self_triggered, chat_button;
    var libchat_options = {
        "width":"100%",
        "height":340,
        "slidebutton_url":"",
        "slidebutton_text":"Find More",
        "slidebutton_position":"l",
        "slidebutton_bcolor":"#8B6F4B",
        "slidebutton_color":"#ffffff",
        "slidebutton_width":"20",
        "slidebutton_height":"125",
        "la_hide":true,"css":"",
        "custom_css":"",
        "color_backg":"#f9f9f9",
        "color_head":"#C60C30",
        "color_btn":"#F3F3F3",
        "color_border":""};

    //!check jquery version up to second decimal
    //is the current version >= minimum version
    function minVersion(minv, curr) {
        curr = curr || window.jQuery.fn.jquery;
        var c = curr.split('.');
        var m = minv.split('.');

        if (parseInt(c[0], 10) > parseInt(m[0], 10)) { return true; }
        else if (parseInt(c[0], 10) < parseInt(m[0], 10)) { return false; }
        else {
            if (typeof c[1] == 'undefined') { c[1] = 0; }
            if (typeof m[1] == 'undefined') { m[1] = 0; }
            if (parseInt(c[1], 10) > parseInt(m[1], 10)) { return true; }
            else if (parseInt(c[1], 10) < parseInt(m[1], 10)) { return false; }
            else { return true; }
        }
    }

    //get jquery either from namespace, window, or by loading it
    if (typeof springSpace.jq == "undefined") {
        if (window.jQuery === undefined) {
            loadJquery();
        } else {
            if (minVersion('1.7', window.jQuery.fn.jquery)) {
                springSpace.jq = window.jQuery;
                main();
            } else {
                loadJquery();
            }
        }
    } else {
        main();
    }

    //!Load jQuery
    function loadJquery(){
        var script_tag = document.createElement('script');
        script_tag.setAttribute("type","text/javascript");
        script_tag.setAttribute("src", "//code.jquery.com/jquery-1.12.2.min.js");
        if (script_tag.readyState) { // for IE
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
        springSpace.jq = window.jQuery.noConflict(true);
        main();

        window.setInterval(function() {
            signIn();
        }, 500);

    }

    function main() {

        springSpace.jq(document).ready(function(){

            //wpm v2 21/10/16 DW

            //change a % width to some standard pixel width for new window
            if (typeof libchat_options.width == 'string' && libchat_options.width.indexOf('%') !== -1) {
                libchat_options.width = '400';
            }

            !function(a){a.fn.tabSlideOut=function(b){var c=a.extend({tabHandle:".lcs_chat_button",content_div:".lcs_load",speed:300,action:"click",tabLocation:"l",topPos:"200px",leftPos:"20px",fixedPosition:!0,positioning:"absolute",pathToTabImage:null,imageHeight:null,imageWidth:null,onLoadSlideOut:!1,buttonBGcolor:null},b||{});c.tabHandle=a(c.tabHandle),c.content_div=a(c.content_div);var d=this;c.positioning=c.fixedPosition===!0?"fixed":"absolute",!document.all||window.opera||window.XMLHttpRequest||(c.positioning="absolute"),null!=c.pathToTabImage&&c.tabHandle.css({background:"url("+c.pathToTabImage+") "+c.buttonBGcolor+" no-repeat",width:c.imageWidth,height:c.imageHeight,textIndent:"-99999px"}),c.tabHandle.css({display:"block",outline:"none",position:"absolute"}),d.css({"line-height":"1",position:c.positioning});var e={containerWidth:parseInt(d.outerWidth(),10)+"px",containerHeight:parseInt(d.outerHeight(),10)+"px",tabWidth:parseInt(c.tabHandle.outerWidth(),10)+"px",tabHeight:parseInt(c.tabHandle.outerHeight(),10)+"px"};("t"===c.tabLocation||"b"===c.tabLocation)&&(d.css({left:c.leftPos}),c.tabHandle.css({right:0})),"t"===c.tabLocation&&(d.css({top:"-"+e.containerHeight}),c.tabHandle.css({bottom:"-"+e.tabHeight})),"b"===c.tabLocation&&(d.css({bottom:"-"+e.containerHeight,position:"fixed"}),c.tabHandle.css({top:"-"+e.tabHeight})),("l"===c.tabLocation||"r"===c.tabLocation)&&d.css({height:e.containerHeight,top:c.topPos}),"l"===c.tabLocation&&(d.css({left:"-"+e.containerWidth}),c.tabHandle.css({right:"-"+e.tabWidth}),c.tabHandle.css(null!=c.pathToTabImage?{top:0}:{top:e.tabWidth})),"r"===c.tabLocation&&(d.css({right:"-"+e.containerWidth}),null!=c.pathToTabImage&&c.tabHandle.css({left:"-"+e.tabWidth}),c.tabHandle.css({top:0}),a("html").css("overflow-x","hidden")),c.tabHandle.click(function(a){a.preventDefault()});var f=function(){"t"===c.tabLocation?d.animate({top:"-"+e.containerHeight},c.speed).removeClass("open"):"l"===c.tabLocation?d.animate({left:"-"+e.containerWidth},c.speed).removeClass("open"):"r"===c.tabLocation?d.animate({right:"-"+e.containerWidth},c.speed).removeClass("open"):"b"===c.tabLocation&&d.animate({bottom:"-"+e.containerHeight},c.speed).removeClass("open"),c.content_div.attr("aria-hidden",!0)},g=function(){"t"==c.tabLocation?d.animate({top:"-3px"},c.speed).addClass("open"):"l"==c.tabLocation?d.animate({left:"-3px"},c.speed).addClass("open"):"r"==c.tabLocation?d.animate({right:"-3px"},c.speed).addClass("open"):"b"==c.tabLocation&&d.animate({bottom:"-3px"},c.speed).addClass("open"),c.content_div.attr("aria-hidden",!1)};c.tabHandle.click(function(){d.hasClass("open")?f():g()}),d.on("tabslideout.toggle",function(){d.hasClass("open")?f():g()})}}(springSpace.jq);

            chat_div = springSpace.jq('<div class="lcs_slide_out"></div>').css({
                'width': libchat_options.width,
                'height': '70px',
                // 'border': '1px solid '+libchat_options.color_border,
                'border': '5px solid #8B6F4B',
                // 'background-color': libchat_options.color_backg, #F3F3F3
                'background-color': '#F3F3F3',
                'box-shadow': '0 0 5px #ccc',
                'z-index': '100'
            }).attr('title', "Click to open window"); // @todo make this customizable

            chat_button = cspringSpace.jq('<a class="lcs_chat_button" href="#"></a>');
            chat_load = springSpace.jq('<div class="lcs_load" aria-hidden="true"></div>');

            chat_div.append(chat_button);
            chat_div.append(chat_load);
            springSpace.jq('body').append(chat_div);

            var chat_button_span = springSpace.jq('<span></span>').html(libchat_options.slidebutton_text).css({ padding: '10px', display: 'block', borderStyle: 'solid', borderColor: libchat_options.slidebutton_color, color: libchat_options.slidebutton_color, backgroundColor: 'transparent', margin: '1px' });

            if ((libchat_options.slidebutton_position == 'b')) {
                chat_button.css({ backgroundColor: libchat_options.slidebutton_bcolor, textDecoration: 'none', boxShadow: 'rgb(204, 204, 204) 0px 0px 5px' });
                chat_button_span.css({ borderWidth: '4px 4px 0px 4px',  });
            } else {
                var rotate = (libchat_options.slidebutton_position == 'l') ? '270deg' : '-270deg';
                chat_button.css({ transformOrigin: 'top left', transform: 'rotate('+rotate+')', backgroundColor: libchat_options.slidebutton_bcolor, textDecoration: 'none', boxShadow: 'rgb(204, 204, 204) 0px 0px 5px' });
                chat_button_span.css({ borderWidth: '0px 4px 4px 4px',  });
            }

            chat_button.append(chat_button_span);
            chat_div.tabSlideOut({
                tabLocation: libchat_options.slidebutton_position
            });

            chat_button.on('click', function(e) {
                window.clearTimeout(chat_timer);
                if(chat_div.hasClass('open')){
                    showMenu();
                } else {
                    // window is closing
                    chat_div.css({'width': libchat_options.width, 'height': '70px' }).attr('title', "Click to open window");
                }
                return true;
            });

        }); //end docready
    }//end main

    function showMenu() {

        chat_div.css({'width':libchat_options.width, 'height': libchat_options.height });

        // var $iframe = springSpace.jq('<iframe></iframe>').attr({ 'id': 'iframe_'+libchat_options.hash, 'name': 'iframe_'+libchat_options.hash, 'title': 'Chat widget', 'src': qs, 'frameborder': 0, 'scrolling': 'no' }).css({ 'border': 'none', boxSizing: 'border-box', 'width': '100%', 'height': libchat_options.height });
        // chat_load.html($iframe).show();

        var menuContent = '<div style="margin-left: 35px; padding: 25px">'; // container

        //menuContent += '<div id="tabs">'; // tabs


        menuContent += '<h2><strong>Try your search in</strong></h2>';
        menuContent += '<p><div><a href="http://encore.coalliance.org/iii/encore/?lang=eng">Prospector</a></div></p>';
        menuContent += '<p><div><a href="http://du.idm.oclc.org/login?url=https://yewno.com/">Yewno</a></div></p>';
        menuContent += '<p><div><a href="http://digital.library.du.edu/blacklight-du">DU Special Collections</a></div></p>';
        menuContent += '<p><div><a href="http://digitalcommons.du.edu/">Digital Commons @ DU</a></div></p>';
        menuContent += '<br>';
        menuContent += '<h2><strong>Need Help?</strong></h2>';
        menuContent += '<p><div><a href="http://libraryhelp.du.edu/">Ask us!</a></div></p>';
        menuContent += '<p>Research Center 303-871-2905</p>';
        menuContent += '<p>Lending Desk 303-871-3707</p>';
        menuContent += '</div>';
        menuContent += '<div style="margin-left: 2px">';

        //menuContent += '<div id="libchat_54a58f3d376b8c9326914a31eb4ce671" style="border: 1px solid #ccc;"></div>';
        //menuContent += '<script src="//v2.libanswers.com/load_chat.php?hash=54a58f3d376b8c9326914a31eb4ce671"></script>';

        menuContent += '</div>'; // container

        // TODO: figure out css... iframe?
        var $content = springSpace.jq(menuContent).css({ 'border': '10px', boxSizing: 'border-box', 'width': '100%', 'height': libchat_options.height });
        // TODO: drawer menu content here
        chat_load.html($content).show();

    } //end showmenu

})(); //end anonymous function

function signIn() {

    var checkGuest = document.body.innerHTML.toString().search('user-name');

    // var test = springSpace.jq('.user-name').text();
    // console.log(test);

    if (checkGuest > -1){
        var isGuest = angular.element( document.querySelector( '.user-name' ) )[0].innerHTML;

        if ((isGuest.indexOf('Sign in') > -1)||(isGuest.indexOf('Guest') > -1)){
            var elementRemove = document.getElementsByTagName('prm-user-area')[0];
            angular.element(elementRemove).remove();

            var elem = document.getElementsByClassName('view-switcher')[0];
            var btn = document.createElement("div");
            var a = document.createElement('a');
            var linkText = document.createTextNode("Sign in");
            a.appendChild(linkText);
            btn.className = "signIn";

            var currentWindow = document.location;
            var currentUrl = encodeURI(currentWindow);

            a.href = '';
            a.className = "signInLink";
            elem.appendChild(btn);
            btn.appendChild(a);

        }

        if ((isGuest.indexOf('Sign in') < 1)||(isGuest.indexOf('Guest') < 1)){

            var signOutCheck = document.getElementsByClassName('signOut')[0];
            if (typeof signOutCheck == 'undefined'){
                var userName = document.getElementsByClassName('user-name')[1];
                var btn = document.createElement("div");
                btn.className = "signOut";
                var a = document.createElement('a');
                var linkText = document.createTextNode("Sign out");
                a.appendChild(linkText);
                a.href = '#';

                userName.appendChild(btn);
                btn.appendChild(a);
            }
        }
    }
}

/*
 window.setInterval(function(){

 var currentWindowUpdate = document.location;
 var currentUrlUpdate = encodeURI(currentWindowUpdate);

 if (document.querySelector('.signInLink') !== null) {
 var link = document.getElementsByClassName('signInLink')[0];
 //if not link variable not undefined then set url attribute of href
 if (typeof link !== 'undefined') {
 link.setAttribute('href', 'https://sal-shib.hosted.exlibrisgroup.com/pds?func=load-login&calling_system=primo&institute=44SAL&lang=eng&url=http://sal-primo-production.hosted.exlibrisgroup.com/primo_library/libweb/pdsLogin?targetURL='+currentUrlUpdate+'&from-new-ui=1&authenticationProfile=Profile+1');

 }
 }
 }, 500);
 */

