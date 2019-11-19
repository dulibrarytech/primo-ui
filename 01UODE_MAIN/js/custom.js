(function(){
"use strict";
"use strict";

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*
 * Begin "primo-explore-google-analytics" code block (JR 11-2019)
 * google analytics addon 2019-08 https://github.com/NYULibraries/primo-explore-google-analytics
 */
!function (t, e) {
    "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? exports.primoExploreGoogleAnalytics = e() : t.primoExploreGoogleAnalytics = e();
}("undefined" != typeof self ? self : undefined, function () {
    return function (t) {
        var e = {};function n(r) {
            if (e[r]) return e[r].exports;var i = e[r] = { i: r, l: !1, exports: {} };return t[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports;
        }return n.m = t, n.c = e, n.d = function (t, e, r) {
            n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r });
        }, n.r = function (t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 });
        }, n.t = function (t, e) {
            if (1 & e && (t = n(t)), 8 & e) return t;if (4 & e && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t && t.__esModule) return t;var r = Object.create(null);if (n.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t) for (var i in t) {
                n.d(r, i, function (e) {
                    return t[e];
                }.bind(null, i));
            }return r;
        }, n.n = function (t) {
            var e = t && t.__esModule ? function () {
                return t.default;
            } : function () {
                return t;
            };return n.d(e, "a", e), e;
        }, n.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e);
        }, n.p = "", n(n.s = 0);
    }([function (t, e, n) {
        n(1), t.exports = "googleAnalytics";
    }, function (t, e, n) {
        "use strict";

        n.r(e);n(2), n(4);function r(t) {
            var e = t.externalScriptURL,
                n = t.inlineScript,
                r = t.trackingId,
                i = t.target,
                a = "window.dataLayer = window.dataLayer || [];\n                          function gtag(){dataLayer.push(arguments);}\n                          gtag('js', new Date());\n                          gtag('config', '".concat(r, "');"),
                o = "https://www.googletagmanager.com/gtag/js?id=".concat(r);return { externalSource: void 0 === e ? o : e, inlineCode: n || a, target: i || "head" };
        }angular.module("googleAnalytics", ["angulartics", "angulartics.google.tagmanager"]).factory("gaInjectionService", ["googleAnalyticsConfig", function (t) {
            var e = Array.isArray(t) ? t.map(r) : [t].map(r);return { injectGACode: function injectGACode() {
                    e.forEach(function (t) {
                        var e = t.externalSource,
                            n = t.inlineCode,
                            r = t.target;if (null !== e) {
                            var i = document.createElement("script");i.src = e, document.querySelector(r).appendChild(i);
                        }var a = document.createElement("script");a.type = "text/javascript";try {
                            a.appendChild(document.createTextNode(n));
                        } catch (t) {
                            a.text = n;
                        }document.querySelector(r).appendChild(a);
                    });
                } };
        }]);
    }, function (t, e, n) {
        n(3), t.exports = "angulartics";
    }, function (t, e) {
        /**
         * @license Angulartics
         * (c) 2013 Luis Farzati http://angulartics.github.io/
         * License: MIT
         */
        !function (t, e) {
            "use strict";

            var n = window.angulartics || (window.angulartics = {});function r(t) {
                return ["a:", "button:", "button:button", "button:submit", "input:button", "input:submit"].indexOf(t.tagName.toLowerCase() + ":" + (t.type || "")) >= 0;
            }function i(t) {
                var e = t.slice(9);return null != e && e.length > 0 ? e.substring(0, 1).toLowerCase() + e.substring(1) : e;
            }n.waitForVendorCount = 0, n.waitForVendorApi = function (t, e, r, i, a) {
                a || n.waitForVendorCount++, i || (i = r, r = void 0), !Object.prototype.hasOwnProperty.call(window, t) || void 0 !== r && void 0 === window[t][r] ? setTimeout(function () {
                    n.waitForVendorApi(t, e, r, i, !0);
                }, e) : (n.waitForVendorCount--, i(window[t]));
            }, t.module("angulartics", []).provider("$analytics", function () {
                var e = this,
                    r = { pageTracking: { autoTrackFirstPage: !0, autoTrackVirtualPages: !0, trackRelativePath: !1, trackRoutes: !0, trackStates: !0, autoBasePath: !1, basePath: "", excludedRoutes: [], queryKeysWhitelisted: [], queryKeysBlacklisted: [], filterUrlSegments: [] }, eventTracking: {}, bufferFlushDelay: 1e3, trackExceptions: !1, optOut: !1, developerMode: !1 },
                    i = ["pageTrack", "eventTrack", "exceptionTrack", "transactionTrack", "setAlias", "setUsername", "setUserProperties", "setUserPropertiesOnce", "setSuperProperties", "setSuperPropertiesOnce", "incrementProperty", "userTimings", "clearCookies"],
                    a = {},
                    o = {},
                    s = {};function c(e, n, r) {
                    return o[e] || (o[e] = []), o[e].push(n), s[n] = r, function () {
                        if (!this.settings.optOut) {
                            var n = Array.prototype.slice.apply(arguments);return this.$inject(["$q", t.bind(this, function (r) {
                                return r.all(o[e].map(function (e) {
                                    var i = s[e] || {};if (i.async) {
                                        var a = r.defer(),
                                            o = t.copy(n);return o.unshift(a.resolve), e.apply(this, o), a.promise;
                                    }return r.when(e.apply(this, n));
                                }, this));
                            })]);
                        }
                    };
                }var u = { settings: r };u.setOptOut = function (t) {
                    this.settings.optOut = t, v();
                }, u.getOptOut = function () {
                    return this.settings.optOut;
                };var g = { $get: ["$injector", function (t) {
                        return f(t);
                    }], api: u, settings: r, virtualPageviews: function virtualPageviews(t) {
                        this.settings.pageTracking.autoTrackVirtualPages = t;
                    }, trackStates: function trackStates(t) {
                        this.settings.pageTracking.trackStates = t;
                    }, trackRoutes: function trackRoutes(t) {
                        this.settings.pageTracking.trackRoutes = t;
                    }, excludeRoutes: function excludeRoutes(t) {
                        this.settings.pageTracking.excludedRoutes = t;
                    }, queryKeysWhitelist: function queryKeysWhitelist(t) {
                        this.settings.pageTracking.queryKeysWhitelisted = t;
                    }, queryKeysBlacklist: function queryKeysBlacklist(t) {
                        this.settings.pageTracking.queryKeysBlacklisted = t;
                    }, filterUrlSegments: function filterUrlSegments(t) {
                        this.settings.pageTracking.filterUrlSegments = t;
                    }, firstPageview: function firstPageview(t) {
                        this.settings.pageTracking.autoTrackFirstPage = t;
                    }, withBase: function withBase(e) {
                        this.settings.pageTracking.basePath = e ? t.element(document).find("base").attr("href") : "";
                    }, withAutoBase: function withAutoBase(t) {
                        this.settings.pageTracking.autoBasePath = t;
                    }, trackExceptions: function trackExceptions(t) {
                        this.settings.trackExceptions = t;
                    }, developerMode: function developerMode(t) {
                        this.settings.developerMode = t;
                    } };function l(e, n, i) {
                    if (!r.developerMode) {
                        u[e] = c(e, n, i);var o = r[e],
                            s = o ? o.bufferFlushDelay : null,
                            g = null !== s ? s : r.bufferFlushDelay;t.forEach(a[e], function (t, e) {
                            !function (t, e) {
                                e ? setTimeout(t, e) : t();
                            }(function () {
                                n.apply(this, t);
                            }, e * g);
                        });
                    }
                }var f = function f(e) {
                    return t.extend(u, { $inject: e.invoke });
                };function p(t) {
                    var e = "register" + t.replace(/^./, function (t) {
                        return t.toUpperCase();
                    });g[e] = function (e, n) {
                        l(t, e, n);
                    }, u[t] = c(t, function (t) {
                        return function () {
                            n.waitForVendorCount && (a[t] || (a[t] = []), a[t].push(arguments));
                        };
                    }(t));
                }function d(n, r, i) {
                    for (var a in t.forEach(r, i), n) {
                        e[a] = n[a];
                    }
                }var v = function v() {
                    d(g, i, p);
                };d(g, i, p);
            }).run(["$rootScope", "$window", "$analytics", "$injector", function (e, n, r, i) {
                function a(t, e, n) {
                    if (/\?/.test(t) && e.length > 0) {
                        for (var r = t.split("?"), i = r[0], a = r[1].split("&"), o = [], s = 0; s < e.length; s++) {
                            for (var c = e[s], u = 0; u < a.length; u++) {
                                (c instanceof RegExp && c.test(a[u]) || a[u].indexOf(c) > -1) && o.push(a[u]);
                            }
                        }var g = "white" == n ? o : function (t, e) {
                            for (var n = [], r = 0; r < t.length; r++) {
                                -1 === e.indexOf(t[r]) && n.push(t[r]);
                            }return n;
                        }(a, o);return g.length > 0 ? i + "?" + g.join("&") : i;
                    }return t;
                }function o(t, e) {
                    (function (t) {
                        for (var e = 0; e < r.settings.pageTracking.excludedRoutes.length; e++) {
                            var n = r.settings.pageTracking.excludedRoutes[e];if (n instanceof RegExp && n.test(t) || t.indexOf(n) > -1) return !0;
                        }return !1;
                    })(t) || (t = function (t) {
                        var e = r.settings.pageTracking.filterUrlSegments;if (e.length > 0) {
                            for (var n = t.split("?"), i = n[0], a = i.split("/"), o = 0; o < e.length; o++) {
                                for (var s = e[o], c = 1; c < a.length; c++) {
                                    (s instanceof RegExp && s.test(a[c]) || a[c].indexOf(s) > -1) && (a[c] = "FILTERED");
                                }
                            }return a.join("/");
                        }return t;
                    }(t = function (t) {
                        return a(t, r.settings.pageTracking.queryKeysBlacklisted, "black");
                    }(t = function (t) {
                        return a(t, r.settings.pageTracking.queryKeysWhitelisted, "white");
                    }(t))), r.pageTrack(t, e));
                }if (r.settings.pageTracking.autoTrackFirstPage) {
                    var s = !0;if (i.has("$route")) {
                        var c = i.get("$route");if (c) for (var u in c.routes) {
                            s = !1;break;
                        } else null === c && (s = !1);
                    } else if (i.has("$state")) {
                        var g = i.get("$state");g.get().length > 1 && (s = !1);
                    }s && (r.settings.pageTracking.autoBasePath && (r.settings.pageTracking.basePath = n.location.pathname), i.invoke(["$location", function (t) {
                        if (r.settings.pageTracking.trackRelativePath) {
                            var e = r.settings.pageTracking.basePath + t.url();o(e, t);
                        } else o(t.absUrl(), t);
                    }]));
                }if (r.settings.pageTracking.autoTrackVirtualPages) {
                    r.settings.pageTracking.autoBasePath && (r.settings.pageTracking.basePath = n.location.pathname + "#");var s = !0;if (r.settings.pageTracking.trackRoutes && i.has("$route")) {
                        var c = i.get("$route");if (c) for (var u in c.routes) {
                            s = !1;break;
                        } else null === c && (s = !1);e.$on("$routeChangeSuccess", function (t, e) {
                            e && (e.$$route || e).redirectTo || i.invoke(["$location", function (t) {
                                var e = r.settings.pageTracking.basePath + t.url();o(e, t);
                            }]);
                        });
                    }r.settings.pageTracking.trackStates && (i.has("$state") && !i.has("$transitions") && (s = !1, e.$on("$stateChangeSuccess", function (t, e) {
                        i.invoke(["$location", function (t) {
                            var e = r.settings.pageTracking.basePath + t.url();o(e, t);
                        }]);
                    })), i.has("$state") && i.has("$transitions") && (s = !1, i.invoke(["$transitions", function (t) {
                        t.onSuccess({}, function (t) {
                            var e = t.options();e.notify && i.invoke(["$location", function (t) {
                                var e = r.settings.pageTracking.basePath + t.url();o(e, t);
                            }]);
                        });
                    }]))), s && e.$on("$locationChangeSuccess", function (t, e) {
                        e && (e.$$route || e).redirectTo || i.invoke(["$location", function (t) {
                            if (r.settings.pageTracking.trackRelativePath) {
                                var e = r.settings.pageTracking.basePath + t.url();o(e, t);
                            } else o(t.absUrl(), t);
                        }]);
                    });
                }r.settings.developerMode && t.forEach(r, function (t, e) {
                    "function" == typeof t && (r[e] = function () {});
                });
            }]).directive("analyticsOn", ["$analytics", function (e) {
                return { restrict: "A", link: function link(n, a, o) {
                        var s = o.analyticsOn || "click",
                            c = {};t.forEach(o.$attr, function (t, e) {
                            (function (t) {
                                return "analytics" === t.substr(0, 9) && -1 === ["On", "Event", "If", "Properties", "EventType"].indexOf(t.substr(9));
                            })(e) && (c[i(e)] = o[e], o.$observe(e, function (t) {
                                c[i(e)] = t;
                            }));
                        }), t.element(a[0]).on(s, function (i) {
                            var s,
                                u = o.analyticsEvent || (r(s = a[0]) ? s.innerText || s.value : s.id || s.name || s.tagName);c.eventType = i.type, o.analyticsIf && !n.$eval(o.analyticsIf) || (o.analyticsProperties && t.extend(c, n.$eval(o.analyticsProperties)), e.eventTrack(u, c));
                        });
                    } };
            }]).config(["$provide", function (t) {
                t.decorator("$exceptionHandler", ["$delegate", "$injector", function (t, e) {
                    return function (n, r) {
                        var i = t(n, r),
                            a = e.get("$analytics");return a.settings.trackExceptions && a.exceptionTrack(n, r), i;
                    };
                }]);
            }]);
        }(angular);
    }, function (t, e, n) {
        n(5), t.exports = "angulartics.google.tagmanager";
    }, function (t, e) {
        /**
         * @license Angulartics v0.19.2
         * (c) 2013 Luis Farzati http://luisfarzati.github.io/angulartics
         * Google Tag Manager Plugin Contributed by http://github.com/danrowe49
         * License: MIT
         */
        !function (t) {
            "use strict";

            t.module("angulartics.google.tagmanager", ["angulartics"]).config(["$analyticsProvider", function (t) {
                t.settings.ga = { userId: null }, t.registerPageTrack(function (e) {
                    (window.dataLayer = window.dataLayer || []).push({ event: "content-view", "content-name": e, userId: t.settings.ga.userId });
                }), t.registerEventTrack(function (e, n) {
                    n = n || {}, (window.dataLayer = window.dataLayer || []).push({ event: n.event || "interaction", target: n.category, action: e, "target-properties": n.label, value: n.value, "interaction-type": n.noninteraction, userId: t.settings.ga.userId });
                }), t.registerSetUsername(function (e) {
                    t.settings.ga.userId = e;
                });
            }]);
        }(angular);
    }]).default;
});
//# sourceMappingURL=index.js.map
/* 
 * End "primo-explore-google-analytics" code block
 */

