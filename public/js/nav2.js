const newHtmlFile = new XMLHttpRequest();
newHtmlFile.open('GET', '../../public/html/nav2.html', true);
newHtmlFile.send();
newHtmlFile.onload = function () {
    document.getElementById('CargarNav').innerHTML = newHtmlFile.responseText;
};