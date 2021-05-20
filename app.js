var inputArea=document.querySelector(".input-text");
var translateBtn=document.querySelector(".btn");
var outputArea=document.querySelector(".output-text");
translateBtn.addEventListener('click',()=>{
    var inputText=inputArea.value;
    outputArea.innerHTML=inputText;
    inputArea.style.color.green;
})