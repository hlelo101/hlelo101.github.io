var alertButton = document.getElementById('alertButton');
var redirectToButton = document.getElementById('usefulWebsite');
var redirectTo = document.getElementById('redirectTo');
var redirectToInput = document.getElementById('redirectToInput');
var redirectButton = document.getElementById('redirectButton');
redirectTo.style.display = 'none';

alertButton.addEventListener('click', function() {
    alert('This is an alert');
});
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