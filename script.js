var selectedRow = null;
function onFormSubmit(e){
    event.preventDefault();
    var formData = readFormData();
    if(selectedRow === null){
        insertNewRecord(formData);
        localStorage.setItem('myprogram',JSON.stringify(formData));
        
        var guardado = localStorage.getItem('myprogram');
        console.log('ProgramaObtenido: ', JSON.parse(guardado));
    }
    else{
        updateRecord(formData);
    }
    resetForm();
}

//Retrieve the data
function readFormData(){
    var formData = {};
    formData["cursoCode"] = document.getElementById("cursoCode").value;
    formData["nombreCurso"] = document.getElementById("nombreCurso").value;
    formData["numCupos"] = document.getElementById("numCupos").value;
    formData["perPrecio"] = document.getElementById("perPrecio").value;
    return formData;
}

//Insert the data
function insertNewRecord(data){
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.cursoCode;
    var cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.nombreCurso;
    var cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.numCupos;
    var cell4 = newRow.insertCell(3);
        cell4.innerHTML = data.perPrecio;
    var cell5 = newRow.insertCell(4);
        cell5.innerHTML = `<button onClick='onEdit(this)'>Editar</button> <button onClick='onDelete(this)'>Eliminar</button>`
}

//Edit the data
function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById('cursoCode').value = selectedRow.cells[0].innerHTML;
    document.getElementById('nombreCurso').value = selectedRow.cells[1].innerHTML;
    document.getElementById('numCupos').value = selectedRow.cells[2].innerHTML;
    document.getElementById('perPrecio').value = selectedRow.cells[3].innerHTML;
}

function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.cursoCode;
    selectedRow.cells[1].innerHTML = formData.nombreCurso;
    selectedRow.cells[2].innerHTML = formData.numCupos;
    selectedRow.cells[3].innerHTML = formData.perPrecio;
}

//Delete the data
function onDelete(td){
    if(confirm('¿Estas seguro de eliminar este registro?')){
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
    }
     resetForm();   
}

//Reset the data
function resetForm(){
    document.getElementById('cursoCode').value = '';
    document.getElementById('nombreCurso').value = '';
    document.getElementById('numCupos').value = '';
    document.getElementById('perPrecio').value = '';
}