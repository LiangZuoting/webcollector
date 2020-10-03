function toGoogle()
{
let param = document.getElementById("searchKey").value
window.open("https://www.google.com/search?q=" + param, "_blank")
}

function toBing()
{
let param = document.getElementById("searchKey").value
window.open("https://cn.bing.com/search?q=" + param, "_blank")
}

function toBaidu()
{
let param = document.getElementById("searchKey").value
window.open("https://www.baidu.com/s?wd=" + param, "_blank")
}

function loadOftenUse() {
let request = new XMLHttpRequest();
request.open("get", "oftenuse.json");
request.responseType = "text";
request.send();
request.onload = function() {
let table = document.getElementById("oftenTable");
let data = request.response;
let root = JSON.parse(data);
let sites = root["sites"];
let row;
for (let i = 0; i < sites.length; ++i) {
if (i % 6 == 0) {
row = table.insertRow(i / 6);
}
let cell = row.insertCell(i % 6);
let site = sites[i];
let a = document.createElement("a");
cell.appendChild(a);
a.style.fontSize = 24;
a.href = site.url;
a.text = site.title;
a.target = "_blank";
}
};
}

function loadFavorite() {
let request = new XMLHttpRequest();
request.open("get", "favorite.json");
request.responseType = "text";
request.send();
request.onload = function() {
let table = document.getElementById("favoriteTable");
let data = request.response;
let root = JSON.parse(data);
let categories = root["categories"];
let row;
for (let i = 0; i < categories.length; ++i) {
let category = categories[i];
if (i % 4 == 0) {
row = table.insertRow(i / 4);
}
let cell = row.insertCell(i % 4);
let sel = document.createElement("select");
sel.className = "common-select";
cell.appendChild(sel);
sel.addEventListener("change", function() {
window.open(sel.value, "_blank");
sel.selectedIndex = 0;
});
let head = document.createElement("option");
sel.appendChild(head);
head.text = category.name;
head.disabled = true;
head.selected = true;
let sites = category.sites;
for (let i = 0; i < sites.length; ++i) {
let site = sites[i];
let op = document.createElement("option");
sel.appendChild(op);
op.value = site.url;
op.text = site.title;
}
}
};
}

function onLoad() {
loadOftenUse();
loadFavorite();
}