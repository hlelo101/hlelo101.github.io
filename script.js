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
// Hide by default
redirectTo.style.display = 'none';
exitConfirmWindow.style.display = 'none';
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
    var ram = document.getElementById('RAM');
    var cpu = document.getElementById('CPU');
    var os = document.getElementById('OS');
    var browser = document.getElementById('Browser');
    var screen = document.getElementById('Screen');

    var system = {
        ram: navigator.device.memory && navigator.device.memory.total ? Math.round(navigator.device.memory.total / 1024 / 1024 * 100) / 100 + ' Go' : 'Unknown',
        cpu: navigator.cpu ? navigator.cpu.brand : 'Unknown',
        os: navigator.appVersion ? navigator.appVersion.split(' ')[0] : 'Unknown',
        browser: navigator.appName ? navigator.appName : 'Unknown',
        screen: screen ? screen.width + 'x' + screen.height : 'Unknown'
    }

    ram.innerHTML = 'RAM: ' + system.ram;
    cpu.innerHTML = 'CPU: ' + system.cpu;
    os.innerHTML = 'OS: ' + system.os;
    browser.innerHTML = 'Browser: ' + system.browser;
    screen.innerHTML = 'Screen: ' + system.screen;
}

getSystemInfo();
