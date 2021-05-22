var inputArea = document.querySelector(".input-text");
var translateBtn = document.querySelector(".btn");
var outputArea = document.querySelector(".output-text");
var url = "	https://api.funtranslations.com/translate/pirate.json";
translateBtn.addEventListener('click', () => {
    var inputText = inputArea.value;
    finalURL=constructURL(inputArea);
    fetch(finalURL).then(Response=>Response.json)
    .then(json=>{
        translatedText=josn.content.translated;
        outputArea.innerHTML=translatedText;
    })
})
function constructURL(text) {
    return url + "?text=" + text;
}