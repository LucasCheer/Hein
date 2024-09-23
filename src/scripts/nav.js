const newHtmlFile = new XMLHttpRequest();
newHtmlFile.open('GET', '../../public/html/nav.html', true);
newHtmlFile.send();
newHtmlFile.onload = function () {
    document.getElementById('CargarNav').innerHTML = newHtmlFile.responseText;
};