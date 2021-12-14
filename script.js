var selectedRow = null;
function onFormSubmit(e) {
    event.preventDefault();
    var formData = readFormData();
    if(selectedRow === null) {
        insertNewRecord(formData);
    }
    else {
        updateRecord(formData);
    }
    resetForm();
}

//Retrieve data
function readFormData() {
    var formData = {};
    formData["teacherCode"] = document.getElementById("teacherCode").value;
    formData["item"] = document.getElementById("item").value;
    formData["qty"] = document.getElementById("qty").value;
    formData["perPrice"] = document.getElementById("perPrice").value;
    return formData;
}

//Insert Data
function insertNewRecord(data) {
    var table = document.getElementById("productList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.teacherCode;
    var cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.item;
    var cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.qty;
    var cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.perPrice;
    var cell5 = newRow.insertCell(4);
    cell5.innerHTML = `<button onClick='onEdit(this)'>Edit</button> <button onClick='onDelete(this)'>Delete</button>`

}

//Edit data
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById('teacherCode').value = selectedRow.cells[0].innerHTML;
    document.getElementById('item').value = selectedRow.cells[1].innerHTML;
    document.getElementById('qty').value = selectedRow.cells[2].innerHTML;
    document.getElementById('perPrice').value = selectedRow.cells[3].innerHTML;

}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.teacherCode;
    selectedRow.cells[1].innerHTML = formData.item;
    selectedRow.cells[2].innerHTML = formData.qty;
    selectedRow.cells[3].innerHTML = formData.perPrice;
}

//Delete data
function onDelete(td) {
    if(confirm('Do you wish to delete this message?')) {
        row = td.parentElement.parentElement
        document.getElementById('productList').deleteRow(row.rowIndex);
    }
    resetForm();
}

//Reset data
function resetForm() {
    document.getElementById('teacherCode').value = '';
    document.getElementById('item').value = '';
    document.getElementById('qty').value = '';
    document.getElementById('perPrice').value = '';
}