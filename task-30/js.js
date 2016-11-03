// JavaScript Document
var inputs=document.getElementsByTagName("input");
var btn=document.getElementsByTagName("button");
var alertText={name:{hint:"必填，长度为4-16个字符",right:"名称可用",wrong:"名称不可用，请输入4-16个字符"},
			   psw1:{hint:"必填，6到16位数字和字母",right:"密码可用",wrong:"密码不可用，请输入4-16个数字或字母"},
			   psw2:{hint:"必填，必须与密码相同",right:"密码正确",wrong:"密码不正确"},
				email:{hint:"必填，正确的邮箱格式",right:"格式正确",wrong:"邮箱不正确，请输入正确格式邮箱"},
				phone:{hint:"请输入手机号码或固定电话",right:"格式正确",wrong:"号码格式不正确，请输入正确电话号码"},
				
}
var todo = {

	rules: function(){
		getNextElement(this).style.opacity=1;
		},
	validate:function(){
		var flag=false;
		var typeName=this.name;
		var value=this.value;
		switch(typeName){
			case "name":
				flag=value.length>4&&value.length<16;
				break;
			case "psw1":
				flag=/^[a-zA-Z0-9]{4,16}$/.test(value);
				break;
			case "psw2":
				flag=value==document.getElementById("psw1").value&&value.match(/^[a-zA-Z0-9]{4,16}$/);
				break;
			case  "email":
				flag=/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(value);
				break;
			/*case "phone":
				flag=/^(\(\d{3,4}-)|\d{3.4}-)?\d{7,8}$/.test(value);
				break;*/
			}
			if(flag){
				getNextElement(this).innerHTML=alertText[typeName].right;
				this.style.border="2px green solid";
				getNextElement(this).style.opacity=1;
			}else{
				getNextElement(this).innerHTML=alertText[typeName].wrong;
				this.style.border="2px red solid";
				getNextElement(this).style.opacity=1;
				}
		
		}
	}


function init(){	
	for(i=0;i<inputs.length;i++){
		inputs[i].onfocus=todo.rules;
		inputs[i].onblur=todo.validate;
	}
	btn[0].onclick=function(){
		for(i=0;i<inputs.length;i++){
			todo.validate.call(inputs[i]);}
		}
}
//获得下一个元素节点
function getNextElement(node){    
    if(node.nextSibling.nodeType == 1){    //判断下一个节点类型为1则是“元素”节点   
        return node.nextSibling;    
    }    
    if(node.nextSibling.nodeType == 3){      //判断下一个节点类型为3则是“文本”节点  ，回调自身函数  
        return getNextElement(node.nextSibling);    
    }    
    return null;
}
init();