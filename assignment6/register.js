window.onload = pageLoad;

function pageLoad() {
    var form = document.getElementById("myForm");
    form.onsubmit = validateForm;
}

function validateForm() {
    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
    const password = document.forms["myForm"]["password"].value;
    const re_password = document.forms["myForm"]["repassword"].value;

    if (password == re_password) {   
    }
    else {
        alert("password is not correct");
        return false;
    }
}