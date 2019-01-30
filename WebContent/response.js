function validate()
{
var msg="Your response was successfully submitted";
var date=document.getElementById("date");
var proctor=document.getElementById("proctor");
var co=document.getElementById("coordinator");
var response=document.getElementById("response");
var errors=[];
if(date.value=='')
	{
    errors[errors.length]="Select a date";
	}
if(proctor.value=='')
{
errors[errors.length]="Enter proctor name";
}
if(co.value=='')
{
errors[errors.length]="Enter co-ordinator name";
}
if(response.value=='')
{
errors[errors.length]="Write reason";
}
if(errors.length>0)
{
reportErrors(errors);
return false;
}
else
	{
	alert(msg);
	return true;
	}
}
function reportErrors(errors){
    var msg = "Please Enter Valide Data...\n";
    for (var i = 0; i<errors.length; i++) {
    var numError = i + 1;
     msg += "\n" + numError + ". " + errors[i];
   }
    alert(msg);
   }