var waitingTimer = window.setInterval(function () {
    // add Prospector, Google Scholar, and WorldCat
    var checkExists = document.getElementById("facets");
    if (checkExists != undefined) {
        var search_prospector_label = "Search Prospector";
        var prospector_search_url = "https://encore.coalliance.org/iii/encore/search/C__S";
        var search_google_scholar_label = "Search Google Scholar";
        var google_scholar_search_url = "https://scholar.google.com/scholar?hl=en&as_sdt=0%2C6&inst=10364086606605717788&q=";
        var search_worldcat_label = "Search WorldCat";
        var worldcat_search_url = "https://www.worldcat.org/search?q=";
        var cludo_search_url = "https://library.du.edu/#?cludoquery=";
        var search_cludo_label = "Search Library Website";
        var search_string = "";
        if (document.getElementById("searchBar").value.length > 0) search_string = document.getElementById("searchBar").value;else if (document.getElementById("input_freeText0").value.length > 0 && document.getElementById("input_freeText1").value.length > 0 && document.getElementById("input_freeText2").value.length > 0) search_string = document.getElementById("input_freeText0").value + " " + document.getElementById("input_freeText1").value + " " + document.getElementById("input_freeText2").value;
        var newsearchoptions = document.createElement('span');
        newsearchoptions.innerHTML = '<div id="OtherPlacesToSearchContainer"><h2 class="sidebar-title">Other Places to Search</h2><ol class="EXLFacetsList EXLFacetsListPreview"><li><a href="' + prospector_search_url + encodeURIComponent(search_string) + '__Orightresult__U?lang=eng&suite=def" title="Search Prospector">' + search_prospector_label + '</a></li><li><a href="' + google_scholar_search_url + encodeURIComponent(search_string) + '" title="Search Google Scholar">' + search_google_scholar_label + '</a></li><li><a href="' + worldcat_search_url + encodeURIComponent(search_string) + '" title="Search WorldCat">' + search_worldcat_label + '</a></li><li><a href="' + cludo_search_url + encodeURIComponent(search_string) + '" title="Search WorldCat">' + search_cludo_label + '</a></li></ol></div>';
        document.getElementById("facets").getElementsByClassName("sidebar-section")[0].prepend(newsearchoptions);
        clearInterval(waitingTimer);
    }
}, 2000);

