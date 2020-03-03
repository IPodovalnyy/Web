function addRecordToList() {
    var input = document.getElementById("inputRecord");
    var record = input.value;

    if (record.trim() === "") {
        alert("Введите запись");
        return 0;
    }

    input.value = "";

    var tableRecord = document.getElementById("tableRecords");
    var bodyTable = tableRecord.getElementsByTagName("tbody")[0];

    bodyTable.insertRow(0);
    var row = bodyTable.getElementsByTagName("tr")[0];

    var td1 = document.createElement("td");
    td1.innerHTML = record;

    var buttonDel = document.createElement("button");
    buttonDel.innerHTML = "Удалить\nзапись";
    buttonDel.setAttribute("type", "button");
    buttonDel.addEventListener("click", function () {
        var row = this.parentElement.parentElement;
        row.parentElement.removeChild(row);
    });

    var td2 = document.createElement("td");
    td2.appendChild(buttonDel);

    row.appendChild(td1);
    row.appendChild(td2);
}