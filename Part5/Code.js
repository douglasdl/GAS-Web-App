// Spread Sheet address
var url = "https://docs.google.com/spreadsheets/d/1eJv6ivcmLrYNCQKCqVvQc7R8cy6W_f8Khgt8aRSHrBA/edit#gid=0";

function doGet(e) {
    template = HtmlService.createTemplateFromFile("page");  
    template.title = "Form";
    template.list = loadOptions();
    return template.evaluate();
}

function userClicked(userInfo) {
    var ss = SpreadsheetApp.openByUrl(url);
    var ws = ss.getSheetByName("Data");

    ws.appendRow([userInfo.firstName, userInfo.lastName, userInfo.app, userInfo.zip, userInfo.estimate, new Date()]);

    //Logger.log(name + " clicked the button.");
}

function getCost(zipCode) {
    var ss = SpreadsheetApp.openByUrl(url);
    var ws = ss.getSheetByName("Estimate");
    var data = ws.getRange(1, 1, ws.getLastRow(), 2).getValues();
    var zipCodesList = data.map(function(r) { return r[0]; });
    var costList = data.map(function(r) { return r[1]; });
    var position = zipCodesList.indexOf(zipCode);
    if(position > -1 ) {
        return "R$" + costList[position].toFixed(2);
    } else {
        return 'Unavailable!';
    }
}

function include(filename) {
    return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

function loadOptions() {
    var ss = SpreadsheetApp.openByUrl(url);
    var ws = ss.getSheetByName("Options");
    var list = ws.getRange(1, 1, ws.getRange("A1").getDataRegion().getLastRow(), 1).getValues();
    var htmlListArray = list.map(function(r) { return '<option>' + r[0] + '</option>'; }).join(''); // Convert from array of arrays to array of strings
    list = htmlListArray;
    return list;
}

function getData() {
    var data = ["Item 1", "Item 2", "Item 3"];
    return data;
}