function funcionProcessar()
{
    let varCadena ="Valores de los controles:";
    //seleccionar formulario
    let varForm = document.forms["frmControles"]
    //leer valores de los controles
    let varRadio = varForm.elements["radioOpciones"]; varCadena += "\n -Radio: " + varRadio.value;
    let varCheck = varForm.elements["checkOpciones"]; varCadena += "\n -Check: " + varCheck.value;
    let varSelect = varForm.elements["selectBasic"]; varCadena += "\n -Select: " + varSelect.value;
    let varMultiiple = varForm.elements["selectMultiple"]; varCadena += "\n -Multiple: " + varMultiiple.value;
    // otros controles (archivo, color y fecha)
    let varFile = varForm.elements["varFile"]; varCadena += "\n -File: " + varFile.value;
    let varColor = varForm.elements["varColor"]; varCadena += "\n -Color: " + varColor.value;
    let varDate = varForm.elements["varDate"]; varCadena += "\n -Date: " + varDate.value;
    let varTime = varForm.elements["varTime"]; varCadena += "\n -Time: " + varTime.value;
    let varWeek = varForm.elements["varWeek"]; varCadena += "\n -Week: " + varWeek.value;
    let varMonth = varForm.elements["varMonth"]; varCadena += "\n -Month: " + varMonth.value;
    alert(varCadena);
}
