mail=new RegExp("[a-z]{3,8}@vasavi.staff.com");
var pass="xyz";
function validate()
{
	var email=document.getElementById("email").value;
	var password=document.getElementById("password");
	var errors=[];
	if (password.value=='') {
	      errors[errors.length] = "You must enter the password ";
	     }
	if (email=='') {
	      errors[errors.length] = "You must enter the email ";
	     }
	if(errors.length>0)
	{
	reportErrors(errors);
	return false;
	}
	if(!mail.test(email.value))
		{
		errors[errors.length] = "You must enter a valid email address.";
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

