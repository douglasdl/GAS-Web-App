function doGet(e) {
    return HtmlService.createTemplateFromFile("page").evaluate();  
}

function userClicked(userInfo) {
    var url = "https://docs.google.com/spreadsheets/d/1eJv6ivcmLrYNCQKCqVvQc7R8cy6W_f8Khgt8aRSHrBA/edit#gid=0";
    var ss = SpreadsheetApp.openByUrl(url);
    var ws = ss.getSheetByName("Data");

    ws.appendRow([userInfo.firstName, userInfo.lastName, userInfo.app, new Date()]);

    //Logger.log(name + " clicked the button.");
}

function include(filename) {
    return HtmlService.createHtmlOutputFromFile(filename).getContent();
}