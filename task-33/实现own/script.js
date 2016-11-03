// JavaScript Document
//绘制背景表格
(function createbackground(){
	var tbody=document.getElementsByTagName
	("tbody")[0];
	var back_tr=[],back_td=[];
	for(var i=0;i<11;i++){
		back_tr[i]=tbody.insertRow(i);
		back_td=[];
		for(var j=0;j<11;j++){
			back_td[j]=tbody.rows[i].insertCell(j);
			if(i==0&&j>0){
				back_td[j].innerHTML=j;//标注列数
			}
			if(i>0&&j==0){
				back_tr[i].cells[0].innerHTML=i;//标注行数
			}
			
		}
	}
})();

	var data={
	x:5,
	y:5,
	dir:0};
//操作方块
var controls={

	go:function(){
		switch(data.dir){
			case 0:
				if(data.y>1){
					data.y--;
					break;
				}else{
					alert("已到达最顶端")}
			case 1:
				if(data.x<10){
					data.x++;
					break;
				}else{
					alert("已到达最右端")}
			case 2:
				if(data.y<10){
					data.y++;
					break;
				}else{
					alert("已到达最底端")}
			case 3:
				if(data.
				x>1){
					data.x--;
					break;
				}else{
					alert("已到达最左端")}	
			}
		},
		
	left:function(){
		if(data.dir==0){
			data.dir=4;}
			data.dir--;
		},
	right:function(){
			data.dir++;
			data.dir=data.dir%4;
		},
	back:function(){
			data.dir=data.dir+2;
			data.dir=data.dir%4;
		},
			
}
//渲染样式
function show(){
	square.style.top=data.y * 50+"px";
	square.style.left=data.x*50+"px";
	square.style.transform=square.style.webkitTransform = square.style.msTransform ="rotate("+data.dir*90+"deg)";
	}  
//事件监听
function init(){
	 var square = document.getElementById("square");
	var btnGo=document.getElementById("go");
	var btnLeft=document.getElementById("left");
	var btnRight=document.getElementById("right");
	var btnBack=document.getElementById("back");
	btnGo.onclick=function(){
		controls.go();
		show();};
	btnLeft.onclick=function(){
		controls.left();
		show();};
	btnRight.onclick=function(){
		controls.right();
		show();};
	btnBack.onclick=function(){
		controls.back();
		show();};
	}
init();