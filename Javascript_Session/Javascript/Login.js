var SubmitObject= new SubmitObject(); 
//SubmitObject.Submit();

function SubmitObject(){
		this.Submit=Submit;
	/*var x=document.getElementById("First").value;
	var y=document.getElementById("pass").value;
	document.write(x);
	document.write(y);
	if((x=="")||(y=="")){
	alert("please fill the details..")
	return false;
	}
	else{
		alert("Form submitted Successfully...")
	
	}*/
	function Submit(){
	var Firstname=document.getElementById("First").value;
	var Lastname=document.getElementById("pass").value;
	 //var Lastname=Firstname;
	//document.write(Lastname); 
	
	
	document.write(Firstname);
	document.write(Lastname);
		if((Firstname=="")||(Lastname=="")){
			alert("please fill the details..")
				return false;
		}
		else{
			alert("Form submitted Successfully...")
	
		}
		var Lastname =Firstname;
		document.write(Lastname.innerHTML);
	}

}

