$(document).ready(function () {
    $("button").on("click", addRecordToList);

    $("input_record").on("keypress", function () {
        if (event.key === "Enter") {
            addRecordToList();
        }
    });
});

function addRecordToList() {
    var input = $("#input_record")[0];
    var record = input.value;

    if (record.trim() === "") {
        alert("Введите запись");
        return;
    }
    input.value = "";

    var bodyTable = $("tbody")[0];
    var buttonDel = $("<button type='button'>Удалить<br>запись</button>");
    buttonDel.on("click", function () {
        var row = this.closest("tr");
        row.parentElement.removeChild(row);
        displayScrollBar(bodyTable);
    });

    var buttonEdit = $("<button type='button'>Изменить<br>запись</button>");
    buttonEdit.on("click", function () {
        var row = $(this.closest("tr"));
        createEditRow(row);
    });

    var row = $(
        "<tr>" +
        "<td></td>" +
        "<td></td>" +
        "</tr>");

    var td = row.children("td");
    $(td[0]).text(record);
    buttonDel.appendTo(td[1]);
    buttonEdit.appendTo(td[1]);

    row.appendTo(bodyTable);

    displayScrollBar(bodyTable);
}

function createEditRow(rowToEdit) {
    rowToEdit.hide();

    var inputEditRecord = $("<input type='text'>");
    var text = $(rowToEdit.children("td")[0]).text();
  // inputEditRecord.text(text);
    inputEditRecord.html(text);
    inputEditRecord.appendTo("tbody");

    var buttonCancel = $("<button type='button'>Отменить</button>");
    buttonCancel.on("click", function () {
        row.remove();
        rowToEdit.show();
    });

    var buttonSave = $("<button type='button'>Применить</button>");
    buttonSave.on("click", function () {
        var row = this.closest("tr");
        var newRecord = $(row.children("input")[0]).text();
        if (newRecord.trim() === "") {
            alert("Введите запись");
            return;
        }
        $(rowToEdit.children("td")).text(newRecord);
        row.remove();
        rowToEdit.show();
    });

    var row = $(
        "<tr>" +
        "<td></td>" +
        "<td></td>" +
        "</tr>");

    var td = row.children("td");
    inputEditRecord.appendTo(td[0]);
    buttonCancel.appendTo(td[1]);
    buttonSave.appendTo(td[1]);

    var parentRow = rowToEdit.closest("tr");
    row.insertBefore(parentRow);
   // row.appendTo("tbody");


    /*
     bodyTable.insertRow(rowToEdit.rowIndex);
     var row = bodyTable.getElementsByTagName("tr")[rowToEdit.rowIndex];
     */
}

function displayScrollBar(bodyTable) {
    var paddingIncrease = 5;
    var height = bodyTable.scrollHeight;
    var maxHeight = Number(window.getComputedStyle(bodyTable).maxHeight.replace(/\D/g, ""));

    if (height > maxHeight + paddingIncrease) {
        bodyTable.classList.remove("overflowBodyTableHidden");
        bodyTable.classList.add("overflowBodyTableAuto");
    }
    else {
        bodyTable.classList.remove("overflowBodyTableAuto");
        bodyTable.classList.add("overflowBodyTableHidden");

    }
}