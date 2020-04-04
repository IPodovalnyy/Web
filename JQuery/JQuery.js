$(document).ready(function () {
    $("#add_button").click("click", addRecordToList);

    $("#input_record").click("keypress", function () {
        if (event.key === "Enter") {
            addRecordToList();
        }
    });

    function addRecordToList() {
        var input = $("#input_record").eq(0);
        var record = input.val();

        if (record.trim() === "") {
            alert("Введите запись");
            return;
        }

        input.val("");

        var delButton = $("<button type='button'>Удалить<br>запись</button>");
        delButton.click("click", function () {
            var row = this.closest("tr");
            row.remove();
        });

        var editButton = $("<button type='button'>Изменить<br>запись</button>");
        editButton.click("click", function () {
            var row = $(this).closest("tr");
            createEditRow(row);
        });

        var row = $(
            "<tr>" +
            "<td></td>" +
            "<td></td>" +
            "</tr>");

        var td = row.children("td");

        (td.eq(0)).text(record);
        delButton.appendTo(td.eq(1));
        editButton.appendTo(td.eq(1));

        var tableBody = $(".todo_list tbody").eq(0);
        row.appendTo(tableBody);
    }

    function createEditRow(rowToEdit) {
        rowToEdit.hide();

        var editRecordInput = $("<input type='text'>");
        var text = (rowToEdit.children("td").eq(0)).text();

        editRecordInput.val(text);
        editRecordInput.appendTo("tbody");

        var cancelButton = $("<button type='button'>Отменить</button>");
        cancelButton.click("click", function () {
            row.remove();
            rowToEdit.show();
        });

        var saveButton = $("<button type='button'>Применить</button>");
        saveButton.click("click", function () {
            var row = $(this).closest("tr");
            var newRecord = $(row.find("input")).val();

            if (newRecord.trim() === "") {
                alert("Введите запись");
                return;
            }

            (rowToEdit.children("td").eq(0)).text(newRecord);
            row.remove();
            rowToEdit.show();
        });

        var row = $(
            "<tr>" +
            "<td></td>" +
            "<td></td>" +
            "</tr>");

        var td = row.children("td");

        editRecordInput.appendTo(td.eq(0));
        cancelButton.appendTo(td.eq(1));
        saveButton.appendTo(td.eq(1));

        var parentRow = rowToEdit.closest("tr");
        row.insertBefore(parentRow);
    }
});
