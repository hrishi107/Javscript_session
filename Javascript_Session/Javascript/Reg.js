var SubmitObj= new SubmitObj();

function SubmitObj()
{
	this.Submit1=Submit1;
	this.myFunction=myFunction;
	//this.bigtext=bigtext;
	this.funDown=funDown;
	//this.Form=Form;
	//this.Lod=Lod;
	function Submit1()
	{
		var FName=document.getElementById("FirstName").value;
		var LName=document.getElementById("LastName").value;
		var Num=document.getElementById("MbNum").value;
		var email=document.getElementById("emailID").value;
		var city=document.getElementById("Select").value;
		var UName=document.getElementById("Username").value;
		var Pass=document.getElementById("Password").value;
		
		//for display purpose
		document.getElementById("display").innerHTML=FName;
		document.getElementById("display1").innerHTML=LName;
		document.getElementById("display2").innerHTML=Num;
		document.getElementById("display3").innerHTML=email;
		document.getElementById("demo").innerHTML=city;
		document.getElementById("display4").innerHTML=UName;
		document.getElementById("display5").innerHTML=Pass;

		//FirstName and lastname validation
		var regex=/^[a-z]{1,10}$/;
		if(!regex.test(FName) && regex.test(LName))
		{
				alert("please enter valid name!");
				document.getElementById("FirstName").style.border="3px solid red";
				return false;

		}
		if(regex.test(FName) && !regex.test(LName))
		{
			alert("please enter valid Lastname!");
			document.getElementById("LastName").style.border="3px solid red";
			return false;
		}
		if(!regex.test(FName) && !regex.test(LName))
		{
			document.getElementById("FirstName").style.border="3px solid red";
			document.getElementById("LastName").style.border="3px solid red";
			alert("please enter valid details!");
			return false;
		}
		

		//Mobile number validation
		var mbRegEx= /^[789]\d{9}$/;
		if(!mbRegEx.test(Num))
		{
			alert("Please Enter valid mb number..");
			document.getElementById("MbNum").style.border="3px solid red";
			return false;
		
		}
		//EmailId Validation
		var addRegEx=/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
		if(!addRegEx.test(email))
		{
			alert("Email not valid ex:hrishi@gmail.com");
			//document.getElementById("emailId").focus();
			document.getElementById("emailID").style.border="3px solid red";
			return false;
		}
		//UserId avlidation
		var userRegEx=/^[A-Z]+[a-z0-9_]{3,20}$/;
		if(!userRegEx.test(UName))
		{
			alert("Invalid UserID format-ex: Abc324 (3-20 char)");
			document.getElementById("Username").style.border="3px solid red";
			return false;
		
		}
		//Password validation
		var passRegEx=/^(?=.*[A-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@])(?!.*[iIoO])\S{6,12}$/;

		if(!passRegEx.test(Pass))
		{
			alert("Invalid password Format-ex: AaB1@s (6-12 char)");
			document.getElementById("Password").style.border="3px solid red";
			return false;
		
		}

	else{
			alert("form has been successfully submitted..");
			document.getElementById("FirstName").value="";
			document.getElementById("FirstName").style.border="none";

			document.getElementById("LastName").value="";
			document.getElementById("LastName").style.border="none";

			document.getElementById("emailID").value="";
			document.getElementById("emailID").style.border="none";


			document.getElementById("MbNum").value="";
			document.getElementById("MbNum").style.border="none";

			document.getElementById("Username").value="";
			document.getElementById("Username").style.border="none";

			document.getElementById("Password").value="";
			document.getElementById("Password").style.border="none";
			//FName.value="";
			return false;
		}
	
	}//main onclick function ends
	function myFunction()
	{
		var city = document.getElementById("Select").value;
		document.getElementById("demo").innerHTML = city;
	
	
	}
	/*function bigtext()
	{

	}*/

	function funDown()
	{
		alert("you have pressed down key...!!!")
	
	}
	/*function Lod()
	{
		alert("Page has been Loaded");
	
	}*/
}