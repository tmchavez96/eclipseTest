function mainValidate(){
	var out = false
	if(!stringInputNotNull("fname")){
		document.getElementById("feedback").innerHTML = "missing first name";
		return false;
	}else
	if(!stringInputNotNull("mname")){
		document.getElementById("feedback").innerHTML = "missing middle name";
		return false;
	}else
	if(!stringInputNotNull("lname")){
		document.getElementById("feedback").innerHTML = "missing last name";
		return false;
	}else
	
	if(!validateRadio()){
		document.getElementById("feedback").innerHTML = "must select gender";
		return  false;
	}else
	
	if(!validBD()){
		document.getElementById("feedback").innerHTML = "invald birth date";
		return  false
	}else

	if(!stringInputNotNull("street1")){
		document.getElementById("feedback").innerHTML = "missing street ";
		return false
	}else
	
	if(!stringInputNotNull("city")){
		document.getElementById("feedback").innerHTML = "missing city ";
		return false
	}else

	if(!stringInputNotNull("state")){
		document.getElementById("feedback").innerHTML = "missing state";
		return false
	}else
	if(!checkEmail()){
		document.getElementById("feedback").innerHTML = "invalid email";
		return false
	}else
	if(!checkPhoneNumber()){
		document.getElementById("feedback").innerHTML = "invalid phone number";
		return false
	}else{
		out = true
	}
	return out
}

function stringInputNotNull(id){
	var input = document.getElementById(id).value;
	if(input == ""){
		return false
	}else{
		return true
	}
}

function validateRadio(){
	var input = document.getElementsByName("gen").value;
	for(var i = 0; i < input.length; i++){
		if(input[x].checked = true){
			return true
		}
	}
	return false
}

function checkEmail(){
	var input = document.getElementById("email").value;
	 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input)){
		 return true
	 }else{
		 return false
	 }
}

function checkPhoneNumber(){
	var input = document.getElementById("phoneNumber").value;
	if(input.length != 10){
		return false;
	}else if( /^\d+$/.test(input)){
		return True;
	}else{
		return false;
	}
}


function validBD(){
	var date = document.getElementById("bd").value;
	if(date.length != 10){
		document.getElementById("feedback").innerHTML = "invalid date";
		return false;
	}else{
		var month = date.substring(0,2);
		var day = date.substring(3,5);
		var year =  date.substring(6,10);
		console.log(month)
		console.log(day)
		console.log(year)
		year = parseInt(year);
		var curYear = 2019;
		var res = curYear - year;
		document.getElementById("age").innerHTML = res;
		console.log("should be there")
		month = parseInt(month);
		day = parseInt(day);
		if(day <= 31 && month <= 12 && year <= curYear){
			return true;
		}else{
			return  false;
		}
	}
	
}