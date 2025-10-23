// Initialize elements
var fetchStatus = document.createElement("h2");
fetchStatus.textContent = "Fetching employees...";
var table = document.createElement("table");
var keys = ["id", "name", "department"];
{
    var keysRow_1 = document.createElement("tr");
    keys.forEach(function (k) {
        keysRow_1.appendChild(document.createElement("th"))
            .innerText = k.charAt(0).toUpperCase()
            + k.substring(1);
    });
    table.appendChild(keysRow_1);
    var container = document.querySelector("#table-container");
    container.appendChild(fetchStatus);
    container.appendChild(table);
}
// Fetch data
fetch("./employees.json")
    .then(function (res) { return res.json(); })
    .then(function (data) {
    if (!Array.isArray(data))
        throw new Error("Fetched data isn't an array");
    data.forEach(function (e) {
        var row = document.createElement("tr");
        keys.forEach(function (k) {
            row.appendChild(document.createElement("td"))
                .textContent = e[k];
        });
        table.appendChild(row);
    });
    fetchStatus.textContent = "EMPLOYEES";
})
    .catch(function (err) {
    fetchStatus.textContent = "FETCHING FAILED";
});