(function () {

    "use strict";
    'use strict';

    angular.module('externalSearch', []).value('searchTargets', [{
        "name": "Search Prospector",
        "url": "https://encore.coalliance.org/iii/encore/search/C__S",
        mapping: function mapping(search) {
            if (Array.isArray(search)) {
                var ret = '';
                for (var i = 0; i < search.length; i++) {
                    var terms = search[i].split(',');
                    ret += ' ' + (terms[2] || '');
                }
                return ret;
            } else {
                var terms = search.split(',');
                return terms[2] || "";
            }
        }
    }, {
        "name": "Search WorldCat",
        "url": "https://www.worldcat.org/search?q=",
        mapping: function mapping(search) {
            if (Array.isArray(search)) {
                var ret = '';
                for (var i = 0; i < search.length; i++) {
                    var terms = search[i].split(',');
                    ret += ' ' + (terms[2] || '');
                }
                return ret;
            } else {
                var terms = search.split(',');
                return terms[2] || "";
            }
        }
    }, {
        "name": "Search Google Scholar",
        "url": "https://scholar.google.com/scholar?hl=en&as_sdt=0%2C6&inst=10364086606605717788&q=",
        mapping: function mapping(search) {
            if (Array.isArray(search)) {
                var ret = '';
                for (var i = 0; i < search.length; i++) {
                    var terms = search[i].split(',');
                    ret += ' ' + (terms[2] || '');
                }
                return ret;
            } else {
                var terms = search.split(',');
                return terms[2] || "";
            }
        }
    }, {
        "name": "Search Library Website",
        "url": "https://library.du.edu/#?cludoquery=",
        mapping: function mapping(search) {
            if (Array.isArray(search)) {
                var ret = '';
                for (var i = 0; i < search.length; i++) {
                    var terms = search[i].split(',');
                    ret += ' ' + (terms[2] || '');
                }
                return ret;
            } else {
                var terms = search.split(',');
                return terms[2] || "";
            }
        }
    }]).component('prmFacetAfter', {
        bindings: { parentCtrl: '<' },
        controller: ['externalSearchService', function (externalSearchService) {
            externalSearchService.controller = this.parentCtrl;
            externalSearchService.addExtSearch();
        }]
    }).component('prmPageNavMenuAfter', {
        controller: ['externalSearchService', function (externalSearchService) {
            if (externalSearchService.controller) externalSearchService.addExtSearch();
        }]
    }).component('prmFacetExactAfter', {
        bindings: { parentCtrl: '<' },
        template: '\n      <div ng-if="name === \'Other Places to Search\'">\n          <div ng-hide="$ctrl.parentCtrl.facetGroup.facetGroupCollapsed">\n              <div class="section-content animate-max-height-variable">\n                  <div class="md-chips md-chips-wrap">\n                      <div ng-repeat="target in targets" aria-live="polite" class="md-chip animate-opacity-and-scale facet-element-marker-local4">\n                          <div class="md-chip-content layout-row" role="button" tabindex="0">\n                              <strong dir="auto" title="{{ target.name }}">\n                                  <a ng-href="{{ target.url + target.mapping(queries, filters) }}" target="_blank">\n                                  {{ target.name }}</a>\n                              </strong>\n                          </div>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>',
        controller: ['$scope', '$location', 'searchTargets', function ($scope, $location, searchTargets) {
            $scope.name = this.parentCtrl.facetGroup.name;
            $scope.targets = searchTargets;
            var query = $location.search().query;
            var filter = $location.search().pfilter;
            $scope.queries = Array.isArray(query) ? query : query ? [query] : false;
            $scope.filters = Array.isArray(filter) ? filter : filter ? [filter] : false;
        }]
    }).factory('externalSearchService', function () {
        return {
            get controller() {
                return this.prmFacetCtrl || false;
            },
            set controller(controller) {
                this.prmFacetCtrl = controller;
            },
            addExtSearch: function addExtSearch() {
                var xx = this;
                var checkExist = setInterval(function () {

                    if (xx.prmFacetCtrl.facetService.results[0] && xx.prmFacetCtrl.facetService.results[0].name != "Other Places to Search") {
                        if (xx.prmFacetCtrl.facetService.results.name !== 'Other Places to Search') {
                            xx.prmFacetCtrl.facetService.results.unshift({
                                name: 'Other Places to Search',
                                displayedType: 'exact',
                                limitCount: 0,
                                facetGroupCollapsed: false,
                                values: undefined
                            });
                        }
                        clearInterval(checkExist);
                    }
                }, 100);
            }
        };
    });

    // google analytics addon 2019-08 https://github.com/NYULibraries/primo-explore-google-analytics
    var app = angular.module('viewCustom', ['angularLoad', 'externalSearch', 'googleAnalytics']);

    // google analytics addon 2019-08 https://github.com/NYULibraries/primo-explore-google-analytics
    app.run(runBlock);

    // google analytics addon 2019-08 https://github.com/NYULibraries/primo-explore-google-analytics
    runBlock.$inject = ['gaInjectionService'];
    function runBlock(gaInjectionService) {
        // other potential run operations...
        gaInjectionService.injectGACode();
    }

    // google analytics addon 2019-08 https://github.com/NYULibraries/primo-explore-google-analytics
    app.constant('googleAnalyticsConfig', {
        trackingId: 'UA-10614684-14',
        // use null to specify an external script shouldn't be loaded
        externalScriptURL: null,
        // copy from script snippet from Google if you're running legacy Google Analytics
        inlineScript: null,
        target: 'head'
    });

    // google analytics addon 2019-08 https://github.com/NYULibraries/primo-explore-google-analytics
    // TEST - Custom Google Analytics code
    // app.constant('googleAnalyticsConfig', {
    //   trackingId: 'UA-10614684-14',
    //   // use null to specify an external script shouldn't be loaded
    //   externalScriptURL: null,
    //   // copy from script snippet from Google if you're running legacy Google Analytics
    //   inlineScript: 
    //     var _gaq = _gaq || [];
    //     _gaq.push(['_setAccount', 'AB-123456789']);
    //     _gaq.push(['_trackPageview']);

    //     (function() {
    //       var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    //       ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    //       var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
    //     })();
    //   `,
    //   target: 'head',
    // })

    /** Bring back the scopes for basic searches **/
    app.component('prmSearchBarAfter', {
        bindings: { parentCtrl: '<' },
        controller: 'SearchBarAfterController'
    });

    app.controller('SearchBarAfterController', ['angularLoad', function () {
        var vm = this;
        vm.parentCtrl.showTabsAndScopes = true;
    }]);

    /** END Bring back the scopes for basic searches **/

    /*
     Generates a clickable logo
     */
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
        template: '<div class="product-logo product-logo-local" layout="row" id="banner" tabindex="0"  role="banner">' + '<a href="/primo-explore/search?vid=01UODE_MAIN&lang=en_US&sortby=rank"><img class="logo-image" alt="{{::(&apos;nui.header.LogoAlt&apos; | translate)}}" ng-src="{{$ctrl.getIconLink()}}"/></a></div>'
    });

    /*
     Generates a pay fine(s) button
     */
    app.component('prmFinesAfter', {
        template: '<div><a href="https://fines.library.du.edu/login" class="md-button" target="_blank">Pay Fine(s)</a></div>'
    });

    /*
     Generates prospector link on "no results found page"
     */
    app.controller('prmNoSearchResultAfter', [function () {
        var vm = this;
        var searchTerm = vm.parentCtrl.term;

        function appendProspectorLink() {

            angular.element(document.querySelector('md-card-content ul')).append('<li>Try your search in <a href="http://encore.coalliance.org/iii/encore/search/C__S' + encodeURIComponent(searchTerm) + '__Orightresult__U?lang=eng&suite=def" target="_blank">Prospector</a></li>');
        }

        appendProspectorLink();
    }]);

    app.component('prmNoSearchResultAfter', {
        bindings: { parentCtrl: '<' },
        controller: 'prmNoSearchResultAfter'
    });

    // Begin BrowZine - Primo Integration...
    window.browzine = {
        api: "https://public-api.thirdiron.com/public/v1/libraries/26",
        apiKey: "f4b1bd34-fffa-4a4b-8591-d096b1e77984",
        journalBrowZineWebLinkText: "View Journal Contents via Browzine",
        articleBrowZineWebLinkText: "View Issue Contents via Browzine",
        articlePDFDownloadLinkEnabled: true,
        articlePDFDownloadLinkText: "Download PDF (DU MAIN only)"
    };

    browzine.script = document.createElement("script");
    browzine.script.src = "https://s3.amazonaws.com/browzine-adapters/primo/browzine-primo-adapter.js";
    document.head.appendChild(browzine.script);

    app.controller('prmSearchResultAvailabilityLineAfterController', function ($scope) {
        window.browzine.primo.searchResult($scope);
    });

    app.component('prmSearchResultAvailabilityLineAfter', {
        bindings: { parentCtrl: '<' },
        controller: 'prmSearchResultAvailabilityLineAfterController'
    });
    // ... End BrowZine - Primo Integration
})();

