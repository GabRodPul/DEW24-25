var DEFAULT_COLS = 5;
var DEFAULT_ROWS = 3;
var form = document.createElement("form");
{
    var addNumberInput = function (form, id, name, placeholder) {
        var label = document.createElement("label");
        label.htmlFor = id;
        label.textContent = name.charAt(0).toUpperCase()
            + name.substring(1)
            + ": ";
        var input = document.createElement("input");
        input.type = "number";
        input.id = id;
        input.name = name;
        input.placeholder = placeholder.toString();
        input.min = "1";
        var error = document.createElement("p");
        error.id = "error-" + id;
        error.textContent = "Invalid value for ".concat(name, ", must be a number >= 1");
        error.setAttribute("style", "color:red; display: none;");
        var div = document.createElement("div");
        div.appendChild(label);
        div.appendChild(input);
        div.appendChild(error);
        form.appendChild(div);
    };
    addNumberInput(form, "rows", "rows", DEFAULT_ROWS);
    addNumberInput(form, "cols", "cols", DEFAULT_COLS);
}
var table = document.createElement("table");
var keys = ["rows", "cols"];
{
    var button = document.createElement("button");
    // button.type  = "button";
    button.textContent = "Generate Table";
    button.addEventListener("click", function (event) {
        // Stop page from reloading
        event.preventDefault();
        // Validate input
        var values = { "rows": -1, "cols": -1 };
        var errors = false;
        keys.forEach(function (k) {
            var element = form.querySelector("#" + k);
            var v = parseInt(element.value);
            var nan = Number.isNaN(v);
            errors = nan || errors;
            values[k] = v;
            form.querySelector("#error-" + k)
                .setAttribute("style", "color:red; display: ".concat(nan ? "inline-block" : "none", ";"));
        });
        if (errors)
            return;
        // Reset table
        table.innerHTML = "";
        // Build table
        for (var x = 1; x <= values.rows; ++x) {
            var row = document.createElement("tr");
            for (var y = 1; y <= values.cols; ++y) {
                row.appendChild(document.createElement("td"))
                    .textContent = "Row: ".concat(x, ", Col: ").concat(y);
                console.log("child");
            }
            table.appendChild(row);
        }
    });
    form.appendChild(button);
    document.querySelector("body")
        .appendChild(form)
        .appendChild(table);
}
