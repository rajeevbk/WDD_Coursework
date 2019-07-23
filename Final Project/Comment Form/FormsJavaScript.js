function myFormValidation(){
          var oneStar = document.getElementById('oneStar').checked;
		  var twoStar = document.getElementById('twoStar').checked;
		  var threeStar = document.getElementById('threeStar').checked;
          var fourStar = document.getElementById('fourStar').checked;
		  var fiveStar = document.getElementById('fiveStar').checked;
		  
		  if((oneStar=="")&&(twoStar=="")&&(threeStar=="")&&(fourStar=="")&&(fiveStar=="")){
		   alert("Please chose from an option to rate our web site");
		   return false<!--so user cant proceed-->
		  }
            
          var firstname = document.getElementById('firstname').value; 
          var lastname = document.getElementById('lastname').value;
          if (firstname == "" || lastname == "") {
            alert("It is mandatory that u fill in both names");
            return false;
          }
          
		  else{
		    alert("Thank you " + firstname + " " + lastname + " You have filled in all mandatory fields successfully and rated our website!!>> You may now proceed" );
		     <!--return true;Letting the user continue-->
		  }
}  	
	    