(function(){
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
    bindings: { parentCtrl: '<' },
    controller: 'prmLogoAfterController',
    template: '<div class="product-logo product-logo-local" layout="row" id="banner" tabindex="0"  role="banner">' + '<a href="http://library.du.edu/"><img class="logo-image" alt="{{::(&apos;nui.header.LogoAlt&apos; | translate)}}" ng-src="{{$ctrl.getIconLink()}}"/></a></div>'
});
})();