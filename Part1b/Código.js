function doGet(e) {
    // How to inform parameters by the URL (Get Method)
    // url/dev?name=Douglas&lname=Leal&cat=1,2,3
    //Logger.log(e);
    return HtmlService.createHtmlOutputFromFile("page");  
}

function userClicked() {
    Logger.log("User clicked");
}