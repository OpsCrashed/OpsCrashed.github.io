// ==UserScript==
// @name         Grepolis Scalette
// @namespace    https://github.com/OpsCrashed/GrepolisScalette
// @version      1.0
// @description  Script per Scalettare!
// @author       OpsCrashed
// @match        https://*.grepolis.com/game/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=grepolis.com
// @grant        none
// ==/UserScript==

let $ = window.jQuery;

$(document).ready(function () {

    let $CssStyle = $('<link rel="stylesheet" href="https://opscrashed.github.io/css/default.css" type="text/css">');

    $("head").append($CssStyle);

});
