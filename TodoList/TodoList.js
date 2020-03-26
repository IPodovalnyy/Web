document.addEventListener("DOMContentLoaded", function () {
    var addButton = document.querySelector(" button");
    addButton.addEventListener("click", addRecordToList);

    var inputRecord = document.getElementById("input_record");
    inputRecord.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addRecordToList();
        }
    });

    function addRecordToList() {
        var input = document.getElementById("input_record");
        var record = input.value;

        if (record.trim() === "") {
            alert("Введите запись");
            return;
        }
        input.value = "";

        var tableRecord = document.getElementById("tableRecords");
        var bodyTableList = tableRecord.getElementsByTagName("tbody");

        if (bodyTableList.length === 0) {
            var bodyTable = document.createElement("tbody");
            tableRecord.appendChild(bodyTable);
        } else {
            bodyTable = bodyTableList[0];
        }

        var numRows = bodyTable.rows.length;

        bodyTable.insertRow(numRows);
        var row = bodyTable.getElementsByTagName("tr")[numRows];

        var td1 = document.createElement("td");
        td1.innerHTML = record;

        var buttonDel = document.createElement("button");
        buttonDel.innerHTML = "Удалить<br>запись";
        buttonDel.setAttribute("type", "button");
        buttonDel.addEventListener("click", function () {
            var row = this.parentElement.parentElement; // родитель кнопки td, родитель td строка
            row.parentElement.removeChild(row);
        });

        var buttonEdit = document.createElement("button");
        buttonEdit.innerHTML = "Изменить<br>запись";
        buttonEdit.addEventListener("click", function () {
            var row = this.parentElement.parentElement;
            createEditRow(row);
        });

        var td2 = document.createElement("td");
        td2.appendChild(buttonDel);
        td2.appendChild(buttonEdit);

        row.appendChild(td1);
        row.appendChild(td2);
    }

    function createEditRow(rowToEdit) {
        rowToEdit.style.display = "none";

        var inputEditRecord = document.createElement("input");
        inputEditRecord.setAttribute("type", "text");
        inputEditRecord.value = rowToEdit.cells[0].innerText;

        var td1 = document.createElement("td");
        td1.appendChild(inputEditRecord);

        var buttonCancel = document.createElement("button");
        buttonCancel.innerHTML = "Отменить";
        buttonCancel.addEventListener("click", function () {
            row.parentElement.removeChild(row);
            rowToEdit.style.display = "table";
        });

        var buttonSave = document.createElement("button");
        buttonSave.innerHTML = "Применить";
        buttonSave.addEventListener("click", function () {
            var row = this.parentElement.parentElement;
            var newRecord = row.getElementsByTagName("input")[0].value;

            if (newRecord.trim() === "") {
                alert("Введите запись");
                return;
            }

            rowToEdit.cells[0].innerHTML = newRecord;
            row.parentElement.removeChild(row);
            rowToEdit.style.display = "table";
        });

        var td2 = document.createElement("td");
        td2.appendChild(buttonCancel);
        td2.appendChild(buttonSave);

        var bodyTable = document.getElementsByTagName("tbody")[0];

        bodyTable.insertRow(rowToEdit.rowIndex);
        var row = bodyTable.getElementsByTagName("tr")[rowToEdit.rowIndex];

        row.appendChild(td1);
        row.appendChild(td2);
    }
});