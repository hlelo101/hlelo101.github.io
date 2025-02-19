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
// Word of the day
var wordOfTheDay = document.getElementById('wordOfTheDay');
var wordOfTheDayButton = document.getElementById('wordOfTheDayButton');
// Set inintial scale
function setInitialScale() {
    var screenWidth = window.innerWidth;
    var initialScale = 1.0; // Default scale

    if (screenWidth < 1000) {
        initialScale = 2; // Scale for small screens
    }

    var metaTag = document.createElement('meta');
    metaTag.name = "viewport";
    metaTag.content = "width=device-width, initial-scale=" + initialScale;
    document.getElementsByTagName('head')[0].appendChild(metaTag);
}

window.onload = setInitialScale;
// Get Y position of an element
function getYPosition(element) {
    var rect = element.getBoundingClientRect();
    return rect.top + window.scrollY;
}
// Hide by default
redirectTo.style.display = 'none';
exitConfirmWindow.style.display = 'none';
sysInfo.style.display = 'none';
wordOfTheDay.style.display = 'none';
// Hide all boxes
function hideAllBoxes() {
    redirectTo.style.display = 'none';
    exitConfirmWindow.style.display = 'none';
    sysInfo.style.display = 'none';
    wordOfTheDay.style.display = 'none';
}
// Alert
alertButton.addEventListener('click', function() {
    alert('This is an alert');
});
// Redirect
redirectToButton.addEventListener('click', function() {
    if (redirectTo.style.display === 'none') {
        hideAllBoxes();
        if(window.innerWidth > 1000) {
            redirectTo.style.top = getYPosition(redirectToButton) + "px";
        }
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
        hideAllBoxes();
        if(window.innerWidth > 1000) {
            exitConfirmWindow.style.top = getYPosition(closeWebsite) + "px";
        }
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
    os.innerHTML = navigator.userAgent.match(/(Windows|Macintosh|Linux)/) ? navigator.userAgent.match(/(Windows|Macintosh|Linux)/)[0] : 'Unknown';
    // Opera 8.0+
    var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
    // Firefox
    var isFirefox = /Firefox[\/\s](\d+\.\d+)/.test(navigator.userAgent);
    // Safari 3.0+ "[object HTMLElementConstructor]" 
    var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && window['safari'].pushNotification));
    // Internet Explorer 6-11
    var isIE = /*@cc_on!@*/false || !!document.documentMode;
    // Edge
    var isEdge = window.navigator.userAgent.indexOf("Edg") > -1;
    // Chrome 1 - 79
    var isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
    // Edge (based on chromium) detection
    var isEdgeChromium = isChrome && (navigator.userAgent.indexOf("Edg") != -1);
    // Blink engine detection
    var isBlink = (isChrome || isOpera) && !!window.CSS;
    if(isFirefox) {
        browser.innerHTML = 'Firefox';
    } else if(isChrome) {
        browser.innerHTML = 'Chrome';
    } else if(isSafari) {
        browser.innerHTML = 'Safari';
    } else if(isIE) {
        browser.innerHTML = 'Internet Explorer';
    } else if(isEdge) {
        browser.innerHTML = 'Microsoft Edge';
    } else if(isEdgeChromium) {
        browser.innerHTML = 'Microsoft Edge Chromium';
    } else if(isBlink) {
        browser.innerHTML = 'Blink';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    getSystemInfo();
});

sysInfoButton.addEventListener('click', function() {
    if (sysInfo.style.display === 'none') {
        hideAllBoxes();
        if(window.innerWidth > 1000) {
            sysInfo.style.top = getYPosition(sysInfoButton) + "px";
        }
        sysInfo.style.display = 'block';
    } else {
        sysInfo.style.display = 'none';
    }
});
// The world of the day
const url = `https://api.github.com/repos/hlelo101/hlelo101.github.io/contents/wordOfTheDay.txt`;
async function fetchFileContent() {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const decodedContent = atob(data.content);
        const pTag = document.getElementById('wordOfTheDayShow');
        pTag.textContent = decodedContent;
        pTag.classList.add("animateText");
    } catch (error) {
        console.error('Error fetching file content:', error);
    }
}

wordOfTheDayButton.addEventListener('click', function() {
    if (wordOfTheDay.style.display === 'none') {
        hideAllBoxes();
        if(window.innerWidth > 1000) {
            wordOfTheDay.style.top = getYPosition(wordOfTheDayButton) + "px";
        }
        fetchFileContent();
        wordOfTheDay.style.display = 'block';
    } else {
        wordOfTheDay.style.display = 'none';
    }
});