// referencia a codemirror: https://codemirror.net/doc/manual.html
CodeMirror.fromTextArea(document.getElementById("default"),{
    lineNumbers : true,
    theme : "yonce",
    matchBrackets: true,
    mode: "julia"
});