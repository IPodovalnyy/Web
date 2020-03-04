function pressEnter(event) {
    if (event.keyCode === 13) {
        addRecordToList();
    }
}

function addRecordToList() {
    var input = document.getElementById("inputRecord");
    var record = input.value;

    if (record.trim() === "") {
        alert("Введите запись");
        return 0;
    }

    input.value = "";

    var tableRecord = document.getElementById("tableRecords");
    var bodyTable = tableRecord.getElementsByTagName("tBody")[0];
    var numRows = bodyTable.rows.length;

    bodyTable.insertRow(numRows);
    var row = bodyTable.getElementsByTagName("tr")[numRows];

    var td1 = document.createElement("td");
    td1.innerHTML = record;

    var buttonDel = document.createElement("button");
    buttonDel.innerHTML = "Удалить\nзапись";
    buttonDel.setAttribute("type", "button");
    buttonDel.addEventListener("click", function () {
        var row = this.parentElement.parentElement;
        row.parentElement.removeChild(row);
        displayScrollBar();
    });

    var td2 = document.createElement("td");
    td2.appendChild(buttonDel);

    row.appendChild(td1);
    row.appendChild(td2);

    displayScrollBar();
}

function displayScrollBar() {
    const paddingIncrease = 5;
    var table = document.querySelector(".display_record table");
    var height = table.scrollHeight;
    var maxHeight = Number(window.getComputedStyle(table).maxHeight.replace(/\D/g, ""));

    if (height > maxHeight + paddingIncrease) {
        table.style.overflowY = "scroll";
    }
    else {
        table.style.overflowY = "hidden";
    }
}