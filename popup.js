
document.addEventListener('DOMContentLoaded', () => {
    chrome.tabs.query({
        active: true,
        lastFocusedWindow: true 
    }, function(array_of_Tabs) {
        var tab = array_of_Tabs[0];
        var url = tab.url;
        var title = tab.title;
        document.getElementById("title").innerHTML=("扫码打开:<br/>"+title)
        var qrcode = new QRCode(document.getElementById("qrcode"), {
            text: url,
            width: 128,
            height: 128,
            colorDark : "#596f5c",
            colorLight : "#ffffff",
            correctLevel : QRCode.CorrectLevel.H
        });
    });

});
