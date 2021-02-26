var CC, YY, MM, DD, d, day;
var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", " Yaa", "Afua", "Ama"];
var maleChecked = document.getElementById("male").checked;
var gender = document.getElementById("gender");

function date() {
  year = document.getElementById("year").value;
  CC = parseInt(year.substring(0, 2));
  YY = parseInt(year.substring(2, 4));
  MM = parseInt(document.getElementById("month").value);
  DD = parseInt(document.getElementById("date").value);
  d = (((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7;
  console.log(d);
  return (Math.floor(d));
}

function dataValidation() {
  var gender = document.getElementsByName("gender");
  if (document.myForm.year.value == "") {
    alert("Kindly input a Valid YEAR!! eg 1963");
    document.myForm.year.focus();
    return false;
  }
  else if (document.myForm.month.value == ""){
    alert("Kindly input a Valid Month! ");
    document.myForm.month.focus();
    return false;
  }
  else if (document.myForm.date.value == "") {
    alert("Please provide a valid date that you were born in!");
    document.myForm.day.focus();
    return false;
  }
  else if (gender[0].checked == false && gender[1].checked == false) {
    alert("You must select male or female");
    return false;
  }
  else {
    return true;
  }

}

function selectGender() {
  var gender = document.getElementsByName("gender");
  var maleChecked = document.getElementById("male").checked;
  if (maleChecked==""){
    gender = "female"
  }
  else{
    gender = "male";
  }

  switch (gender) {
    case "male":
      if (day == 0) {
        alert( "Your name is " + maleNames[0]);
      }
      else if (day == 1) {
        alert("Your name is " + maleNames[1]);
      }
      else if (day == 2) {
        alert("Your name is " + maleNames[2]);
      }
      else if (day == 3) {
        alert("Your name is " + maleNames[3]);
      }
      else if (day == 4) {
        alert("Your name is " + maleNames[4]);
      }
      else if (day == 5) {
        alert("Your name is " + maleNames[5]);
      }
      else if (day == 6) {
        alert("Your name is " + maleNames[6]);
      }
      break;
    case "female":
      if (day == 0) {
        alert("Your name is  " + femaleNames[0]);
      }
      else if (day == 1) {
        alert("Your name is " + femaleNames[1]);
      }
      else if (day == 2) {
        alert("Your name is " + femaleNames[2]);
      }
      else if (day == 3) {
        alert("Your name is " + femaleNames[3]);
      }
      else if (day == 4) {
        alert("Your name is " + femaleNames[4]);
      }
      else if (day == 5) {
        alert("Your name is " + femaleNames[5]);
      }
      else if (day == 6) {
        alert("Your name is " + femaleNames[6]);
      }
      break
    default:
  }
}
function getName() {
  day = date();
  selectGender();
}
