﻿"use strict";

function loadExportPage() {
    document.querySelector("#exportJSON").addEventListener("click", exportJSON);
    document.querySelector("#importJSON").addEventListener("click", importJSON);

    //Export directly when the page is loaded
    exportJSON();
}

//Filter Import/Export
function exportJSON() {
    var textJson = document.querySelector("#exportedJSON");
    textJson.value = b.exportJson();
    textJson.select();
}

function importJSON() {
    var textJson = document.querySelector("#importedJSON");
    b.importJson(textJson.value);
    b.saveAll();
}