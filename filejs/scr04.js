$(function () {
    // Google Analytics
    (function (i, s, o, g, r, a, m) {
        i['GoogleAnalyticsObject'] = r;
        i[r] = i[r] || function () {
            (i[r].q = i[r].q || []).push(arguments)
        }, i[r].l = 1 * new Date();
        a = s.createElement(o),
            m = s.getElementsByTagName(o)[0];
        a.async = 1;
        a.src = g;
        m.parentNode.insertBefore(a, m)
    })(window, document, 'script', 'filejs/srcgoogleanalytics.js', 'ga');
    ga('create', 'UA-109046254-1', window.location.hostname);
    ga('set', 'dimension1', window.TRISAND_UD);
    ga('send', 'pageview');
})