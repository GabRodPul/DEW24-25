var employees = [
    { "id": 1, "name": "MIRIAM CASTIÑEIRA BREA", "department": "IT" },
    { "id": 2, "name": "GONZALO MULET FIGUERAS", "department": "IT" },
    { "id": 3, "name": "FRANCISCO JOSE GRAÑA BARBERA", "department": "IT" },
    { "id": 4, "name": "IRENE POMBO JORDA", "department": "HR" }
];
// alert(employees);
var table = document.createElement("table");
var keys = Object.keys(employees[0]);
{
    var keysRow_1 = document.createElement("tr");
    keys.forEach(function (k) {
        keysRow_1.appendChild(document.createElement("th"))
            .innerText = k.charAt(0).toUpperCase()
            + k.substring(1);
    });
    table.appendChild(keysRow_1);
}
employees.forEach(function (e) {
    var row = document.createElement("tr");
    keys.forEach(function (k) {
        row.appendChild(document.createElement("td"))
            .textContent = e[k];
    });
    table.appendChild(row);
});
document.querySelector("#table-container")
    .appendChild(table);
