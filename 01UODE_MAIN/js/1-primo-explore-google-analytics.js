    /*
     * https://github.com/NYULibraries/primo-explore-google-analytics
     */
    !function (t, e) {
        "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? exports.primoExploreGoogleAnalytics = e() : t.primoExploreGoogleAnalytics = e();
    }("undefined" != typeof self ? self : this, function () {
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

     
     