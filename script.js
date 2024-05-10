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
