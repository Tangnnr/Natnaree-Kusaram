var i = 0;
function functionName() {
    alert("Hello!");
    alert("Your browser says hi!");
}
function postFunction() {
    var textbox = document.getElementById("text1").value;
    if (i == 0 && textbox != '') {
        var Topic1 = document.getElementById("topic1");
        Topic1.innerHTML = textbox;
        i++
    }
    else if (i == 1 && textbox != '') {
        var Comment1 = document.getElementById("comment1");
        Comment1.innerHTML = textbox;
        i++
    }
    else if (i == 2 && textbox != '') {
        var Comment2 = document.getElementById("comment2");
        Comment2.innerHTML = textbox;
        i++
    }
    document.getElementById('text1').value = '';
}
function clearFunction() {
    document.getElementById('topic1').innerHTML = '';
    document.getElementById('comment1').innerHTML = '';
    document.getElementById('comment2').innerHTML = '';
    document.getElementById('text1').value = '';
    i = 0;
}
