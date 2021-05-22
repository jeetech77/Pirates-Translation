var inputArea = document.querySelector(".input-text");
var translateBtn = document.querySelector(".btn");
var outputArea = document.querySelector(".output-text");
var url = "	https://api.funtranslations.com/translate/pirate.json";
function constructURL(text) {
    return (url + "?text=" + text);
}
translateBtn.addEventListener('click', () => {
    var inputText = inputArea.value;
    finalURL=constructURL(inputText);
    fetch(finalURL).then(Response=>Response.json())
    .then(json=>{
        translatedText=json.contents.translated;
        outputArea.innerHTML=translatedText;
    })
})