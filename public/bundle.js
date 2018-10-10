! function() {
    function e(t, n, r) {
        function o(a, s) { if (!n[a]) { if (!t[a]) { var u = "function" == typeof require && require; if (!s && u) return u(a, !0); if (i) return i(a, !0); var c = new Error("Cannot find module '" + a + "'"); throw c.code = "MODULE_NOT_FOUND", c } var V = n[a] = { exports: {} };
                t[a][0].call(V.exports, function(e) { var n = t[a][1][e]; return o(n || e) }, V, V.exports, e, t, n, r) } return n[a].exports } for (var i = "function" == typeof require && require, a = 0; a < r.length; a++) o(r[a]); return o } return e }()({
    1: [function(e, t, n) {
        function r() { var e = u();
            V(function(t) { o(e, !t) }, e) }

        function o(e, t) {
            function n() { var e = m.shape[0],
                    t = m.shape[1];
                p.save(), p.scale(m.scale, m.scale), p.clearRect(0, 0, e, t); var n = a.frequencies(),
                    r = l(u, n, 40, 100);
                p.beginPath(); var o = Math.min(e, t) / 4 * r;
                p.arc(e / 2, t / 2, o, 0, 2 * Math.PI), p.fill(), p.restore() } var r = ["demo/elliot_yammin.mp3", "demo/tamia.ogg"],
                o = i(r, { context: e, buffer: !0, loop: !0 }),
                a = s(o.node, o.context, { stereo: !1 }),
                u = a.analyser;
            o.once("decoding", function(e) { d.innerText = "Decoding..." }), o.on("end", function() { console.log("Audio ended") }), o.on("error", function(e) { console.error(e.message), d.innerText = "Error loading audio." }), o.on("load", function() { d.style.display = "none", console.log("Source:", o.element ? "MediaElement" : "Buffer"), console.log("Playing", Math.round(o.duration) + "s of audio..."), o.play(), m.on("tick", n), m.start() }); var c = function() { o.playing ? o.pause() : o.play(), o.playing ? h.style.display = "none" : (h.textContent = "Paused", h.style.display = "block") };
            window.addEventListener("click", c) } var i = e("../"),
            a = e("canvas-loop"),
            s = e("web-audio-analyser"),
            u = e("ios-safe-audio-context"),
            c = e("detect-audio-autoplay"),
            V = e("detect-media-element-source"),
            l = e("analyser-frequency-average"),
            A = e("tap-event"),
            f = document.querySelector("canvas"),
            p = f.getContext("2d"),
            d = document.querySelector(".loading"),
            h = document.querySelector(".play"),
            m = a(f, { scale: window.devicePixelRatio });
        c(function(e) { if (e) r();
            else { h.style.display = "block", d.style.display = "none"; var t = A(function(e) { window.removeEventListener("touchstart", t), e.preventDefault(), d.style.display = "block", h.style.display = "none", r() });
                window.addEventListener("touchstart", t) } }) }, { "../": 2, "analyser-frequency-average": 10, "canvas-loop": 17, "detect-audio-autoplay": 21, "detect-media-element-source": 22, "ios-safe-audio-context": 28, "tap-event": 40, "web-audio-analyser": 42 }],
    2: [function(e, t, n) {
        function r(e, t) { if (!e) throw new TypeError("must specify a src parameter"); return t = t || {}, t.buffer ? o(e, t) : i(e, t) } var o = e("./lib/buffer-source"),
            i = e("./lib/media-source");
        t.exports = r }, { "./lib/buffer-source": 4, "./lib/media-source": 7 }],
    3: [function(e, t, n) {
        function r() { return new(window.AudioContext || window.webkitAudioContext) } t.exports = r }, {}],
    4: [function(e, t, n) {
        (function(n) {
            function r(e, t) {
                function r() { p.emit("end"), w = !1, y = 0 }

                function V() { l && l.disconnect() } t = t || {}; var l, A, f, p = new s,
                    d = t.context || i(),
                    h = d.createGain(),
                    m = null,
                    v = null,
                    y = 0,
                    w = !1,
                    g = t.loop;
                p.play = function() { if (!w) { w = !0, !1 !== t.autoResume && c(p.context), V(), l = d.createBufferSource(), l.connect(p.node), l.onended = r, A && (l.buffer = A), g && (l.loop = !0, "number" == typeof t.loopStart && (l.loopStart = t.loopStart), "number" == typeof t.loopEnd && (l.loopEnd = t.loopEnd)), f && y > f && (y %= f); var e = y;
                        l.start(0, e), m = u() } }, p.pause = function() { w && (w = !1, l.onended = null, l.stop(0), v = u(), y += (v - m) / 1e3) }, p.stop = function() { p.pause(), r() }, p.dispose = function() { V(), A = null }, p.node = h, p.context = d, Object.defineProperties(p, { duration: { enumerable: !0, configurable: !0, get: function() { return f } }, playing: { enumerable: !0, configurable: !0, get: function() { return w } }, buffer: { enumerable: !0, configurable: !0, get: function() { return A } }, volume: { enumerable: !0, configurable: !0, get: function() { return h.gain.value }, set: function(e) { h.gain.value = e } } }), "number" == typeof t.volume && (p.volume = t.volume); var b = Array.isArray(e) ? e : [e]; if (b = b.filter(Boolean), b.some(o)) { var q = b.filter(o)[0]; "function" == typeof q.getAttribute ? q = q.getAttribute("src") : "string" == typeof q.src && (q = q.src),
                        function(e) { a(d, e, function(e, t) { if (e) return p.emit("error", e);
                                A = t, l && (l.buffer = A), f = A.duration, h.buffer = A, p.emit("load") }, function(e, t) { p.emit("progress", e, t) }, function() { p.emit("decoding") }) }(q) } else n.nextTick(function() { p.emit("error", o.createError(b)) }); return p } var o = e("./can-play-src"),
                i = e("./audio-context"),
                a = e("./xhr-audio"),
                s = e("events").EventEmitter,
                u = e("right-now"),
                c = e("./resume-context");
            t.exports = r }).call(this, e("_process")) }, { "./audio-context": 3, "./can-play-src": 5, "./resume-context": 8, "./xhr-audio": 9, _process: 15, events: 24, "right-now": 37 }],
    5: [function(e, t, n) {
        function r(e) { if (!e) throw new TypeError("src cannot be empty"); var t; if ("function" == typeof e.getAttribute) t = e.getAttribute("type");
            else if ("string" == typeof e) { var n = i(e);
                n && (t = s(n)) } else t = e.type; if (!t) return !0;
            a || (a = new window.Audio); var r = a.canPlayType(t).replace(/no/, ""); return Boolean(r) }

        function o(e) { var t = new Error("This browser does not support any of the following sources:\n    " + e.join(", ") + "\nTry using an array of OGG, MP3 and WAV."); return t.type = "AUDIO_FORMAT", t }

        function i(e) { var t = e.lastIndexOf("."); if (!(t <= 0 || t === e.length - 1)) return e.substring(t + 1) } var a, s = e("browser-media-mime-type");
        t.exports = r, t.exports.createError = o }, { "browser-media-mime-type": 13 }],
    6: [function(e, t, n) {
        function r(e, t, n) {
            function r(o) { e.removeEventListener(t, r, !1), n(o, e) } e.addEventListener(t, r, !1) } t.exports = r }, {}],
    7: [function(e, t, n) {
        (function(n) {
            function r(e, t) { t = a({}, t); var r = new o;
                t.element || (t.element = new window.Audio); var l = t.volume;
                delete t.volume; var A = i(e, t),
                    f = t.context || u(),
                    p = f.createGain();
                f.createMediaElementSource(A).connect(p), A.addEventListener("ended", function() { r.emit("end") }); var d = t.loopStart,
                    h = t.loopEnd,
                    m = "number" == typeof d && isFinite(d),
                    v = "number" == typeof h && isFinite(h),
                    y = !1;
                (m || v) && window.requestAnimationFrame(function e() { if ("number" == typeof A.duration) { var t = A.currentTime,
                            n = v ? Math.min(A.duration, h) : A.duration;
                        t > (d || 0) && (y = !0), m && y && t < d && (A.currentTime = d), t >= n && v && (A.currentTime = m ? d : 0), window.requestAnimationFrame(e) } }), r.element = A, r.context = f, r.node = p, r.pause = A.pause.bind(A), r.play = function() { return !1 !== t.autoResume && s(r.context), A.play() }, r.dispose = function() {}, r.stop = function() { var e = r.playing;
                    A.pause(), A.currentTime = 0, y = !1, e && r.emit("end") }, Object.defineProperties(r, { duration: { enumerable: !0, configurable: !0, get: function() { return A.duration } }, currentTime: { enumerable: !0, configurable: !0, get: function() { return A.currentTime } }, playing: { enumerable: !0, configurable: !0, get: function() { return !A.paused } }, volume: { enumerable: !0, configurable: !0, get: function() { return p.gain.value }, set: function(e) { p.gain.value = e } } }), "number" == typeof l && (r.volume = l); var w = Array.isArray(e) ? e : [e]; return w = w.filter(Boolean), w.some(c) ? function() { var e = Array.prototype.slice.call(A.children),
                        t = e.length,
                        o = !1,
                        i = function(n, a) { o || (t--, console.warn("Error loading source: " + a.getAttribute("src")), t <= 0 && (o = !0, e.forEach(function(e) { e.removeEventListener("error", i, !1) }), r.emit("error", new Error("Could not play any of the supplied sources")))) },
                        a = function() { r.emit("load") };
                    A.readyState >= A.HAVE_ENOUGH_DATA ? n.nextTick(a) : (V(A, "canplay", a), V(A, "error", function(e) { r.emit(new Error("Unknown error while loading <audio>")) }), e.forEach(function(e) { V(e, "error", i) })), A.load() }() : n.nextTick(function() { r.emit("error", c.createError(w)) }), r } var o = e("events").EventEmitter,
                i = e("simple-media-element").audio,
                a = e("object-assign"),
                s = e("./resume-context"),
                u = e("./audio-context"),
                c = e("./can-play-src"),
                V = e("./event-add-once");
            t.exports = r }).call(this, e("_process")) }, { "./audio-context": 3, "./can-play-src": 5, "./event-add-once": 6, "./resume-context": 8, _process: 15, events: 24, "object-assign": 31, "simple-media-element": 39 }],
    8: [function(e, t, n) { t.exports = function(e) { "suspended" === e.state && "function" == typeof e.resume && e.resume() } }, {}],
    9: [function(e, t, n) {
        function r(e, t, n, r, a) {
            function s(t) { a(), e.decodeAudioData(t, function(e) { n(null, e) }, function() { var e = new Error("Error decoding audio data");
                    e.type = "DECODE_AUDIO_DATA", n(e) }) } var u = o({ uri: t, responseType: "arraybuffer" }, function(e, r, o) { if (/^2/.test(r.statusCode) || (e = new Error("status code " + r.statusCode + " requesting " + t)), e) return n(e);
                s(o) });
            i(u).on("data", function(e, t) { r(e, t) }) } var o = e("xhr"),
            i = e("xhr-progress");
        t.exports = r }, { xhr: 45, "xhr-progress": 44 }],
    10: [function(e, t, n) {
        function r(e, t, n, r, i) { for (var a = t.context.sampleRate, s = t.frequencyBinCount, u = o(r, a, s), c = o(i, a, s), V = c - u, l = 0; u < c; u++) l += n[u] / e; return 0 === V ? 0 : l / V } var o = e("audio-frequency-to-index");
        t.exports = r.bind(null, 255), t.exports.floatData = r.bind(null, 1) }, { "audio-frequency-to-index": 11 }],
    11: [function(e, t, n) {
        function r(e, t, n) { var r = t / 2,
                i = Math.round(e / r * n); return o(i, 0, n) } var o = e("clamp");
        t.exports = r }, { clamp: 18 }],
    12: [function(e, t, n) {
        function r(e, t) { t = t || {}; var n, r = e.numberOfChannels,
                a = e.sampleRate,
                s = t.float32 ? 3 : 1,
                u = 3 === s ? 32 : 16; return n = 2 === r ? i(e.getChannelData(0), e.getChannelData(1)) : e.getChannelData(0), o(n, s, a, r, u) }

        function o(e, t, n, r, o) { var i = o / 8,
                c = r * i,
                V = new ArrayBuffer(44 + e.length * i),
                l = new DataView(V); return u(l, 0, "RIFF"), l.setUint32(4, 36 + e.length * i, !0), u(l, 8, "WAVE"), u(l, 12, "fmt "), l.setUint32(16, 16, !0), l.setUint16(20, t, !0), l.setUint16(22, r, !0), l.setUint32(24, n, !0), l.setUint32(28, n * c, !0), l.setUint16(32, c, !0), l.setUint16(34, o, !0), u(l, 36, "data"), l.setUint32(40, e.length * i, !0), 1 === t ? s(l, 44, e) : a(l, 44, e), V }

        function i(e, t) { for (var n = e.length + t.length, r = new Float32Array(n), o = 0, i = 0; o < n;) r[o++] = e[i], r[o++] = t[i], i++; return r }

        function a(e, t, n) { for (var r = 0; r < n.length; r++, t += 4) e.setFloat32(t, n[r], !0) }

        function s(e, t, n) { for (var r = 0; r < n.length; r++, t += 2) { var o = Math.max(-1, Math.min(1, n[r]));
                e.setInt16(t, o < 0 ? 32768 * o : 32767 * o, !0) } }

        function u(e, t, n) { for (var r = 0; r < n.length; r++) e.setUint8(t + r, n.charCodeAt(r)) } t.exports = r }, {}],
    13: [function(e, t, n) { var r = e("./mime-types.json"),
            o = {};
        Object.keys(r).forEach(function(e) { r[e].forEach(function(t) { o[t] = e }) }), t.exports = function(e) { if (!e) throw new TypeError("must specify extension string"); return 0 === e.indexOf(".") && (e = e.substring(1)), o[e.toLowerCase()] } }, { "./mime-types.json": 14 }],
    14: [function(e, t, n) { t.exports = { "audio/midi": ["mid", "midi", "kar", "rmi"], "audio/mp4": ["mp4a", "m4a"], "audio/mpeg": ["mpga", "mp2", "mp2a", "mp3", "m2a", "m3a"], "audio/ogg": ["oga", "ogg", "spx"], "audio/webm": ["weba"], "audio/x-matroska": ["mka"], "audio/x-mpegurl": ["m3u"], "audio/wav": ["wav"], "video/3gpp": ["3gp"], "video/3gpp2": ["3g2"], "video/mp4": ["mp4", "mp4v", "mpg4"], "video/mpeg": ["mpeg", "mpg", "mpe", "m1v", "m2v"], "video/ogg": ["ogv"], "video/quicktime": ["qt", "mov"], "video/webm": ["webm"], "video/x-f4v": ["f4v"], "video/x-fli": ["fli"], "video/x-flv": ["flv"], "video/x-m4v": ["m4v"], "video/x-matroska": ["mkv", "mk3d", "mks"] } }, {}],
    15: [function(e, t, n) {
        function r() { throw new Error("setTimeout has not been defined") }

        function o() { throw new Error("clearTimeout has not been defined") }

        function i(e) { if (l === setTimeout) return setTimeout(e, 0); if ((l === r || !l) && setTimeout) return l = setTimeout, setTimeout(e, 0); try { return l(e, 0) } catch (t) { try { return l.call(null, e, 0) } catch (t) { return l.call(this, e, 0) } } }

        function a(e) { if (A === clearTimeout) return clearTimeout(e); if ((A === o || !A) && clearTimeout) return A = clearTimeout, clearTimeout(e); try { return A(e) } catch (t) { try { return A.call(null, e) } catch (t) { return A.call(this, e) } } }

        function s() { h && p && (h = !1, p.length ? d = p.concat(d) : m = -1, d.length && u()) }

        function u() { if (!h) { var e = i(s);
                h = !0; for (var t = d.length; t;) { for (p = d, d = []; ++m < t;) p && p[m].run();
                    m = -1, t = d.length } p = null, h = !1, a(e) } }

        function c(e, t) { this.fun = e, this.array = t }

        function V() {} var l, A, f = t.exports = {};! function() { try { l = "function" == typeof setTimeout ? setTimeout : r } catch (e) { l = r } try { A = "function" == typeof clearTimeout ? clearTimeout : o } catch (e) { A = o } }(); var p, d = [],
            h = !1,
            m = -1;
        f.nextTick = function(e) { var t = new Array(arguments.length - 1); if (arguments.length > 1)
                for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            d.push(new c(e, t)), 1 !== d.length || h || i(u) }, c.prototype.run = function() { this.fun.apply(null, this.array) }, f.title = "browser", f.browser = !0, f.env = {}, f.argv = [], f.version = "", f.versions = {}, f.on = V, f.addListener = V, f.once = V, f.off = V, f.removeListener = V, f.removeAllListeners = V, f.emit = V, f.prependListener = V, f.prependOnceListener = V, f.listeners = function(e) { return [] }, f.binding = function(e) { throw new Error("process.binding is not supported") }, f.cwd = function() { return "/" }, f.chdir = function(e) { throw new Error("process.chdir is not supported") }, f.umask = function() { return 0 } }, {}],
    16: [function(e, t, n) {
        function r(e, t, n) {
            function r() { var t = r.parent || e.parentNode; if ("function" == typeof t) var n = t(i) || i,
                    s = n[0],
                    u = n[1];
                else if (t && t !== document.body) var c = o(t),
                    s = 0 | c[0],
                    u = 0 | c[1];
                else var s = window.innerWidth,
                    u = window.innerHeight; return a ? (e.setAttribute("width", s * r.scale + "px"), e.setAttribute("height", u * r.scale + "px")) : (e.width = s * r.scale, e.height = u * r.scale), e.style.width = s + "px", e.style.height = u + "px", r } var a = "SVG" === e.nodeName.toUpperCase(); return e.style.position = e.style.position || "absolute", e.style.top = 0, e.style.left = 0, r.scale = parseFloat(n || 1), r.parent = t, r() } var o = e("element-size");
        t.exports = r; var i = new Float32Array(2) }, { "element-size": 23 }],
    17: [function(e, t, n) { var r = e("canvas-fit"),
            o = e("raf-loop");
        t.exports = function(e, t) {
            function n() { i(); var t = e.width,
                    n = e.height;
                s[0] = t / i.scale, s[1] = n / i.scale } if (!e) throw new TypeError("must specify a canvas element");
            t = t || {}; var i = r(e, t.parent, t.scale),
                a = o(),
                s = [0, 0]; return n(), window.addEventListener("resize", function() { n(), a.emit("resize") }, !1), Object.defineProperties(a, { scale: { get: function() { return i.scale }, set: function(e) { i.scale = e } }, shape: { get: function() { return s } }, parent: { get: function() { return i.parent }, set: function(e) { i.parent = e } } }), a } }, { "canvas-fit": 16, "raf-loop": 35 }],
    18: [function(e, t, n) {
        function r(e, t, n) { return t < n ? e < t ? t : e > n ? n : e : e < n ? n : e > t ? t : e } t.exports = r }, {}],
    19: [function(e, t, n) {
        function r(e) { return e || (e = new window.Audio), o(e, "audio/mpeg") ? i : o(e, "audio/ogg") ? a : null }

        function o(e, t) { return e.canPlayType(t).replace(/no/, "") } var i = e("silent-mp3-datauri"),
            a = e("./silent-ogg-datauri");
        t.exports = r }, { "./silent-ogg-datauri": 20, "silent-mp3-datauri": 38 }],
    20: [function(e, t, n) { t.exports = "data:audio/ogg;base64,T2dnUwACAAAAAAAAAADqnjMlAAAAAOyyzPIBHgF2b3JiaXMAAAAAAUAfAABAHwAAQB8AAEAfAACZAU9nZ1MAAAAAAAAAAAAA6p4zJQEAAAANJGeqCj3//////////5ADdm9yYmlzLQAAAFhpcGguT3JnIGxpYlZvcmJpcyBJIDIwMTAxMTAxIChTY2hhdWZlbnVnZ2V0KQAAAAABBXZvcmJpcw9CQ1YBAAABAAxSFCElGVNKYwiVUlIpBR1jUFtHHWPUOUYhZBBTiEkZpXtPKpVYSsgRUlgpRR1TTFNJlVKWKUUdYxRTSCFT1jFloXMUS4ZJCSVsTa50FkvomWOWMUYdY85aSp1j1jFFHWNSUkmhcxg6ZiVkFDpGxehifDA6laJCKL7H3lLpLYWKW4q91xpT6y2EGEtpwQhhc+211dxKasUYY4wxxsXiUyiC0JBVAAABAABABAFCQ1YBAAoAAMJQDEVRgNCQVQBABgCAABRFcRTHcRxHkiTLAkJDVgEAQAAAAgAAKI7hKJIjSZJkWZZlWZameZaouaov+64u667t6roOhIasBACAAAAYRqF1TCqDEEPKQ4QUY9AzoxBDDEzGHGNONKQMMogzxZAyiFssLqgQBKEhKwKAKAAAwBjEGGIMOeekZFIi55iUTkoDnaPUUcoolRRLjBmlEluJMYLOUeooZZRCjKXFjFKJscRUAABAgAMAQICFUGjIigAgCgCAMAYphZRCjCnmFHOIMeUcgwwxxiBkzinoGJNOSuWck85JiRhjzjEHlXNOSuekctBJyaQTAAAQ4AAAEGAhFBqyIgCIEwAwSJKmWZomipamiaJniqrqiaKqWp5nmp5pqqpnmqpqqqrrmqrqypbnmaZnmqrqmaaqiqbquqaquq6nqrZsuqoum65q267s+rZru77uqapsm6or66bqyrrqyrbuurbtS56nqqKquq5nqq6ruq5uq65r25pqyq6purJtuq4tu7Js664s67pmqq5suqotm64s667s2rYqy7ovuq5uq7Ks+6os+75s67ru2rrwi65r66os674qy74x27bwy7ouHJMnqqqnqq7rmarrqq5r26rr2rqmmq5suq4tm6or26os67Yry7aumaosm64r26bryrIqy77vyrJui67r66Ys67oqy8Lu6roxzLat+6Lr6roqy7qvyrKuu7ru+7JuC7umqrpuyrKvm7Ks+7auC8us27oxuq7vq7It/KosC7+u+8Iy6z5jdF1fV21ZGFbZ9n3d95Vj1nVhWW1b+V1bZ7y+bgy7bvzKrQvLstq2scy6rSyvrxvDLux8W/iVmqratum6um7Ksq/Lui60dd1XRtf1fdW2fV+VZd+3hV9pG8OwjK6r+6os68Jry8ov67qw7MIvLKttK7+r68ow27qw3L6wLL/uC8uq277v6rrStXVluX2fsSu38QsAABhwAAAIMKEMFBqyIgCIEwBAEHIOKQahYgpCCKGkEEIqFWNSMuakZM5JKaWUFEpJrWJMSuaclMwxKaGUlkopqYRSWiqlxBRKaS2l1mJKqcVQSmulpNZKSa2llGJMrcUYMSYlc05K5pyUklJrJZXWMucoZQ5K6iCklEoqraTUYuacpA46Kx2E1EoqMZWUYgupxFZKaq2kFGMrMdXUWo4hpRhLSrGVlFptMdXWWqs1YkxK5pyUzDkqJaXWSiqtZc5J6iC01DkoqaTUYiopxco5SR2ElDLIqJSUWiupxBJSia20FGMpqcXUYq4pxRZDSS2WlFosqcTWYoy1tVRTJ6XFklKMJZUYW6y5ttZqDKXEVkqLsaSUW2sx1xZjjqGkFksrsZWUWmy15dhayzW1VGNKrdYWY40x5ZRrrT2n1mJNMdXaWqy51ZZbzLXnTkprpZQWS0oxttZijTHmHEppraQUWykpxtZara3FXEMpsZXSWiypxNhirLXFVmNqrcYWW62ltVprrb3GVlsurdXcYqw9tZRrrLXmWFNtBQAADDgAAASYUAYKDVkJAEQBAADGMMYYhEYpx5yT0ijlnHNSKucghJBS5hyEEFLKnINQSkuZcxBKSSmUklJqrYVSUmqttQIAAAocAAACbNCUWByg0JCVAEAqAIDBcTRNFFXVdX1fsSxRVFXXlW3jVyxNFFVVdm1b+DVRVFXXtW3bFn5NFFVVdmXZtoWiqrqybduybgvDqKqua9uybeuorqvbuq3bui9UXVmWbVu3dR3XtnXd9nVd+Bmzbeu2buu+8CMMR9/4IeTj+3RCCAAAT3AAACqwYXWEk6KxwEJDVgIAGQAAgDFKGYUYM0gxphhjTDHGmAAAgAEHAIAAE8pAoSErAoAoAADAOeecc84555xzzjnnnHPOOeecc44xxhhjjDHGGGOMMcYYY4wxxhhjjDHGGGOMMcYYY0wAwE6EA8BOhIVQaMhKACAcAABACCEpKaWUUkoRU85BSSmllFKqFIOMSkoppZRSpBR1lFJKKaWUIqWgpJJSSimllElJKaWUUkoppYw6SimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaVUSimllFJKKaWUUkoppRQAYPLgAACVYOMMK0lnhaPBhYasBAByAwAAhRiDEEJpraRUUkolVc5BKCWUlEpKKZWUUqqYgxBKKqmlklJKKbXSQSihlFBKKSWUUkooJYQQSgmhlFRCK6mEUkoHoYQSQimhhFRKKSWUzkEoIYUOQkmllNRCSB10VFIpIZVSSiklpZQ6CKGUklJLLZVSWkqpdBJSKamV1FJqqbWSUgmhpFZKSSWl0lpJJbUSSkklpZRSSymFVFJJJYSSUioltZZaSqm11lJIqZWUUkqppdRSSiWlkEpKqZSSUmollZRSaiGVlEpJKaTUSimlpFRCSamlUlpKLbWUSkmptFRSSaWUlEpJKaVSSksppRJKSqmllFpJKYWSUkoplZJSSyW1VEoKJaWUUkmptJRSSymVklIBAEAHDgAAAUZUWoidZlx5BI4oZJiAAgAAQABAgAkgMEBQMApBgDACAQAAAADAAAAfAABHARAR0ZzBAUKCwgJDg8MDAAAAAAAAAAAAAACAT2dnUwAEAAAAAAAAAADqnjMlAgAAADzQPmcBAQA=" }, {}],
    21: [function(e, t, n) {
        (function(n) {
            function r(e, t) {
                function r() { u && clearTimeout(u), s && (s.pause(), s.removeEventListener("play", r, !1)), e(!0), e = a } if ("function" != typeof e) throw new TypeError("must specify a cb function");
                t = "number" == typeof t ? t : i; var s, u; try { s = new window.Audio; var c = o(s); if (!c) return n.nextTick(function() { e(!1) });
                    u = setTimeout(function() { e(!1), e = a }, t), s.autoplay = !0, s.volume = 0, s.addEventListener("play", r, !1), s.src = c, s.load(); var V = s.play();
                    V && "function" == typeof V.then && (s.removeEventListener("play", r, !1), V.then(function() { r() }, function(t) { e(!1), e = a })) } catch (t) { n.nextTick(function() { e(!1), e = a }) } } var o = e("./lib/get-src"),
                i = 300,
                a = function() {};
            t.exports = r }).call(this, e("_process")) }, { "./lib/get-src": 19, _process: 15 }],
    22: [function(e, t, n) {
        (function(n) {
            function r(e, t, r, a) {
                function s() { var e = new window.Audio,
                        n = t.createMediaElementSource(e),
                        a = t.createAnalyser();
                    n.connect(a); var s, l, A = o(function(t) { clearInterval(s), clearTimeout(l), e.pause(), n.disconnect(), u(t) });
                    e.addEventListener("canplaythrough", o(function() { e.play() })), e.addEventListener("play", o(function() { var e = new Uint8Array(a.frequencyBinCount);
                        s = setInterval(function() { a.getByteFrequencyData(e), c(e) && A(!0) }, 1) })); var f = V(1, 44100),
                        p = i(f);! function() { l && clearTimeout(l), l = setTimeout(function() { A(!1) }, r) }(); try { var d = new window.Blob([p], { type: "audio/wav" }),
                            h = window.URL.createObjectURL(d);
                        e.loop = !0, e.src = h, e.load() } catch (e) { A(!1) } }

                function u(n) { A && "function" == typeof t.close && t.close(), e(n) }

                function c(e) { for (var t = 0; t < e.length; t++)
                        if (e[t] > 0) return !0; return !1 }

                function V(e, t) { var n = Math.floor(t * e);
                    n += 4 - n % 4; for (var r = new Float32Array(n), o = 0; o < n; o++) r[o] = 1 / 255; return { duration: e, length: n, numberOfChannels: 1, sampleRate: t, getChannelData: function() { return r } } } if ("function" != typeof e) throw new TypeError("must specify a callback function"); var l = window.AudioContext || window.webkitAudioContext; if (!l || void 0 === window.Blob || void 0 === window.URL || "function" != typeof window.URL.createObjectURL) return n.nextTick(function() { e(!1) }); var A = !1;
                t || (A = !0, t = new l); var f = /Safari/.test(navigator.userAgent) ? 550 : 250;
                r = "number" == typeof r ? r : f, "suspended" === t.state && "function" == typeof t.resume ? (t.resume(), setTimeout(s, 10)) : s() } var o = e("once"),
                i = e("audiobuffer-to-wav");
            t.exports = r }).call(this, e("_process")) }, { _process: 15, "audiobuffer-to-wav": 12, once: 32 }],
    23: [function(e, t, n) {
        function r(e) { if (e === window || e === document.body) return [window.innerWidth, window.innerHeight]; if (!e.parentNode) { var t = !0;
                document.body.appendChild(e) } var n = e.getBoundingClientRect(),
                r = getComputedStyle(e),
                i = (0 | n.height) + o(r.getPropertyValue("margin-top")) + o(r.getPropertyValue("margin-bottom")),
                a = (0 | n.width) + o(r.getPropertyValue("margin-left")) + o(r.getPropertyValue("margin-right")); return t && document.body.removeChild(e), [a, i] }

        function o(e) { return parseFloat(e) || 0 } t.exports = r }, {}],
    24: [function(e, t, n) {
        function r() { this._events = this._events || {}, this._maxListeners = this._maxListeners || void 0 }

        function o(e) { return "function" == typeof e }

        function i(e) { return "number" == typeof e }

        function a(e) { return "object" == typeof e && null !== e }

        function s(e) { return void 0 === e } t.exports = r, r.EventEmitter = r, r.prototype._events = void 0, r.prototype._maxListeners = void 0, r.defaultMaxListeners = 10, r.prototype.setMaxListeners = function(e) { if (!i(e) || e < 0 || isNaN(e)) throw TypeError("n must be a positive number"); return this._maxListeners = e, this }, r.prototype.emit = function(e) { var t, n, r, i, u, c; if (this._events || (this._events = {}), "error" === e && (!this._events.error || a(this._events.error) && !this._events.error.length)) { if ((t = arguments[1]) instanceof Error) throw t; var V = new Error('Uncaught, unspecified "error" event. (' + t + ")"); throw V.context = t, V } if (n = this._events[e], s(n)) return !1; if (o(n)) switch (arguments.length) {
                case 1:
                    n.call(this); break;
                case 2:
                    n.call(this, arguments[1]); break;
                case 3:
                    n.call(this, arguments[1], arguments[2]); break;
                default:
                    i = Array.prototype.slice.call(arguments, 1), n.apply(this, i) } else if (a(n))
                for (i = Array.prototype.slice.call(arguments, 1), c = n.slice(), r = c.length, u = 0; u < r; u++) c[u].apply(this, i); return !0 }, r.prototype.addListener = function(e, t) { var n; if (!o(t)) throw TypeError("listener must be a function"); return this._events || (this._events = {}), this._events.newListener && this.emit("newListener", e, o(t.listener) ? t.listener : t), this._events[e] ? a(this._events[e]) ? this._events[e].push(t) : this._events[e] = [this._events[e], t] : this._events[e] = t, a(this._events[e]) && !this._events[e].warned && (n = s(this._maxListeners) ? r.defaultMaxListeners : this._maxListeners) && n > 0 && this._events[e].length > n && (this._events[e].warned = !0, console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[e].length), "function" == typeof console.trace && console.trace()), this }, r.prototype.on = r.prototype.addListener, r.prototype.once = function(e, t) {
            function n() { this.removeListener(e, n), r || (r = !0, t.apply(this, arguments)) } if (!o(t)) throw TypeError("listener must be a function"); var r = !1; return n.listener = t, this.on(e, n), this }, r.prototype.removeListener = function(e, t) { var n, r, i, s; if (!o(t)) throw TypeError("listener must be a function"); if (!this._events || !this._events[e]) return this; if (n = this._events[e], i = n.length, r = -1, n === t || o(n.listener) && n.listener === t) delete this._events[e], this._events.removeListener && this.emit("removeListener", e, t);
            else if (a(n)) { for (s = i; s-- > 0;)
                    if (n[s] === t || n[s].listener && n[s].listener === t) { r = s; break } if (r < 0) return this;
                1 === n.length ? (n.length = 0, delete this._events[e]) : n.splice(r, 1), this._events.removeListener && this.emit("removeListener", e, t) } return this }, r.prototype.removeAllListeners = function(e) { var t, n; if (!this._events) return this; if (!this._events.removeListener) return 0 === arguments.length ? this._events = {} : this._events[e] && delete this._events[e], this; if (0 === arguments.length) { for (t in this._events) "removeListener" !== t && this.removeAllListeners(t); return this.removeAllListeners("removeListener"), this._events = {}, this } if (n = this._events[e], o(n)) this.removeListener(e, n);
            else if (n)
                for (; n.length;) this.removeListener(e, n[n.length - 1]); return delete this._events[e], this }, r.prototype.listeners = function(e) { return this._events && this._events[e] ? o(this._events[e]) ? [this._events[e]] : this._events[e].slice() : [] }, r.prototype.listenerCount = function(e) { if (this._events) { var t = this._events[e]; if (o(t)) return 1; if (t) return t.length } return 0 }, r.listenerCount = function(e, t) { return e.listenerCount(t) } }, {}],
    25: [function(e, t, n) {
        function r(e, t, n) { if (!s(t)) throw new TypeError("iterator must be a function");
            arguments.length < 3 && (n = this), "[object Array]" === u.call(e) ? o(e, t, n) : "string" == typeof e ? i(e, t, n) : a(e, t, n) }

        function o(e, t, n) { for (var r = 0, o = e.length; r < o; r++) c.call(e, r) && t.call(n, e[r], r, e) }

        function i(e, t, n) { for (var r = 0, o = e.length; r < o; r++) t.call(n, e.charAt(r), r, e) }

        function a(e, t, n) { for (var r in e) c.call(e, r) && t.call(n, e[r], r, e) } var s = e("is-function");
        t.exports = r; var u = Object.prototype.toString,
            c = Object.prototype.hasOwnProperty }, { "is-function": 30 }],
    26: [function(e, t, n) {
        (function(e) { var n;
            n = "undefined" != typeof window ? window : void 0 !== e ? e : "undefined" != typeof self ? self : {}, t.exports = n }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}) }, {}],
    27: [function(e, t, n) { "function" == typeof Object.create ? t.exports = function(e, t) { e.super_ = t, e.prototype = Object.create(t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }) } : t.exports = function(e, t) { e.super_ = t; var n = function() {};
            n.prototype = t.prototype, e.prototype = new n, e.prototype.constructor = e } }, {}],
    28: [function(e, t, n) {
        function r(e) { var t = window.AudioContext || window.webkitAudioContext;
            e = "number" == typeof e ? e : 44100; var n = new t; if (/(iPhone|iPad)/i.test(navigator.userAgent) && n.sampleRate !== e) { var r = n.createBuffer(1, 1, e),
                    o = n.createBufferSource();
                o.buffer = r, o.connect(n.destination), o.start(0), o.disconnect(), n.close(), n = new t } return n } t.exports = r }, {}],
    29: [function(e, t, n) {
        function r(e) { return !(!e || "object" != typeof e) && ("object" == typeof window && "object" == typeof window.Node ? e instanceof window.Node : "number" == typeof e.nodeType && "string" == typeof e.nodeName) } t.exports = r }, {}],
    30: [function(e, t, n) {
        function r(e) { var t = o.call(e); return "[object Function]" === t || "function" == typeof e && "[object RegExp]" !== t || "undefined" != typeof window && (e === window.setTimeout || e === window.alert || e === window.confirm || e === window.prompt) } t.exports = r; var o = Object.prototype.toString }, {}],
    31: [function(e, t, n) { "use strict";

        function r(e) { if (null === e || void 0 === e) throw new TypeError("Object.assign cannot be called with null or undefined"); return Object(e) } var o = Object.getOwnPropertySymbols,
            i = Object.prototype.hasOwnProperty,
            a = Object.prototype.propertyIsEnumerable;
        t.exports = function() { try { if (!Object.assign) return !1; var e = new String("abc"); if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1; for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n; if ("0123456789" !== Object.getOwnPropertyNames(t).map(function(e) { return t[e] }).join("")) return !1; var r = {}; return "abcdefghijklmnopqrst".split("").forEach(function(e) { r[e] = e }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("") } catch (e) { return !1 } }() ? Object.assign : function(e, t) { for (var n, s, u = r(e), c = 1; c < arguments.length; c++) { n = Object(arguments[c]); for (var V in n) i.call(n, V) && (u[V] = n[V]); if (o) { s = o(n); for (var l = 0; l < s.length; l++) a.call(n, s[l]) && (u[s[l]] = n[s[l]]) } } return u } }, {}],
    32: [function(e, t, n) {
        function r(e) { var t = function() { return t.called ? t.value : (t.called = !0, t.value = e.apply(this, arguments)) }; return t.called = !1, t }

        function o(e) { var t = function() { if (t.called) throw new Error(t.onceError); return t.called = !0, t.value = e.apply(this, arguments) },
                n = e.name || "Function wrapped with `once`"; return t.onceError = n + " shouldn't be called more than once", t.called = !1, t } var i = e("wrappy");
        t.exports = i(r), t.exports.strict = i(o), r.proto = r(function() { Object.defineProperty(Function.prototype, "once", { value: function() { return r(this) }, configurable: !0 }), Object.defineProperty(Function.prototype, "onceStrict", { value: function() { return o(this) }, configurable: !0 }) }) }, { wrappy: 43 }],
    33: [function(e, t, n) { var r = e("trim"),
            o = e("for-each"),
            i = function(e) { return "[object Array]" === Object.prototype.toString.call(e) };
        t.exports = function(e) { if (!e) return {}; var t = {}; return o(r(e).split("\n"), function(e) { var n = e.indexOf(":"),
                    o = r(e.slice(0, n)).toLowerCase(),
                    a = r(e.slice(n + 1));
                void 0 === t[o] ? t[o] = a : i(t[o]) ? t[o].push(a) : t[o] = [t[o], a] }), t } }, { "for-each": 25, trim: 41 }],
    34: [function(e, t, n) {
        (function(e) {
            (function() { var n, r, o, i, a, s; "undefined" != typeof performance && null !== performance && performance.now ? t.exports = function() { return performance.now() } : void 0 !== e && null !== e && e.hrtime ? (t.exports = function() { return (n() - a) / 1e6 }, r = e.hrtime, n = function() { var e; return e = r(), 1e9 * e[0] + e[1] }, i = n(), s = 1e9 * e.uptime(), a = i - s) : Date.now ? (t.exports = function() { return Date.now() - o }, o = Date.now()) : (t.exports = function() { return (new Date).getTime() - o }, o = (new Date).getTime()) }).call(this) }).call(this, e("_process")) }, { _process: 15 }],
    35: [function(e, t, n) {
        function r(e) { if (!(this instanceof r)) return new r(e);
            this.running = !1, this.last = a(), this._frame = 0, this._tick = this.tick.bind(this), e && this.on("tick", e) } var o = e("inherits"),
            i = e("events").EventEmitter,
            a = e("right-now"),
            s = e("raf");
        t.exports = r, o(r, i), r.prototype.start = function() { if (!this.running) return this.running = !0, this.last = a(), this._frame = s(this._tick), this }, r.prototype.stop = function() { return this.running = !1, 0 !== this._frame && s.cancel(this._frame), this._frame = 0, this }, r.prototype.tick = function() { this._frame = s(this._tick); var e = a(),
                t = e - this.last;
            this.emit("tick", t), this.last = e } }, { events: 24, inherits: 27, raf: 36, "right-now": 37 }],
    36: [function(e, t, n) {
        (function(n) { for (var r = e("performance-now"), o = "undefined" == typeof window ? n : window, i = ["moz", "webkit"], a = "AnimationFrame", s = o["request" + a], u = o["cancel" + a] || o["cancelRequest" + a], c = 0; !s && c < i.length; c++) s = o[i[c] + "Request" + a], u = o[i[c] + "Cancel" + a] || o[i[c] + "CancelRequest" + a]; if (!s || !u) { var V = 0,
                    l = 0,
                    A = [];
                s = function(e) { if (0 === A.length) { var t = r(),
                            n = Math.max(0, 1e3 / 60 - (t - V));
                        V = n + t, setTimeout(function() { var e = A.slice(0);
                            A.length = 0; for (var t = 0; t < e.length; t++)
                                if (!e[t].cancelled) try { e[t].callback(V) } catch (e) { setTimeout(function() { throw e }, 0) } }, Math.round(n)) } return A.push({ handle: ++l, callback: e, cancelled: !1 }), l }, u = function(e) { for (var t = 0; t < A.length; t++) A[t].handle === e && (A[t].cancelled = !0) } } t.exports = function(e) { return s.call(o, e) }, t.exports.cancel = function() { u.apply(o, arguments) }, t.exports.polyfill = function(e) { e || (e = o), e.requestAnimationFrame = s, e.cancelAnimationFrame = u } }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}) }, { "performance-now": 34 }],
    37: [function(e, t, n) {
        (function(e) { t.exports = e.performance && e.performance.now ? function() { return performance.now() } : Date.now || function() { return +new Date } }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}) }, {}],
    38: [function(e, t, n) {
        t.exports = "data:audio/mpeg;base64,//uQxAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAADAAAGhgBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVWqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr///////////////////////////////////////////8AAAA5TEFNRTMuOThyAc0AAAAAAAAAABSAJAiqQgAAgAAABobxtI73AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//uQxAACFEII9ACZ/sJZwWEoEb8w/////N//////JcxjHjf+7/v/H2PzCCFAiDtGeyBCIx7bJJ1mmEEMy6g8mm2c8nrGABB4h2Mkmn//4z/73u773R5qHHu/j/w7Kxkzh5lWRWdsifCkNAnY9Zc1HvDAhjhSHdFkHFzLmabt/AQxSg2wwzLhHIJOBnAWwVY4zrhIYhhc2kvhYDfQ4hDi2Gmh5KyFn8EcGIrHAngNgIwVIEMf5bzbAiTRoAD///8z/KVhkkWEle6IX+d/z4fvH3BShK1e5kmjkCMoxVmXhd4ROlTKo3iipasvTilY21q19ta30/v/0/idPX1v8PNxJL6ramnOVsdvMv2akO0iSYIzdJFirtzWXCZicS9vHqvSKyqm5XJBdqBwPxyfJdykhWTZ0G0ZyTZGpLKxsNwwoRhsx3tZfhwmeOBVISm3impAC/IT/8hP/EKEM1KMdVdVKM2rHV4x7HVXZvbVVKN/qq8CiV9VL9jjH/6l6qf7MBCjZmOqsAibjcP+qqqv0oxqpa/NVW286hPo1nz2L/h8+jXt//uSxCmDU2IK/ECN98KKtE5IYzNoCfbw+u9i5r8PoadUMFPKqWL4LK3T/LCraMSHGkW4bpLXR/E6LlHOVQxmslKVJ8IULktMN06N0FKCpHCoYsjC4F+Z0NVqdNFoGSTjSiyjzLdnZ2fNqTi2eHKONONKLMPMKLONKLMPQRJGlFxZRoKcJFAYEeIFiRQkUWUeYfef//Ko04soswso40UJAgMw8wosososy0EalnZyjQUGBRQGIFggOWUacWUeYmuadrZziQKKEgQsQLAhQkUJAgMQDghltLO1onp0cpkNInSFMqlYeSEJ5AHsqFdOwy1DA2sRmRJKxdKRfLhfLw5BzUxBTUUzLjk4LjJVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjk4LjJVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7ksRRA8AAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU="
    }, {}],
    39: [function(e, t, n) {
        function r(e, t, n) { n = n || {}, Array.isArray(t) || (t = [t]); var r = n.element || document.createElement(e); return n.loop && r.setAttribute("loop", "loop"), n.muted && r.setAttribute("muted", "muted"), n.autoplay && r.setAttribute("autoplay", "autoplay"), n.controls && r.setAttribute("controls", "controls"), n.crossOrigin && r.setAttribute("crossorigin", n.crossOrigin), n.preload && r.setAttribute("preload", n.preload), n.poster && r.setAttribute("poster", n.poster), void 0 !== n.volume && r.setAttribute("volume", n.volume), t = t.filter(Boolean), t.forEach(function(e) { r.appendChild(o(e)) }), r }

        function o(e) { if (a(e)) return e; if ("string" == typeof e && (e = { src: e }, e.src)) { var t = i(e.src);
                t && (e.type = s(t)) } var n = document.createElement("source"); return e.src && n.setAttribute("src", e.src), e.type && n.setAttribute("type", e.type), n }

        function i(e) { var t = e.lastIndexOf("."); return t <= 0 || t === e.length - 1 ? null : e.substring(t + 1) } var a = e("is-dom"),
            s = e("browser-media-mime-type");
        t.exports.video = r.bind(null, "video"), t.exports.audio = r.bind(null, "audio") }, { "browser-media-mime-type": 13, "is-dom": 29 }],
    40: [function(e, t, n) {
        function r(e, t) {
            function n(t) {
                function n(n) { if (t !== n && (r(), !n.defaultPrevented)) { var o = t.preventDefault,
                            i = t.stopPropagation;
                        n.stopPropagation = function() { i.call(t), i.call(n) }, n.preventDefault = function() { o.call(t), o.call(n) }, e.call(s, n) } }

                function r(e) { t !== e && (clearTimeout(u), o.forEach(function(e) { document.removeEventListener(e, r) }), i.forEach(function(e) { document.removeEventListener(e, n) })) } if (t.touches && !(t.touches.length > 1)) { var s = this,
                        u = setTimeout(r, a);
                    o.forEach(function(e) { document.addEventListener(e, r) }), i.forEach(function(e) { document.addEventListener(e, n) }) } } t = t || {}; var a = t.timeout || r.timeout; return n.handler = e, n } var o = ["touchmove", "touchcancel", "touchstart"],
            i = ["touchend"];
        t.exports = r, r.timeout = 200 }, {}],
    41: [function(e, t, n) {
        function r(e) { return e.replace(/^\s*|\s*$/g, "") } n = t.exports = r, n.left = function(e) { return e.replace(/^\s*/, "") }, n.right = function(e) { return e.replace(/\s*$/, "") } }, {}],
    42: [function(e, t, n) {
        function r(e, t, n) { if (!(this instanceof r)) return new r(e, t, n); if (t instanceof o || (n = t, t = null), n = n || {}, this.ctx = t = t || new o, e instanceof AudioNode || (e = e instanceof Audio || e instanceof HTMLAudioElement ? t.createMediaElementSource(e) : t.createMediaStreamSource(e)), this.analyser = t.createAnalyser(), this.stereo = !!n.stereo, this.audible = !1 !== n.audible, this.wavedata = null, this.freqdata = null, this.splitter = null, this.merger = null, this.source = e, this.stereo) { this.analyser = [this.analyser], this.analyser.push(t.createAnalyser()), this.splitter = t.createChannelSplitter(2), this.merger = t.createChannelMerger(2), this.output = this.merger, this.source.connect(this.splitter); for (var i = 0; i < 2; i++) this.splitter.connect(this.analyser[i], i, 0), this.analyser[i].connect(this.merger, 0, i);
                this.audible && this.merger.connect(t.destination) } else this.output = this.source, this.source.connect(this.analyser), this.audible && this.analyser.connect(t.destination) } var o = window.AudioContext || window.webkitAudioContext;
        t.exports = r, r.prototype.waveform = function(e, t) { return e || (e = this.wavedata || (this.wavedata = new Uint8Array((this.analyser[0] || this.analyser).frequencyBinCount))), (this.stereo ? this.analyser[t || 0] : this.analyser).getByteTimeDomainData(e), e }, r.prototype.frequencies = function(e, t) { return e || (e = this.freqdata || (this.freqdata = new Uint8Array((this.analyser[0] || this.analyser).frequencyBinCount))), (this.stereo ? this.analyser[t || 0] : this.analyser).getByteFrequencyData(e), e } }, {}],
    43: [function(e, t, n) {
        function r(e, t) {
            function n() { for (var t = new Array(arguments.length), n = 0; n < t.length; n++) t[n] = arguments[n]; var r = e.apply(this, t),
                    o = t[t.length - 1]; return "function" == typeof r && r !== o && Object.keys(o).forEach(function(e) { r[e] = o[e] }), r } if (e && t) return r(e)(t); if ("function" != typeof e) throw new TypeError("need wrapper function"); return Object.keys(e).forEach(function(t) { n[t] = e[t] }), n } t.exports = r }, {}],
    44: [function(e, t, n) {
        function r(e) {
            function t(e) { var t = e.lengthComputable ? e.loaded / e.total : 0;
                i || r.emit("data", t, e.total || null), i = 1 === t }

            function n(o) {
                ("load" === o.type || /^(ready|complete)$/g.test((o.currentTarget || o.srcElement).readyState)) && (i || (e.removeEventListener ? (e.removeEventListener("load", n, !1), e.removeEventListener("progress", t, !1)) : e.detatchEvent && e.detatchEvent("onreadystatechange", n), r.emit("data", 1, o.total || null), r.emit("done"), i = !0)) } var r = new o,
                i = !1; return e.attachEvent ? (e.attachEvent("onreadystatechange", n), r) : (e.addEventListener("load", n, !1), e.addEventListener("progress", t, !1), r) } var o = e("events").EventEmitter;
        t.exports = r }, { events: 24 }],
    45: [function(e, t, n) { "use strict";

        function r(e) { for (var t in e)
                if (e.hasOwnProperty(t)) return !1; return !0 }

        function o(e, t, n) { var r = e; return V(t) ? (n = t, "string" == typeof e && (r = { uri: e })) : r = A(t, { uri: e }), r.callback = n, r }

        function i(e, t, n) { return t = o(e, t, n), a(t) }

        function a(e) {
            function t() { 4 === V.readyState && setTimeout(a, 0) }

            function n() { var e = void 0; if (e = V.response ? V.response : V.responseText || s(V), w) try { e = JSON.parse(e) } catch (e) {}
                return e }

            function o(e) { return clearTimeout(p), e instanceof Error || (e = new Error("" + (e || "Unknown XMLHttpRequest Error"))), e.statusCode = 0, c(e, g) }

            function a() { if (!f) { var t;
                    clearTimeout(p), t = e.useXDR && void 0 === V.status ? 200 : 1223 === V.status ? 204 : V.status; var r = g,
                        o = null; return 0 !== t ? (r = { body: n(), statusCode: t, method: h, headers: {}, url: d, rawRequest: V }, V.getAllResponseHeaders && (r.headers = l(V.getAllResponseHeaders()))) : o = new Error("Internal XMLHttpRequest Error"), c(o, r, r.body) } } if (void 0 === e.callback) throw new Error("callback argument missing"); var u = !1,
                c = function(t, n, r) { u || (u = !0, e.callback(t, n, r)) },
                V = e.xhr || null;
            V || (V = e.cors || e.useXDR ? new i.XDomainRequest : new i.XMLHttpRequest); var A, f, p, d = V.url = e.uri || e.url,
                h = V.method = e.method || "GET",
                m = e.body || e.data,
                v = V.headers = e.headers || {},
                y = !!e.sync,
                w = !1,
                g = { body: void 0, headers: {}, statusCode: 0, method: h, url: d, rawRequest: V }; if ("json" in e && !1 !== e.json && (w = !0, v.accept || v.Accept || (v.Accept = "application/json"), "GET" !== h && "HEAD" !== h && (v["content-type"] || v["Content-Type"] || (v["Content-Type"] = "application/json"), m = JSON.stringify(!0 === e.json ? m : e.json))), V.onreadystatechange = t, V.onload = a, V.onerror = o, V.onprogress = function() {}, V.onabort = function() { f = !0 }, V.ontimeout = o, V.open(h, d, !y, e.username, e.password), y || (V.withCredentials = !!e.withCredentials), !y && e.timeout > 0 && (p = setTimeout(function() { if (!f) { f = !0, V.abort("timeout"); var e = new Error("XMLHttpRequest timeout");
                        e.code = "ETIMEDOUT", o(e) } }, e.timeout)), V.setRequestHeader)
                for (A in v) v.hasOwnProperty(A) && V.setRequestHeader(A, v[A]);
            else if (e.headers && !r(e.headers)) throw new Error("Headers cannot be set on an XDomainRequest object"); return "responseType" in e && (V.responseType = e.responseType), "beforeSend" in e && "function" == typeof e.beforeSend && e.beforeSend(V), V.send(m || null), V }

        function s(e) { try { if ("document" === e.responseType) return e.responseXML; var t = e.responseXML && "parsererror" === e.responseXML.documentElement.nodeName; if ("" === e.responseType && !t) return e.responseXML } catch (e) {} return null }

        function u() {} var c = e("global/window"),
            V = e("is-function"),
            l = e("parse-headers"),
            A = e("xtend");
        t.exports = i, i.XMLHttpRequest = c.XMLHttpRequest || u, i.XDomainRequest = "withCredentials" in new i.XMLHttpRequest ? i.XMLHttpRequest : c.XDomainRequest,
            function(e, t) { for (var n = 0; n < e.length; n++) t(e[n]) }(["get", "put", "post", "patch", "head", "delete"], function(e) { i["delete" === e ? "del" : e] = function(t, n, r) { return n = o(t, n, r), n.method = e.toUpperCase(), a(n) } }) }, { "global/window": 26, "is-function": 30, "parse-headers": 33, xtend: 46 }],
    46: [function(e, t, n) {
        function r() { for (var e = {}, t = 0; t < arguments.length; t++) { var n = arguments[t]; for (var r in n) o.call(n, r) && (e[r] = n[r]) } return e } t.exports = r; var o = Object.prototype.hasOwnProperty }, {}]
}, {}, [1]);