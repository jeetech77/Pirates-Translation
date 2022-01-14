const inputArea = document.querySelector(".input-text");
const translateBtn = document.querySelector(".btn");
const outputArea = document.querySelector(".output-text");
const url = "	https://api.funtranslations.com/translate/pirate.json";
function constructURL(text) {
    return (url + "?text=" + text);
}
translateBtn.addEventListener('click', () => {
    const inputText = inputArea.value;
    finalURL=constructURL(inputText);
    fetch(finalURL).then(Response=>Response.json())
    .then(json=>{
        translatedText=json.contents.translated;
        outputArea.innerHTML=translatedText;
    })
    .catch(errorHandling);
})
function errorHandling(error){
    alert("Some Error Occured, Try After Sometime");
}
