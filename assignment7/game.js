var timer = null;
var gameplay = false;

window.onload = pageLoad;

function pageLoad() {
	document.getElementById("start").onclick = startGame;
}

function startGame() {
	if (gameplay == false) {
		gameplay = true;
		alert("Ready");
		addBox();//ฟังก์ชั่นสร้างกล่อง
		timeStart();//ฟังก์ชั่นtimeStart}
	}
}

function timeStart() {
	var TIMER_TICK = 1000;
	var min = 0.5; // 0.5 minute
	var second = min * 20;//10 seconds เซ็ตเวลา
	var x = document.getElementById('timerClock');
	//setting timer using setInterval function
	timer = setInterval(timeCount, TIMER_TICK); //timer(จับเวลา)=ทำ'timeCount'ทุกครั้งที่ครบกำหนดtime_tick เช่น ทำทุกๆ1วิ

	function timeCount() {
		// จัดการเกี่ยวกับเวลา เช่น ถ้ายังมีกล่องเหลืออยู่ เวลาจะลดลงเรื่อยๆ 
		// ถ้าไม่มีกล่องเหลือแล้ว และเวลายังเหลืออยู่จะขึ้นว่า You win!
		// ถ้าเวลาหมด แต่ยังมีกล่องเหลืออยู่ จะบอกว่า Game over และทำการ clear screen
		if (second >= 0) //ถ้าเวลายังไม่หมด
		{
			x.innerHTML = "Timer: " + second;
			console.log(second);
			second--;
		}
		else {
			alert("Time out!")
			x.innerHTML = "Timer: 0";
			timer = null; //reset timer
			clearInterval(timer);//เคลียการจับเวลา
			clearScreen();
		}
	}
}

function addBox() {
	// สร้างกล่องตาม input ที่เราใส่ 
	var numbox = document.getElementById("numbox").value;
    var gameLayer = document.getElementById("game-layer");
    var colorDrop = document.getElementById("color").value;
    for (var i = 0; i < numbox;i++){
        var tempbox = document.createElement("div");
        tempbox.className = "square";
        tempbox.id = "box"+i;
        tempbox.style.left = Math.random() * (500 - 25) + "px";
        tempbox.style.top = Math.random() * (500 - 25) + "px";
        tempbox.style.backgroundColor = colorDrop;
        gameLayer.appendChild(tempbox) ;
        bindBox(tempbox);
	}
}

function bindBox(tempbox) {
	//เมื่อกดแล้ว กล่องจะหายไป
	tempbox.onclick = function () {
		console.log("click " + tempbox.id)
		document.getElementById(tempbox.id).remove();
		checkGame();
	}
}
function checkGame() {
	var allbox = document.getElementById("game-layer");
	if (allbox.childElementCount == 0) {
		alert("Win!");
		clearInterval(timer);
		clearScreen();
	}
}
function clearScreen() {
	// ทำการลบ node ของกล่องทั้งหมด ออกจาก หน้าจอ
	gameplay=false;
	var allbox = document.getElementById("game-layer");
	console.log(allbox.childElementCount);
	while (allbox.firstChild) {
		allbox.removeChild(allbox.lastChild);
	}
}




