function naming() {
    function day(YY,MM,DD){
       return(((5*YY/4) ) + ( (26*(MM+1)/10) + DD) % 7) + 1
        
    }
    var YY=parseInt(prompt("Enter the year"));
    var MM=parseInt(prompt("Enter the month"));
    var DD=parseInt(prompt("Enter the date"));
    /* alert(result); */
    var maleAkan = ["Kwasi", "Kwandwo", "kwabena", "kwaku", "Yaw", "Kofi", "Kwame"];
    var femaleAkan =["Akosua" , "Adwoa" , "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    var days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "sartuday"];
    if (gender == "male") {
        alert("Your akan name is " +maleAkan[result] + " you were born on a " + days[result]);

    } else if (gender== "female") {
        alert ("Your akan name is " +femaleAkan[result] + " you were born on a " + days[result]);
    } else {
        alert("null")
    }
}