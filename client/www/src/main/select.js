import jQuery from 'jquery';

"use strict";

/*!
 * Bootstrap-fullscreen-select v1.5.1 (http://craftpip.github.io/bootstrap-fullscreen-select/)
 * Author: boniface pereira
 * Website: www.craftpip.com
 * Contact: hey@craftpip.com
 *
 * Copyright 2013-2014 bootstrap-select
 * Licensed under MIT (https://github.com/craftpip/bootstrap-fullscreen-select/blob/master/LICENSE)
 */
if (typeof jQuery === "undefined") {
    throw new Error("Mobileselect's JavaScript requires jQuery")
}(function(b) {
    b.fn.mobileSelect = function(c) {
        var d = b(this);
        if (!d.length) {
            return "no elements to process"
        }
        if (!c) {
            c = {}
        }
        if (typeof c === "string") {
            if (c === "destroy") {
                d.each(function(f, e) {
                    var g = b(e).attr("data-msid");
                    b.mobileSelect.elements[g].destroy();
                    delete b.mobileSelect.elements[g]
                })
            }
            if (c === "sync" || c === "refresh") {
                d.each(function(f, e) {
                    var g = b(e).attr("data-msid");
                    b.mobileSelect.elements[g].refresh()
                })
            }
            if (c === "hide") {
                d.each(function(f, e) {
                    var g = b(e).attr("data-msid");
                    b.mobileSelect.elements[g].hide()
                })
            }
            if (c === "show") {
                d.each(function(f, e) {
                    var g = b(e).attr("data-msid");
                    b.mobileSelect.elements[g].show()
                })
            }
            return
        }
        if (b.mobileSelect.defaults) {
            b.extend(b.fn.mobileSelect.defaults, b.mobileSelect.defaults)
        }
        c = b.extend({}, b.fn.mobileSelect.defaults, c);
        d.each(function(g, f) {
            var e = b(f);
            if (e[0].tagName !== "SELECT") {
                console.warn("Sorry, cannot initialized a " + e[0].tagName + " element");
                return true
            }
            if (e.attr("data-msid") !== undefined) {
                //console.error("This element is already Initialized");
                return true
            }
            var j = Math.floor(Math.random() * 999999);
            e.attr("data-msid", j);
            var h = new a(f, c);
            b.mobileSelect.elements[j] = h
        })
    };
    var a = function(d, c) {
        this.$e = b(d);
        b.extend(this, c);
        this.init()
    };
    a.prototype = {
        init: function() {
            this._setUserOptions();
            this._extractOptions();
            this._buildHTML();
            this._bindEvents()
        },
        _buildHTML: function() {
            if (this.$e.attr("data-triggerOn") === undefined) {
                if (this.$e.attr("data-style") !== undefined) {
                    this.style = this.$e.attr("data-style")
                }
                var c = this.$e.attr("disabled") || "";
                this.$e.before('<button class="btn ' + this.style + ' btn-mobileSelect-gen" ' + c + '><span class="text"></span> <span class="caret"></span></button>');
                this.$triggerElement = this.$e.prev();
                this.$e.hide()
            } else {
                this.$triggerElement = b(this.$e.attr("data-triggerOn"))
            }
            this.$c = b('<div class="mobileSelect-container"></div>').addClass(this.theme).appendTo("body");
            this.$c.html(b.fn.mobileSelect.defaults.template);
            this.$c.children("div").css({
                "-webkit-transition": "all " + this.animationSpeed / 1000 + "s",
                transition: "all " + this.animationSpeed / 1000 + "s"
            }).css(this.padding).addClass("anim-" + this.animation);
            this.$c.find(".mobileSelect-title").html(this.title).end().find(".mobileSelect-savebtn").html(this.buttonSave).end().find(".mobileSelect-clearbtn").html(this.buttonClear).end().find(".mobileSelect-cancelbtn").html(this.buttonCancel).end();
            this.$listcontainer = this.$c.find(".list-container");
            if (!this.isMultiple) {
                this.$c.find(".mobileSelect-clearbtn").remove()
            } else {
                this.$listcontainer.data("multiple", "true")
            }
            this._appendOptionsList()
        },
        _appendOptionsList: function() {
            this.$listcontainer.html("");
            var c = this;
            var d = "";
            b.each(this.options, function(g, f) {
                if (f.group && f.group !== d) {
                    if (f.groupDisabled) {
                        var e = "disabled"
                    }
                    c.$listcontainer.append('<span class="mobileSelect-group" ' + e + ">" + f.group + "</span>");
                    d = f.group
                }
                if (f.groupDisabled || f.disabled) {
                    var e = "disabled"
                }
                c.$listcontainer.append('<a href="#" class="mobileSelect-control" ' + e + ' data-value="' + f.value + '">' + f.text + "</a>")
            });
            this.sync();
            this._updateBtnCount()
        },
        _updateBtnCount: function() {
            if (this.$triggerElement.is("button") && this.$triggerElement.hasClass("btn-mobileSelect-gen")) {
                var d = this.$triggerElement.find(".text"),
                    c = this.$e.val();
                if (c === null) {
                    d.html("Nothing selected");
                    return false
                }
                if (this.isMultiple) {
                    if (c.length === 1) {
                        d.html(c)
                    } else {
                        d.html(c.length + " items selected")
                    }
                } else {
                    d.html(c)
                }
            }
        },
        _bindEvents: function() {
            var c = this;
            this.$triggerElement.on("click", function() {
                c.show()
            });
            this.$c.find(".mobileSelect-savebtn").on("click", function(d) {
                d.preventDefault();
                c.syncR();
                c.hide()
            });
            this.$c.find(".mobileSelect-clearbtn").on("click", function(d) {
                d.preventDefault();
                c.$listcontainer.find(".selected").removeClass("selected");
                c.syncR();
                c.hide()
            });
            this.$c.find(".mobileSelect-cancelbtn").on("click", function(d) {
                d.preventDefault();
                c.hide()
            });
            this.$c.find(".mobileSelect-control").on("click", function(f) {
                f.preventDefault();
                var d = b(this);
                if (d.attr("disabled") == "disabled") {
                    return false
                }
                if (c.isMultiple) {
                    d.toggleClass("selected")
                } else {
                    d.siblings().removeClass("selected").end().addClass("selected")
                }
                c.syncR();
                c.hide()
            })
        },
        _unbindEvents: function() {
            this.$triggerElement.unbind("click");
            this.$c.find(".mobileSelect-clearbtn").unbind("click");
            this.$c.find(".mobileSelect-cancelbtn").unbind("click");
            this.$c.find(".mobileSelect-control").unbind("click")
        },
        sync: function() {
            var d = this.$e.val();
            if (!this.isMultiple) {
                d = [d]
            }
            this.$c.find("a").removeClass("selected");
            for (var c in d) {
                this.$c.find('a[data-value="' + d[c] + '"]').addClass("selected")
            }
        },
        syncR: function() {
            var c = [];
            this.$c.find(".selected").each(function() {
                c.push(b(this).data("value"))
            });
            this.$e.val(c)
        },
        hide: function() {
            this.$c.children("div").addClass("anim-" + this.animation);
            var c = this;
            this._updateBtnCount();
            setTimeout(function() {
                c.$c.hide();
                b("body").removeClass("mobileSelect-noscroll");
                c.onClose.apply(c.$e)
            }, this.animationSpeed)
        },
        show: function() {
            this.$c.show();
            this.sync();
            b("body").addClass("mobileSelect-noscroll");
            var c = this;
            setTimeout(function() {
                c.$c.children("div").removeClass(b.mobileSelect.animations.join(" "))
            }, 10);
            this.onOpen.apply(this.$e)
        },
        _setUserOptions: function() {
            this.isMultiple = this.$e.attr("multiple") ? true : false;
            if (this.$e.data("title") !== undefined) {
                this.title = this.$e.data("title")
            }
            if (this.$e.data("animation") !== undefined) {
                this.animation = this.$e.data("animation")
            }
            if (this.$e.data("animation-speed") !== undefined) {
                this.animationSpeed = this.$e.data("animation-speed")
            }
            if (this.$e.data("padding") !== undefined) {
                this.padding = this.$e.data("padding")
            }
            if (this.$e.data("btntext-save") !== undefined) {
                this.buttonSave = this.$e.data("btntext-save")
            }
            if (this.$e.data("btntext-clear") !== undefined) {
                this.buttonClear = this.$e.data("btntext-clear")
            }
            if (this.$e.data("btntext-cancel") !== undefined) {
                this.buttonCancel = this.$e.data("btntext-cancel")
            }
            if (this.$e.data("theme") !== undefined) {
                this.theme = this.$e.data("theme")
            }
            if (this.animation === "none") {
                this.animationSpeed = 0
            }
        },
        _extractOptions: function() {
            var c = [];
            b.each(this.$e.find("option"), function(g, d) {
                var h = b(d);
                if (h.text()) {
                    if (h.parent().is("optgroup")) {
                        var e = h.parent().attr("label");
                        var f = h.parent().prop("disabled")
                    } else {
                        var e = false;
                        var f = false
                    }
                    c.push({
                        value: h.val(),
                        text: b.trim(h.text()),
                        disabled: h.prop("disabled"),
                        group: e,
                        groupDisabled: f
                    })
                }
            });
            this.options = c
        },
        destroy: function() {
            this.$e.removeAttr("data-msid");
            this._unbindEvents();
            this.$triggerElement.remove();
            this.$c.remove();
            this.$e.show();
            console.log("done ")
        },
        refresh: function() {
            this._extractOptions();
            this._appendOptionsList();
            this._unbindEvents();
            this._bindEvents()
        }
    };
    b.mobileSelect = {
        elements: {},
        animations: ["anim-top", "anim-bottom", "anim-left", "anim-right", "anim-opacity", "anim-scale", "anim-zoom", "anim-none"]
    };
    b.fn.mobileSelect.defaults = {
        template: '<div><div class="list-container"></div><div class="mobileSelect-buttons"></div></div>',
        //title: "Select an option",
        buttonSave: "Save",
        buttonClear: "Clear",
        buttonCancel: "Cancel",
        padding: {
            top: "20px",
            left: "20px",
            right: "20px",
            bottom: "20px"
        },
        animation: "scale",
        animationSpeed: 400,
        theme: "white",
        onOpen: function() {},
        onClose: function() {},
        style: "btn-default"
    }
})(jQuery);