/*
 Generates side menu widget
 */
(function (app) {

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
            "slidebutton_bcolor": "#58C4E6", //"#8B6F4B",
            "slidebutton_color": "#ffffff",
            "slidebutton_width": "20",
            "slidebutton_height": "125",
            "la_hide": true,
            "color_backg": "#DDF3F9", // Side menu widget background color DAD4CB
            "color_head": "#C60C30",
            "color_btn": "#F3F3F3",
            "color_border": "#5DC5E4" // 8B6F4B
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
                            buttonBGcolor: null // '#58C4E6' // null
                        }, b || {});
                        c.tabHandle = a(c.tabHandle), c.content_div = a(c.content_div);
                        var d = this;
                        c.positioning = c.fixedPosition === !0 ? "fixed" : "absolute", !document.all || window.opera || window.XMLHttpRequest || (c.positioning = "absolute"), null != c.pathToTabImage && c.tabHandle.css({
                            background: "url(" + c.pathToTabImage + ") " + c.buttonBGcolor + " no-repeat",
                            width: c.imageWidth,
                            height: c.imageHeight,
                            textIndent: "-99999px"
                        }), c.tabHandle.css({
                            display: "none",
                            outline: "none",
                            position: "absolute"
                        }), d.css({ "line-height": "1", position: c.positioning });
                        var e = {
                            containerWidth: parseInt(d.outerWidth(), 10) + "px",
                            containerHeight: parseInt(d.outerHeight(), 10) + "px",
                            tabWidth: parseInt(c.tabHandle.outerWidth(), 10) + "px",
                            tabHeight: parseInt(c.tabHandle.outerHeight(), 10) + "px"
                        };
                        ("t" === c.tabLocation || "b" === c.tabLocation) && (d.css({ left: c.leftPos }), c.tabHandle.css({ right: 0 })), "t" === c.tabLocation && (d.css({ top: "-" + e.containerHeight }), c.tabHandle.css({ bottom: "-" + e.tabHeight })), "b" === c.tabLocation && (d.css({
                            bottom: "-" + e.containerHeight,
                            position: "fixed"
                        }), c.tabHandle.css({ top: "-" + e.tabHeight })), ("l" === c.tabLocation || "r" === c.tabLocation) && d.css({
                            height: e.containerHeight,
                            top: c.topPos
                        }), "l" === c.tabLocation && (d.css({ left: "-" + e.containerWidth }), c.tabHandle.css({ right: "-" + e.tabWidth }), c.tabHandle.css(null != c.pathToTabImage ? { top: 0 } : { top: e.tabWidth })), "r" === c.tabLocation && (d.css({ right: "-" + e.containerWidth }), null != c.pathToTabImage && c.tabHandle.css({ left: "-" + e.tabWidth }), c.tabHandle.css({ top: 0 }), a("html").css("overflow-x", "hidden")), c.tabHandle.click(function (a) {
                            a.preventDefault();
                        });
                        var f = function f() {
                            "t" === c.tabLocation ? d.animate({ top: "-" + e.containerHeight }, c.speed).removeClass("open") : "l" === c.tabLocation ? d.animate({ left: "-" + e.containerWidth }, c.speed).removeClass("open") : "r" === c.tabLocation ? d.animate({ right: "-" + e.containerWidth }, c.speed).removeClass("open") : "b" === c.tabLocation && d.animate({ bottom: "-" + e.containerHeight }, c.speed).removeClass("open"), c.content_div.attr("aria-hidden", !0);
                        },
                            g = function g() {
                            "t" == c.tabLocation ? d.animate({ top: "-3px" }, c.speed).addClass("open") : "l" == c.tabLocation ? d.animate({ left: "-3px" }, c.speed).addClass("open") : "r" == c.tabLocation ? d.animate({ right: "-3px" }, c.speed).addClass("open") : "b" == c.tabLocation && d.animate({ bottom: "-3px" }, c.speed).addClass("open"), c.content_div.attr("aria-hidden", !1);
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
                    sideMenuWidget_button_span.css({ borderWidth: '4px 4px 0px 4px' });
                } else {
                    var rotate = sideMenuWidget_options.slidebutton_position == 'l' ? '270deg' : '-270deg';
                    sideMenuWidget_button.css({
                        transformOrigin: 'top left',
                        transform: 'rotate(' + rotate + ')',
                        backgroundColor: sideMenuWidget_options.slidebutton_bcolor,
                        textDecoration: 'none',
                        boxShadow: 'rgb(204, 204, 204) 0px 0px 5px'
                    });
                    sideMenuWidget_button_span.css({ borderWidth: '0px 4px 4px 4px' });
                }

                sideMenuWidget_button.append(sideMenuWidget_button_span);
                sideMenuWidget_div.tabSlideOut({
                    tabLocation: sideMenuWidget_options.slidebutton_position
                });

                sideMenuWidget_button.on('click', function (e) {
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

            sideMenuWidget_div.css({ 'width': sideMenuWidget_options.width, 'height': sideMenuWidget_options.height });

            var menuContent = '<link type="text/css" rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">';
            menuContent += '<div style="margin-left: 35px; padding: 25px">';
            menuContent += '<h2><strong>Try your search in</strong></h2>';
            menuContent += '<p><i class="fa fa-book" aria-hidden="true"></i> <a href="http://encore.coalliance.org/iii/encore/?lang=eng" target="_blank">Prospector</a></p>';
            menuContent += '<p><i class="fa fa-wpexplorer" aria-hidden="true"></i> <a href="http://du.idm.oclc.org/login?url=https://yewno.com/" target="_blank">Yewno</a></p>';
            menuContent += '<p><i class="fa fa-archive" aria-hidden="true"></i> <a href="https://duarchives.coalliance.org" target="_blank">DU Special Collections</a></p>';
            menuContent += '<p><i class="fa fa-university" aria-hidden="true"></i> <a href="http://digitalcommons.du.edu/" target="_blank">Digital Commons @ DU</a></p>';
            menuContent += '<br>';
            menuContent += '<h2><strong>Need Help?</strong></h2>';
            menuContent += '<p><i class="fa fa-question-circle" aria-hidden="true"></i> <a href="http://libraryhelp.du.edu/" target="_blank">Ask us!</a></p>';
            menuContent += '<p><i class="fa fa-phone" aria-hidden="true"></i> Research Center 303-871-2905</p>';
            menuContent += '<p><i class="fa fa-phone" aria-hidden="true"></i> Lending Desk 303-871-3707</p>';
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

        var modifyUserName = function modifyUserName() {

            var checkGuest = document.body.innerHTML.toString().search('user-name');

            if (checkGuest > -1) {
                var isGuest = angular.element(document.querySelector('.user-name'))[0].innerHTML;

                if (isGuest.indexOf('Guest') > -1) {
                    j('.user-name').text('Sign in');
                    clearInterval(timer1);
                    var timer2 = setInterval(function () {
                        modifyUserName();
                    }, 5000);
                }
            }
        };

        var timer1 = setInterval(function () {
            modifyUserName();
        }, 40);
    }

    //     document.getElementById("searchBar").addEventListener("onblur", function(e){
    //         console.log(e);
    //     });

    // window.buildExternalSearch = function() {
    //     var waitingTimer = window.setInterval(function() {
    //         // add Prospector, Google Scholar, and WorldCat
    //         var checkExists = document.getElementById("facets");
    //         if(checkExists != undefined) {
    //             var search_prospector_label = "Prospector";
    //             var prospector_search_url = "https://encore.coalliance.org/iii/encore/search/C__S";
    //             var search_google_scholar_label = "Google Scholar";
    //             var google_scholar_search_url = "https://scholar.google.com/scholar?hl=en&as_sdt=0%2C6&inst=10364086606605717788&q=";
    //             var search_worldcat_label = "WorldCat";
    //             var worldcat_search_url = "https://www.worldcat.org/search?q=";
    //             var search_string = "";
    //             if(document.getElementById("searchBar").value.length > 0) 
    //                 search_string = document.getElementById("searchBar").value;
    //             else if(document.getElementById("input_freeText0").value.length > 0 && document.getElementById("input_freeText1").value.length > 0 && document.getElementById("input_freeText2").value.length > 0) 
    //                 search_string = document.getElementById("input_freeText0").value + " " + document.getElementById("input_freeText1").value + " " + document.getElementById("input_freeText2").value;
    //                 var newsearchoptions = document.createElement('span');
    //                 newsearchoptions.innerHTML = '<div id="OtherPlacesToSearchContainer"><h2 class="sidebar-title">External Search</h2><ol class="EXLFacetsList EXLFacetsListPreview"><li><a href="'+prospector_search_url+encodeURIComponent(search_string)+'__Orightresult__U?lang=eng&suite=def" title="Search Prospector" target="_blank">'+search_prospector_label+'</a></li><li><a href="'+google_scholar_search_url+encodeURIComponent(search_string)+'" title="Search Google Scholar" target="_blank">'+search_google_scholar_label+'</a></li><li><a href="'+worldcat_search_url+encodeURIComponent(search_string)+'" title="Search WorldCat" target="_blank">'+search_worldcat_label+'</a></li></ol></div>';
    //                 document.getElementById("facets").getElementsByClassName("sidebar-section")[0].prepend(newsearchoptions);
    //                 clearInterval(waitingTimer);
    //         }
    //     }, 2000);
    // }

    // window.buildExternalSearch();

    console.log("PRIOMO!:" + document.getElementsByTagName('prm-logo'));

    /*----------below is the code for libchat-----------*/
    var s = document.createElement('script');
    s.id = 'localScript';
    s.src = 'https://v2.libanswers.com/load_chat.php?hash=4bea9f42f0f8ffb33bad66814d2589ea';
    document.body.appendChild(s);
    app.component('prmLogoAfter', {
        template: '<div id="libchat_4bea9f42f0f8ffb33bad66814d2589ea"></div>'
    });
    /*---------------libchat code ends here---------------*/
})();

