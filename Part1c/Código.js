function doGet(e) {
    // How to inform parameters by the URL (Get Method)
    // url/dev?name=Douglas&lname=Leal&cat=1,2,3
    //Logger.log(e.parameter);
    return HtmlService.createHtmlOutputFromFile("page");  
}

function userClicked(name) {
    Logger.log(name + " clicked the button.");
}