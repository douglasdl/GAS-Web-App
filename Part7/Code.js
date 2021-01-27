// Spread Sheet address
var url = "https://docs.google.com/spreadsheets/d/1eJv6ivcmLrYNCQKCqVvQc7R8cy6W_f8Khgt8aRSHrBA/edit#gid=0";

function doGet(e) {
    if (e.parameters.v == "form") {
        return loadForm();
    } else {
        return HtmlService.createTemplateFromFile("home").evaluate();
    }
    
}






function loadOptions() {
    var ss = SpreadsheetApp.openByUrl(url);
    var ws = ss.getSheetByName("Options");
    var list = ws.getRange(1, 1, ws.getRange("A1").getDataRegion().getLastRow(), 1).getValues();
    var htmlListArray = list.map(function(r) { return '<option>' + r[0] + '</option>'; }).join(''); // Convert from array of arrays to array of strings
    list = htmlListArray;
    return list;
}

function loadForm() {
    template = HtmlService.createTemplateFromFile("page");  
    template.title = "Form";
    template.list = loadOptions();
    return template.evaluate();
}

function getData() {
    var data = ["Item 1", "Item 2", "Item 3"];
    return data;
}