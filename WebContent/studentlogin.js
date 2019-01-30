mail=new RegExp("1602-1[0-9]-73[0-9]-[0-9]{3}");
var pass="xyz";
function validate(form)
{
	var email=document.getElementById("email");
	var password=document.getElementById("password");
	var errors=[];
	if (password.value=='') {
	      errors[errors.length] = "You must enter the password ";
	     }
	if (email.value=='') {
	      errors[errors.length] = "You must enter the username ";
	     }
	if(errors.length>0)
	{
	reportErrors(errors);
	return false;
	}
	if(!mail.test(email.value))
		{
		errors[errors.length] = "You must enter a valid username";
		}
	if(password.value!=pass)
	{
	errors[errors.length] = "You must enter a valid password";
	}
	
	if(errors.length>0)
		{
		reportErrors(errors);
		return false;
		}
		return true;
		
}
function reportErrors(errors){
    var msg = "Please Enter Valide Data...\n";
    for (var i = 0; i<errors.length; i++) {
    var numError = i + 1;
     msg += "\n" + numError + ". " + errors[i];
   }
    alert(msg);
   }

