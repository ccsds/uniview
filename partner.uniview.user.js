// ==UserScript==
// @name         宇视文档自动下载
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://partner.uniview.com/docs/docs/*
// @require      http://cdn.bootcss.com/jquery/1.8.3/jquery.min.js
// @require     https://gist.githubusercontent.com/ccsds/22cc3c03af72f39ad3977de04a8daf16/raw/792dd2bfba4f0d5f7f2bdb0ccc4725004d048c42/mywaitForKeyElements.js

// @grant        none
// ==/UserScript==
var $1;
function step1(){
    $1("#divAccATabTitle").click();
}
function step2(){
    $1(".jNiceCheckbox")[0].click();
    downloadMul();
}

(function() {
        $1=$.noConflict(true);

    'use strict';
    waitForKeyElements('#divAccATabTitle', step1);
    waitForKeyElements('#_cloneWeaverTableDiv', step2);


    // Your code here...



})();
