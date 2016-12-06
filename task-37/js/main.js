var logIn = document.getElementById("login");
var mask = document.getElementById("mask");
var divFloat = document.getElementById("divFloat");
var btnSure = document.getElementById("btnSure");
var btnCancel = document.getElementById("btnCancel");

 //点击登录，出现浮出层
logIn.addEventListener("click", show, false);
//点击确定、取消、遮罩层均实现关闭浮出层
btnSure.addEventListener("click", hide, false);
btnCancel.addEventListener("click", hide, false);
mask.addEventListener("click", hide, false);
//按住浮出层实现拖拽
divFloat.addEventListener("mousedown",drag, false);

function show(){
	mask.style.display = "block";
	divFloat.style.display = "block";
	
}
function hide(){
	mask.style.display = "none";
	divFloat.style.display = "none";
}
function drag(event){
	event = event || window.event;
	//鼠标点击处距浮出层边界的距离
//	var disX = event.clientX - this.offsetLeft;
//	var disY = event.clientY - this.offsetTop;
	var disX = event.offsetX;
	var disY = event.offsetY;
	document.onmousemove = function(event){
		event = event || window.event;
		divFloat.style.left = event.clientX - disX + 150 + "px";
		divFloat.style.top = event.clientY - disY + 75 + "px";
	};
	document.onmouseup = function(){
		document.onmousemove = null;
		document.onmousedown = null;
		}
	}