!function (t, e) {
    "object" == (typeof exports === "undefined" ? "undefined" : _typeof2(exports)) && "object" == (typeof module === "undefined" ? "undefined" : _typeof2(module)) ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof2(exports)) ? exports.primoExploreGoogleAnalytics = e() : t.primoExploreGoogleAnalytics = e();
}("undefined" != typeof self ? self : undefined, function () {
    return function (t) {
        var e = {};function n(r) {
            if (e[r]) return e[r].exports;var i = e[r] = { i: r, l: !1, exports: {} };return t[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports;
        }return n.m = t, n.c = e, n.d = function (t, e, r) {
            n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r });
        }, n.r = function (t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 });
        }, n.t = function (t, e) {
            if (1 & e && (t = n(t)), 8 & e) return t;if (4 & e && "object" == (typeof t === "undefined" ? "undefined" : _typeof2(t)) && t && t.__esModule) return t;var r = Object.create(null);if (n.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t) for (var i in t) {
                n.d(r, i, function (e) {
                    return t[e];
                }.bind(null, i));
            }return r;
        }, n.n = function (t) {
            var e = t && t.__esModule ? function () {
                return t.default;
            } : function () {
                return t;
            };return n.d(e, "a", e), e;
        }, n.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e);
        }, n.p = "", n(n.s = 0);
    }([function (t, e, n) {
        n(1), t.exports = "googleAnalytics";
    }, function (t, e, n) {
        "use strict";
        n.r(e);n(2), n(4);function r(t) {
            var e = t.externalScriptURL,
                n = t.inlineScript,
                r = t.trackingId,
                i = t.target,
                a = "window.dataLayer = window.dataLayer || [];\n                          function gtag(){dataLayer.push(arguments);}\n                          gtag('js', new Date());\n                          gtag('config', '".concat(r, "');"),
                o = "https://www.googletagmanager.com/gtag/js?id=".concat(r);return { externalSource: void 0 === e ? o : e, inlineCode: n || a, target: i || "head" };
        }angular.module("googleAnalytics", ["angulartics", "angulartics.google.tagmanager"]).factory("gaInjectionService", ["googleAnalyticsConfig", function (t) {
            var e = Array.isArray(t) ? t.map(r) : [t].map(r);return { injectGACode: function injectGACode() {
                    e.forEach(function (t) {
                        var e = t.externalSource,
                            n = t.inlineCode,
                            r = t.target;if (null !== e) {
                            var i = document.createElement("script");i.src = e, document.querySelector(r).appendChild(i);
                        }var a = document.createElement("script");a.type = "text/javascript";try {
                            a.appendChild(document.createTextNode(n));
                        } catch (t) {
                            a.text = n;
                        }document.querySelector(r).appendChild(a);
                    });
                } };
        }]);
    }, function (t, e, n) {
        n(3), t.exports = "angulartics";
    }, function (t, e) {
        /**
         * @license Angulartics
         * (c) 2013 Luis Farzati http://angulartics.github.io/
         * License: MIT
         */
        !function (t, e) {
            "use strict";
            var n = window.angulartics || (window.angulartics = {});function r(t) {
                return ["a:", "button:", "button:button", "button:submit", "input:button", "input:submit"].indexOf(t.tagName.toLowerCase() + ":" + (t.type || "")) >= 0;
            }function i(t) {
                var e = t.slice(9);return null != e && e.length > 0 ? e.substring(0, 1).toLowerCase() + e.substring(1) : e;
            }n.waitForVendorCount = 0, n.waitForVendorApi = function (t, e, r, i, a) {
                a || n.waitForVendorCount++, i || (i = r, r = void 0), !Object.prototype.hasOwnProperty.call(window, t) || void 0 !== r && void 0 === window[t][r] ? setTimeout(function () {
                    n.waitForVendorApi(t, e, r, i, !0);
                }, e) : (n.waitForVendorCount--, i(window[t]));
            }, t.module("angulartics", []).provider("$analytics", function () {
                var e = this,
                    r = { pageTracking: { autoTrackFirstPage: !0, autoTrackVirtualPages: !0, trackRelativePath: !1, trackRoutes: !0, trackStates: !0, autoBasePath: !1, basePath: "", excludedRoutes: [], queryKeysWhitelisted: [], queryKeysBlacklisted: [], filterUrlSegments: [] }, eventTracking: {}, bufferFlushDelay: 1e3, trackExceptions: !1, optOut: !1, developerMode: !1 },
                    i = ["pageTrack", "eventTrack", "exceptionTrack", "transactionTrack", "setAlias", "setUsername", "setUserProperties", "setUserPropertiesOnce", "setSuperProperties", "setSuperPropertiesOnce", "incrementProperty", "userTimings", "clearCookies"],
                    a = {},
                    o = {},
                    s = {};function c(e, n, r) {
                    return o[e] || (o[e] = []), o[e].push(n), s[n] = r, function () {
                        if (!this.settings.optOut) {
                            var n = Array.prototype.slice.apply(arguments);return this.$inject(["$q", t.bind(this, function (r) {
                                return r.all(o[e].map(function (e) {
                                    var i = s[e] || {};if (i.async) {
                                        var a = r.defer(),
                                            o = t.copy(n);return o.unshift(a.resolve), e.apply(this, o), a.promise;
                                    }return r.when(e.apply(this, n));
                                }, this));
                            })]);
                        }
                    };
                }var u = { settings: r };u.setOptOut = function (t) {
                    this.settings.optOut = t, v();
                }, u.getOptOut = function () {
                    return this.settings.optOut;
                };var g = { $get: ["$injector", function (t) {
                        return f(t);
                    }], api: u, settings: r, virtualPageviews: function virtualPageviews(t) {
                        this.settings.pageTracking.autoTrackVirtualPages = t;
                    }, trackStates: function trackStates(t) {
                        this.settings.pageTracking.trackStates = t;
                    }, trackRoutes: function trackRoutes(t) {
                        this.settings.pageTracking.trackRoutes = t;
                    }, excludeRoutes: function excludeRoutes(t) {
                        this.settings.pageTracking.excludedRoutes = t;
                    }, queryKeysWhitelist: function queryKeysWhitelist(t) {
                        this.settings.pageTracking.queryKeysWhitelisted = t;
                    }, queryKeysBlacklist: function queryKeysBlacklist(t) {
                        this.settings.pageTracking.queryKeysBlacklisted = t;
                    }, filterUrlSegments: function filterUrlSegments(t) {
                        this.settings.pageTracking.filterUrlSegments = t;
                    }, firstPageview: function firstPageview(t) {
                        this.settings.pageTracking.autoTrackFirstPage = t;
                    }, withBase: function withBase(e) {
                        this.settings.pageTracking.basePath = e ? t.element(document).find("base").attr("href") : "";
                    }, withAutoBase: function withAutoBase(t) {
                        this.settings.pageTracking.autoBasePath = t;
                    }, trackExceptions: function trackExceptions(t) {
                        this.settings.trackExceptions = t;
                    }, developerMode: function developerMode(t) {
                        this.settings.developerMode = t;
                    } };function l(e, n, i) {
                    if (!r.developerMode) {
                        u[e] = c(e, n, i);var o = r[e],
                            s = o ? o.bufferFlushDelay : null,
                            g = null !== s ? s : r.bufferFlushDelay;t.forEach(a[e], function (t, e) {
                            !function (t, e) {
                                e ? setTimeout(t, e) : t();
                            }(function () {
                                n.apply(this, t);
                            }, e * g);
                        });
                    }
                }var f = function f(e) {
                    return t.extend(u, { $inject: e.invoke });
                };function p(t) {
                    var e = "register" + t.replace(/^./, function (t) {
                        return t.toUpperCase();
                    });g[e] = function (e, n) {
                        l(t, e, n);
                    }, u[t] = c(t, function (t) {
                        return function () {
                            n.waitForVendorCount && (a[t] || (a[t] = []), a[t].push(arguments));
                        };
                    }(t));
                }function d(n, r, i) {
                    for (var a in t.forEach(r, i), n) {
                        e[a] = n[a];
                    }
                }var v = function v() {
                    d(g, i, p);
                };d(g, i, p);
            }).run(["$rootScope", "$window", "$analytics", "$injector", function (e, n, r, i) {
                function a(t, e, n) {
                    if (/\?/.test(t) && e.length > 0) {
                        for (var r = t.split("?"), i = r[0], a = r[1].split("&"), o = [], s = 0; s < e.length; s++) {
                            for (var c = e[s], u = 0; u < a.length; u++) {
                                (c instanceof RegExp && c.test(a[u]) || a[u].indexOf(c) > -1) && o.push(a[u]);
                            }
                        }var g = "white" == n ? o : function (t, e) {
                            for (var n = [], r = 0; r < t.length; r++) {
                                -1 === e.indexOf(t[r]) && n.push(t[r]);
                            }return n;
                        }(a, o);return g.length > 0 ? i + "?" + g.join("&") : i;
                    }return t;
                }function o(t, e) {
                    (function (t) {
                        for (var e = 0; e < r.settings.pageTracking.excludedRoutes.length; e++) {
                            var n = r.settings.pageTracking.excludedRoutes[e];if (n instanceof RegExp && n.test(t) || t.indexOf(n) > -1) return !0;
                        }return !1;
                    })(t) || (t = function (t) {
                        var e = r.settings.pageTracking.filterUrlSegments;if (e.length > 0) {
                            for (var n = t.split("?"), i = n[0], a = i.split("/"), o = 0; o < e.length; o++) {
                                for (var s = e[o], c = 1; c < a.length; c++) {
                                    (s instanceof RegExp && s.test(a[c]) || a[c].indexOf(s) > -1) && (a[c] = "FILTERED");
                                }
                            }return a.join("/");
                        }return t;
                    }(t = function (t) {
                        return a(t, r.settings.pageTracking.queryKeysBlacklisted, "black");
                    }(t = function (t) {
                        return a(t, r.settings.pageTracking.queryKeysWhitelisted, "white");
                    }(t))), r.pageTrack(t, e));
                }if (r.settings.pageTracking.autoTrackFirstPage) {
                    var s = !0;if (i.has("$route")) {
                        var c = i.get("$route");if (c) for (var u in c.routes) {
                            s = !1;break;
                        } else null === c && (s = !1);
                    } else if (i.has("$state")) {
                        var g = i.get("$state");g.get().length > 1 && (s = !1);
                    }s && (r.settings.pageTracking.autoBasePath && (r.settings.pageTracking.basePath = n.location.pathname), i.invoke(["$location", function (t) {
                        if (r.settings.pageTracking.trackRelativePath) {
                            var e = r.settings.pageTracking.basePath + t.url();o(e, t);
                        } else o(t.absUrl(), t);
                    }]));
                }if (r.settings.pageTracking.autoTrackVirtualPages) {
                    r.settings.pageTracking.autoBasePath && (r.settings.pageTracking.basePath = n.location.pathname + "#");var s = !0;if (r.settings.pageTracking.trackRoutes && i.has("$route")) {
                        var c = i.get("$route");if (c) for (var u in c.routes) {
                            s = !1;break;
                        } else null === c && (s = !1);e.$on("$routeChangeSuccess", function (t, e) {
                            e && (e.$$route || e).redirectTo || i.invoke(["$location", function (t) {
                                var e = r.settings.pageTracking.basePath + t.url();o(e, t);
                            }]);
                        });
                    }r.settings.pageTracking.trackStates && (i.has("$state") && !i.has("$transitions") && (s = !1, e.$on("$stateChangeSuccess", function (t, e) {
                        i.invoke(["$location", function (t) {
                            var e = r.settings.pageTracking.basePath + t.url();o(e, t);
                        }]);
                    })), i.has("$state") && i.has("$transitions") && (s = !1, i.invoke(["$transitions", function (t) {
                        t.onSuccess({}, function (t) {
                            var e = t.options();e.notify && i.invoke(["$location", function (t) {
                                var e = r.settings.pageTracking.basePath + t.url();o(e, t);
                            }]);
                        });
                    }]))), s && e.$on("$locationChangeSuccess", function (t, e) {
                        e && (e.$$route || e).redirectTo || i.invoke(["$location", function (t) {
                            if (r.settings.pageTracking.trackRelativePath) {
                                var e = r.settings.pageTracking.basePath + t.url();o(e, t);
                            } else o(t.absUrl(), t);
                        }]);
                    });
                }r.settings.developerMode && t.forEach(r, function (t, e) {
                    "function" == typeof t && (r[e] = function () {});
                });
            }]).directive("analyticsOn", ["$analytics", function (e) {
                return { restrict: "A", link: function link(n, a, o) {
                        var s = o.analyticsOn || "click",
                            c = {};t.forEach(o.$attr, function (t, e) {
                            (function (t) {
                                return "analytics" === t.substr(0, 9) && -1 === ["On", "Event", "If", "Properties", "EventType"].indexOf(t.substr(9));
                            })(e) && (c[i(e)] = o[e], o.$observe(e, function (t) {
                                c[i(e)] = t;
                            }));
                        }), t.element(a[0]).on(s, function (i) {
                            var s,
                                u = o.analyticsEvent || (r(s = a[0]) ? s.innerText || s.value : s.id || s.name || s.tagName);c.eventType = i.type, o.analyticsIf && !n.$eval(o.analyticsIf) || (o.analyticsProperties && t.extend(c, n.$eval(o.analyticsProperties)), e.eventTrack(u, c));
                        });
                    } };
            }]).config(["$provide", function (t) {
                t.decorator("$exceptionHandler", ["$delegate", "$injector", function (t, e) {
                    return function (n, r) {
                        var i = t(n, r),
                            a = e.get("$analytics");return a.settings.trackExceptions && a.exceptionTrack(n, r), i;
                    };
                }]);
            }]);
        }(angular);
    }, function (t, e, n) {
        n(5), t.exports = "angulartics.google.tagmanager";
    }, function (t, e) {
        /**
         * @license Angulartics v0.19.2
         * (c) 2013 Luis Farzati http://luisfarzati.github.io/angulartics
         * Google Tag Manager Plugin Contributed by http://github.com/danrowe49
         * License: MIT
         */
        !function (t) {
            "use strict";
            t.module("angulartics.google.tagmanager", ["angulartics"]).config(["$analyticsProvider", function (t) {
                t.settings.ga = { userId: null }, t.registerPageTrack(function (e) {
                    (window.dataLayer = window.dataLayer || []).push({ event: "content-view", "content-name": e, userId: t.settings.ga.userId });
                }), t.registerEventTrack(function (e, n) {
                    n = n || {}, (window.dataLayer = window.dataLayer || []).push({ event: n.event || "interaction", target: n.category, action: e, "target-properties": n.label, value: n.value, "interaction-type": n.noninteraction, userId: t.settings.ga.userId });
                }), t.registerSetUsername(function (e) {
                    t.settings.ga.userId = e;
                });
            }]);
        }(angular);
    }]).default;
});
//# sourceMappingURL=index.js.map
})();