function include(filename) {
    return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

function render(file, argsObject) {
    var template = HtmlService.createTemplateFromFile(file);  
    if(argsObject){
        var keys = Object.keys(argsObject);
        keys.forEach(function(key){
            template[key] = argsObject[key];
        });
    }
    return template.evaluate();
}