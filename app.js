function validateForm() {
  var fname = document.forms.myForm.fname.value;
  var lname = document.forms.myForm.lname.value;

  if (fname == "" || lname == "") {
    alert("Name must be filled out");
    return false;
  } else {
    alert("Thank you! We will contact you as soon as possible :)");
    return;
  }
}
