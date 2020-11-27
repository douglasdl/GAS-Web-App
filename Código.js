function doGet1(e) {
  Logger.log(JSON.stringify(e));
  Logger.log(e.parameter['message']);
  return HtmlService.createHtmlOutputFromFile('ExampleFile1');  
}

function doGet2(e) {
  Logger.log(JSON.stringify(e));
  Logger.log(e.parameter['message']);
  var htmlOutput =  HtmlService.createTemplateFromFile('ExampleFile2');
  htmlOutput.message = e.parameter['message'];
  return htmlOutput.evaluate();
}

function doGet(e) {
  Logger.log(JSON.stringify(e));
  var htmlOutput =  HtmlService.createTemplateFromFile('ExampleFile3');
  if(!e.parameter['username']) {
    htmlOutput.username = '';   
  } else {
    htmlOutput.username = 'Username is: ' + e.parameter['username'];
  }
  htmlOutput.url = getUrl();  
  return htmlOutput.evaluate();
}


function getUrl() {
 var url = ScriptApp.getService().getUrl();
 return url;
}