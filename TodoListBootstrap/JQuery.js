$(document).ready(function () {
    $("button").on("click", addRecordToList);

    $("#input_record").on("keypress", function () {
        if (event.key === "Enter") {
            addRecordToList();
        }
    });

    function addRecordToList() {
        var input = $("#input_record")[0];
        var record = $(input).val();

        if (record.trim() === "") {
            alert("Введите запись");
            return;
        }

        input.value = "";

        var buttonDel = $("<button type='button' class=\"btn btn-outline-danger\">Удалить запись</button>");
        buttonDel.on("click", function () {
            var row = this.closest("tr");
            row.remove();
        });

        var buttonEdit = $("<button  type='button' class=\"btn btn-outline-primary\">Изменить запись</button>");
        buttonEdit.on("click", function () {
            var row = $(this.closest("tr"));
            createEditRow(row);
        });

        var row = $(
            "<tr class='row'>" +
            "<td class='col-4'></td>" +
            "<td class='col-8'></td>" +
            "</tr>");

        var td = row.children("td");

        $(td[0]).text(record);
        buttonDel.appendTo(td[1]);
        buttonEdit.appendTo(td[1]);

        var bodyTableList = $("tbody");

        if (bodyTableList.length === 0) {
            var bodyTable = $("<tbody></tbody>");
            bodyTable.appendTo($("#table_records"));
        } else {
            bodyTable = bodyTableList[0];
        }

        row.appendTo(bodyTable);
    }

    function createEditRow(rowToEdit) {
        rowToEdit.hide();

        var inputEditRecord = $("<input type='text'>");
        var text = $(rowToEdit.children("td")[0]).text();

        inputEditRecord.val(text);
        inputEditRecord.appendTo("tbody");

        var buttonCancel = $("<button type='button' class=\"btn btn-outline-warning\">Отменить</button>");
        buttonCancel.on("click", function () {
            row.remove();
            rowToEdit.show();
        });

        var buttonSave = $("<button type='button' class=\"btn btn-outline-success\">Применить</button>");
        buttonSave.on("click", function () {
            var row = $(this.closest("tr"));
            var newRecord = $(row.find("input")).val();

            if (newRecord.trim() === "") {
                alert("Введите запись");
                return;
            }

            $(rowToEdit.children("td")[0]).text(newRecord);
            row.remove();
            rowToEdit.show();
        });

        var row = $(
            "<tr class='row'>" +
            "<td class='col-4'></td>" +
            "<td class='col-8'></td>" +
            "</tr>");

        var td = row.children("td");
        inputEditRecord.appendTo(td[0]);
        buttonCancel.appendTo(td[1]);
        buttonSave.appendTo(td[1]);

        var parentRow = rowToEdit.closest("tr");
        row.insertBefore(parentRow);
    }
});
