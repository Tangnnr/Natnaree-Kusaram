window.onload = loginLoad;
function loginLoad() {
	var my_Login = document.getElementById("myLogin");
	my_Login.onsubmit = checkLogin;
}

function checkLogin() {
	//ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย
	const urlToGet = new URLSearchParams(window.location.search);
	const username = urlToGet.get('username');
	const password = urlToGet.get('password');
	var username_login = document.forms['myLogin']['username'].value;
	var password_login = document.forms['myLogin']['password'].value;

	if ((username == username_login) && (password == password_login)) {
		alert("YEAH!")
	}
	else {
		alert("Your username or password is not correct");
		return false;
	}
}

