function doGet(e) {
    // How to inform parameters by the URL (Get Method)
    // url/dev?name=Douglas&lname=Leal&cat=1,2,3
    //Logger.log(e.parameter);
    return HtmlService.createHtmlOutputFromFile("page");  
}

function userClicked(name) {
    var url = "https://docs.google.com/spreadsheets/d/1eJv6ivcmLrYNCQKCqVvQc7R8cy6W_f8Khgt8aRSHrBA/edit#gid=0";
    var ss = SpreadsheetApp.openByUrl(url);
    var ws = ss.getSheetByName("Data");

    ws.appendRow([name, new Date()]);

    //Logger.log(name + " clicked the button.");
}