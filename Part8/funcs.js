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

function getCalendarBusyDays() {
    var startDate = new Date();
    var endDate = new Date(new Date().setYear(startDate.getFullYear() + 1));
    var calendar = CalendarApp.getCalendarsByName("在宅勤務")[0];
    var events = calendar.getEvents(startDate, endDate);

    var days = events.map(function(e) { return e.getStartTime().setHours(0, 0, 0, 0); });
    var uniqueDays = [];

    days.forEach(function(d) {
        if(uniqueDays.indexOf(d) === -1) {
            uniqueDays.push(d);
        }
    })
    return uniqueDays;
}