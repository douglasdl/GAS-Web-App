// Spread Sheet address
var url = "https://docs.google.com/spreadsheets/d/1eJv6ivcmLrYNCQKCqVvQc7R8cy6W_f8Khgt8aRSHrBA/edit#gid=0";
var Route = {};
Route.path = function(route, callback) {
    Route[route] = callback;
}

function doGet(e) {

    Route.path("form", loadForm);
    Route.path("about", loadAbout);


    if (Route[e.parameters.v]) {
        return Route[e.parameters.v]();
    } else {
        return render("home");
    }
    
}

function loadAbout() {
    return render("about", {title: "About", other: "Other text."});
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
    var title = "Form";
    var htmlListArray = loadOptions();
    return render("page", { list: htmlListArray, title: title });
}



function getData() {
    var data = ["Item 1", "Item 2", "Item 3"];
    return data;
}