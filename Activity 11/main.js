"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var API_URL = "https://places.googleapis.com/v1/places:searchText";
var form = document.querySelector("body")
    .appendChild(document.createElement("form"));
var list = document.querySelector("body")
    .appendChild(document.createElement("ul"));
var input = form.appendChild(document.createElement("input"));
input.type = "text";
var button = form.appendChild(document.createElement("button"));
button.textContent = "Search";
button.addEventListener("click", function (e) {
    var _a, _b;
    e.preventDefault();
    var textQuery = (_b = (_a = input.value) === null || _a === void 0 ? void 0 : _a.trim()) !== null && _b !== void 0 ? _b : "";
    if (textQuery == "")
        alert("Invalid query");
    fetch(API_URL, {
        method: "POST",
        body: JSON.stringify({ textQuery: textQuery, key: "EMPTY" })
    })
        .then(function (res) { return res.json(); })
        .then(function (res) { return res.places.places.forEach(function (p) {
        list.appendChild(document.createElement("li"))
            .textContent = p.name;
    }); })
        .catch(function (e) { return alert("Failed to fetch Places: ".concat(e)); });
});
