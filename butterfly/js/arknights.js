var dust = function() {
    this.x = 50,
        this.y = 50,
        this.vx = 2 * Math.random() + 2,
        this.vy = 2 * Math.random(),
        this.color = "#becfe5",
        this.shadowBlur = 3 * Math.random(),
        this.shadowX = 2 * Math.random() - 1,
        this.shadowY = 2 * Math.random() - 1,
        this.radiusX = 3 * Math.random(),
        this.radiusY = 3 * Math.random(),
        this.rotation = Math.PI * Math.floor(2 * Math.random())
},
canvasDust = function() {
    function t(t) {
        var e = this;
        this.width = 300,
            this.height = 300,
            this.dustQuantity = 50, this.dustArr = [];
        var i = document.getElementById(t);
        if (!i) throw new Error("canvasID 无效");
        this.canvas = i,
            this.ctx = i.getContext("2d"),
            this.build(),
            window.addEventListener("resize", (function() {
                return e.resize()
            }))
    }
    return t.prototype.build = function() {
        var e = this;
        if (this.resize(), this.ctx) {
            for (var i = 0, o = t.getPoint(this.dustQuantity); i < o.length; i++) {
                var s = o[i],
                    n = new dust;
                this.buildDust(s[0], s[1], n), this.dustArr.push(n)
            }
            setInterval((function() {
                e.play()
            }), 40)
        }
    }, t.prototype.play = function() {
        var t, e = this.dustArr;
        null === (t = this.ctx) || void 0 === t || t.clearRect(0, 0, this.width, this.height);
        for (var i = 0, o = e; i < o.length; i++) {
            var s = o[i];
            if (s.x < 0 || s.y < 0) {
                var n = this.width,
                    r = Math.floor(Math.random() * window.innerHeight);
                s.x = n, s.y = r, this.buildDust(n, r, s)
            } else {
                n = s.x - s.vx, r = s.y - s.vy;
                this.buildDust(n, r, s)
            }
        }
    }, t.prototype.buildDust = function(t, e, i) {
        var o = this.ctx;
        t && (i.x = t), e && (i.y = e), o && (o.beginPath(), o.shadowBlur = i.shadowBlur, o.shadowColor = i.color, o.shadowOffsetX = i.shadowX, o.shadowOffsetY = i.shadowY, o.ellipse(i.x, i.y, i.radiusX, i.radiusY, i.rotation, 0, 2 * Math.PI), o.closePath(), o.fillStyle = i.color, o.fill())
    }, t.prototype.resize = function() {
        var t = this.canvas,
            e = window.innerWidth,
            i = window.innerHeight;
        this.width = e, this.height = i, this.dustQuantity = Math.floor((e + i) / 38), void 0 !== t && (t.width = e, t.height = i)
    }, t.getPoint = function(t) {
        void 0 === t && (t = 1);
        for (var e = [], i = 0; i < t; i++) {
            var o = Math.floor(Math.random() * window.innerWidth),
                s = Math.floor(Math.random() * window.innerHeight);
            e.push([o, s])
        }
        return e
    }, t
}(),
indexs = function() {
    function t() {
        var t = this;
        this.tocLink = document.querySelectorAll(".toc-link"), this.index = [], this.totop = document.querySelector("#to-top"), this.scrollID = null, this.scrolling = 0, this.tocLink.length > 0 && this.setItem(this.tocLink.item(0)), document.addEventListener("scroll", (function() {
            if (t.tocLink = document.querySelectorAll(".toc-link"), t.tocLink.length > 0) {
                t.headerLink = document.querySelectorAll(".headerlink"), t.postContent = document.querySelector("#post-content");
                document.querySelector("#to-top");
                ++t.scrolling, null == t.scrollID && t.tocLink.length > 0 && (t.scrollID = setInterval(t.modifyIndex.bind(t), 50)), setTimeout((function() {
                    if (0 == --t.scrolling) {
                        clearInterval(t.scrollID), t.scrollID = null;
                        var e = document.querySelector("#to-top");
                        null !== t.totop && document.querySelector("#post-title").getBoundingClientRect().top < -200 ? (e.style.display = "", setTimeout((function() {
                            return e.style.opacity = "1"
                        }), 300)) : (e.style.opacity = "0", setTimeout((function() {
                            return e.style.display = "none"
                        }), 300))
                    }
                }), 200)
            }
        }), {
            passive: !0
        })
    }
    return t.prototype.setItem = function(t) {
        t.classList.add("active");
        for (var e = t.parentElement.children, i = 0; i < e.length; i++) {
            var o = e.item(i);
            if (o.classList.contains("toc-child")) {
                o.classList.add("has-active");
                break
            }
        }
        for (var s = t.parentElement;
            "toc" != s.classList[0]; s = s.parentElement) "toc-child" == s.classList[0] && s.classList.add("has-active")
    }, t.prototype.reset = function() {
        var t = document.querySelectorAll("#toc-div .active"),
            e = document.querySelectorAll("#toc-div .has-active");
        t.forEach((function(t) {
            t.classList.remove("active")
        })), e.forEach((function(t) {
            t.classList.remove("has-active")
        }))
    }, t.prototype.modifyIndex = function() {
        var t = this;
        this.headerLink.forEach((function(e) {
            t.index.push(e.getBoundingClientRect().top)
        })), this.reset();
        for (var e = 0; e < this.tocLink.length; ++e) {
            var i = this.tocLink.item(e);
            if (e + 1 == this.index.length || this.index[e + 1] > 150 && (this.index[e] <= 150 || 0 == e)) {
                this.setItem(i);
                break
            }
        }
        this.index = []
    }, t.prototype.scrolltop = function() {
        var t = this;
        window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth"
        }), document.querySelector("#to-top").style.opacity = "0", setTimeout((function() {
            return t.totop.style.display = "none"
        }), 300)
    }, t
}(),
codes = function() {
    function t() {}
    return t.prototype.reverse = function(t, e, i) {
        var o = t.parentElement;
        o.classList.contains(e) ? (o.classList.remove(e), o.classList.add(i)) : (o.classList.remove(i), o.classList.add(e))
    }, t.prototype.doAsMermaid = function(t) {
        var e = t.querySelector(".mermaid");
        t.outerHTML = '<div class="highlight mermaid">' + e.innerText + "</div>"
    }, t.prototype.resetName = function(t) {
        return "plaintext" == t ? "TEXT" : "cs" == t ? "C#" : t.toUpperCase()
    }, t.prototype.doAsCode = function(t) {
        var e = this,
            i = t.classList[1],
            o = t.querySelector(".gutter").children[0].childElementCount >> 1;
        t.classList.add(o < 16 ? "open" : "fold"), t.innerHTML = '<span class="code-header"><span class="code-title">        <div class="code-icon"></div>' + this.resetName(i) + " 共 " + o + ' 行</span>        <span class="code-header-tail">          <button class="code-copy"></button>          <span class="code-space">展开</span>        </span>    </span></span>    <div class="code-box">' + t.innerHTML + "</div>", t.querySelector(".code-copy").addEventListener("click", (function(e) {
            var i = e.target;
            navigator.clipboard.writeText(t.querySelector("code").innerText), i.classList.add("copied"), setTimeout((function() {
                return i.classList.remove("copied")
            }), 1200)
        })), t.querySelector(".code-header").addEventListener("click", (function(t) {
            t.target.classList.contains("code-copy") || e.reverse(t.currentTarget, "open", "fold")
        }))
    }, t.prototype.findCode = function() {
        var t = this,
            e = document.querySelectorAll(".highlight");
        null !== e && e.forEach((function(e) {
            e.classList.contains("mermaid") || null !== e.querySelector(".code-header") || (null !== e.querySelector(".mermaid") ? t.doAsMermaid(e) : t.doAsCode(e))
        }))
    }, t
}(),
cursors = function() {
    function t() {
        var t = this;
        this.first = !0, this.outer = document.getElementById("cursor-outer").style, this.effecter = document.getElementById("cursor-effect").style, this.scale = 0, this.opacity = 0, this.last = 0, this.moveIng = !1, this.fadeIng = !1, this.attention = "a,input,button,.admonition,.code-header,.gt-user-inner,.gt-header-textarea,.navBtnIcon", this.effecter.transform = "translate(-50%, -50%) scale(0)", this.effecter.opacity = "1", window.addEventListener("mousemove", (function(e) {
            return t.reset(e)
        }), {
            passive: !0
        }), window.addEventListener("click", (function(e) {
            return t.Aeffect(e)
        }), {
            passive: !0
        }), this.pushHolders(), new MutationObserver(this.pushHolders.bind(this)).observe(document, {
            childList: !0,
            subtree: !0
        })
    }
    return t.prototype.move = function(t) {
        if (void 0 !== this.now) {
            var e = this.outer.left,
                i = this.outer.top,
                o = Number(e.substring(0, e.length - 2)),
                s = Number(i.substring(0, i.length - 2)),
                n = .3 * (this.now.x - o),
                r = .3 * (this.now.y - s);
            if (o += n, s += r, this.outer.left = o.toFixed(2) + "px", this.outer.top = s.toFixed(2) + "px", Math.abs(n) > .2 || Math.abs(r) > .2) {
                for (; t - this.last < 10;) this.last = t;
                window.requestAnimationFrame(this.move.bind(this))
            } else this.moveIng = !1
        }
    }, t.prototype.reset = function(t) {
        this.moveIng || (this.moveIng = !0, window.requestAnimationFrame(this.move.bind(this))), this.now = t, this.first && (this.first = !1, this.outer.left = String(this.now.x) + "px", this.outer.top = String(this.now.y) + "px")
    }, t.prototype.Aeffect = function(t) {
        var e = this;
        if (0 == this.fadeIng) {
            this.fadeIng = !0, this.effecter.left = String(t.x) + "px", this.effecter.top = String(t.y) + "px", this.effecter.transition = "transform .5s cubic-bezier(0.22, 0.61, 0.21, 1), opacity .5s cubic-bezier(0.22, 0.61, 0.21, 1)", this.effecter.transform = "translate(-50%, -50%) scale(1)", this.effecter.opacity = "0", setTimeout((function() {
                e.fadeIng = !1, e.effecter.transition = "", e.effecter.transform = "translate(-50%, -50%) scale(0)", e.effecter.opacity = "1"
            }), 500)
        }
    }, t.prototype.hold = function() {
        this.outer.height = "48px", this.outer.width = "48px", this.outer.background = "rgba(255, 182, 185, 0.5)"
    }, t.prototype.relax = function() {
        this.outer.height = "36px", this.outer.width = "36px", this.outer.background = "unset"
    }, t.prototype.pushHolder = function(t) {
        var e = this;
        t.forEach((function(t) {
            t.classList.contains("is--active") || (t.addEventListener("mouseover", (function() {
                return e.hold()
            }), {
                passive: !0
            }), t.addEventListener("mouseout", (function() {
                return e.relax()
            }), {
                passive: !0
            }))
        }))
    }, t.prototype.pushHolders = function() {
        this.pushHolder(document.querySelectorAll(this.attention))
    }, t
}(),
slides = function() {
    function t() {
        var t = this;
        this.nav = document.querySelector("nav"), this.button = this.nav.querySelector(".navBtnIcon"), this.closeSearch = !1, this.button.addEventListener("mousedown", (function() {
            document.querySelector(".search") && (t.closeSearch = !0)
        })), this.button.onclick = function() {
            t.closeSearch ? t.closeSearch = !1 : "expanded" === t.nav.classList[0] ? t.nav.classList.remove("expanded") : t.nav.classList.add("expanded")
        }, document.addEventListener("pjax:success", this.relabel), window.onload = this.relabel.bind(this)
    }
    return t.prototype.relabel = function() {
        void 0 === this.nav && (this.nav = document.querySelector("nav"));
        var t, e = this.nav.querySelectorAll(".navItem"),
            i = 0;
        e.forEach((function(e) {
            var o = e,
                s = o.querySelector("a");
            if (null !== s) {
                var n = s.href;
                o.classList.remove("active"), n.length > i && null !== document.URL.match(n) && (i = n.length, t = o)
            }
        })), null !== t && t.classList.add("active")
    }, t
}(),
index = new indexs,
code = new codes,
cursor = new cursors;
new slides, new canvasDust("canvas-dust");