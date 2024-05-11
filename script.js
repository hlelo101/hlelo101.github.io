// Alert
var alertButton = document.getElementById('alertButton');
// Redirect
var redirectToButton = document.getElementById('usefulWebsite');
var redirectTo = document.getElementById('redirectTo');
var redirectToInput = document.getElementById('redirectToInput');
var redirectButton = document.getElementById('redirectButton');
// Exit
var closeWebsite = document.getElementById('closeWebsite');
var exitConfirmWindow = document.getElementById('exitConfirm');
var exitNo = document.getElementById('exitNo');
//GithubRedirect
var githubRedirect = document.getElementById('githubRedirect');
// System info
var sysInfo = document.getElementById('sysInfo');
var sysInfoButton = document.getElementById('sysInfoButton');
// Hide by default
redirectTo.style.display = 'none';
exitConfirmWindow.style.display = 'none';
sysInfo.style.display = 'none';
// Alert
alertButton.addEventListener('click', function() {
    alert('This is an alert');
});
// Redirect
redirectToButton.addEventListener('click', function() {
    if (redirectTo.style.display === 'none') {
        redirectTo.style.display = 'block';
    } else {
        redirectTo.style.display = 'none';
    }
});
redirectButton.addEventListener('click', function() {
    var url = redirectToInput.value;
    if (!url.startsWith('http://')) {
        url = 'http://' + url;
    }
    window.location.href = url;
});
// Exit
closeWebsite.addEventListener('click', function() {
    if (exitConfirmWindow.style.display === 'none') {
        exitConfirmWindow.style.display = 'block';
    } else {
        exitConfirmWindow.style.display = 'none';
    }
});
exitNo.addEventListener('click', function() {
    exitConfirmWindow.style.display = 'none';
});
exitYes.addEventListener('click', function() {
    window.close();
});
//GithubRedirect
githubRedirect.addEventListener('click', function() {
    window.location.href = 'https://github.com/hlelo101';
});
// Get system info
function getSystemInfo() {
    var os = document.getElementById('OS');
    var browser = document.getElementById('browser');
    var screen = document.getElementById('screen');
    os.innerHTML = navigator.userAgent.match(/(Windows|Macintosh|Linux)/) ? navigator.userAgent.match(/(Windows|Macintosh|Linux)/)[0] : 'Unknown';
    browser.innerHTML = navigator.userAgent.match(/(Apple.*Safari|Chrome|Fire.*Fox|Opera|Trident.*rv)/) ? navigator.userAgent.match(/(Apple.*Safari|Chrome|Fire.*Fox|Opera|Trident.*rv)/)[0] : 'Unknown';
}

document.addEventListener('DOMContentLoaded', function() {
    getSystemInfo();
});

sysInfoButton.addEventListener('click', function() {
    if (sysInfo.style.display === 'none') {
        sysInfo.style.display = 'block';
    } else {
        sysInfo.style.display = 'none';
    }
});
