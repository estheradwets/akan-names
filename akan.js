
  /* gamePageBtn.addEventListener("click", showGamePage);
  goBackBtn.addEventListener("click", showDescriptionPage);
  submitBtn.addEventListener("submit", submitDetailsFromUser);

  function showGamePage() {
    descriptionPage.classList.add("hidden");
    gamePage.classList.remove("show");
  }

  function showDescriptionPage() {
    descriptionPage.classList.add("hidden");
    gamePage.classList.remove("show");
  }

  function submitDetailsFromUser(e) {
      e.preventDefault();
      console.log(month);
      console.log(day);
      console.log(year);
      console.log(jina);
  } */
//Usual Days of the week as initial functions

var submission = function() {
    var daysOfTheWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];

    //Male Akan names
     var maleNames = [
      "Kwasi",
      "Kwadwo",
      "Kwabena",
      "Kwaku",
      "Yaw",
      "Kofi",
      "Kwame"
    ];
    //Female Akan Names
    var femaleNames = [
      "Akosua",
      " Adwoa",
      "Abenaa",
      "Akua",
      "Yaa",
      "Afua",
      "Ama"
    ];

    var month = parseInt(document.getElementById("month").value);
    var year = parseInt(document.getElementById("year").value);
    var day = parseInt(document.getElementById("day").value);
    var name =(document.getElementById("name").value);
    var date0fbirth = new Date(year + "/" + month + "/" + day);
    var results = date0fbirth.getDay();
    var output = document.getElementById("output");
    var male = document.getElementById("male")
    var female = document.getElementById("female")

    //Possible mistake scenarios

    if (month =="" && year =="" && day =="" && name=="") {
        alert("Please enter the accurate details");
        return false;
    }
    

   if (year < 0) {
      output.style.background ="white"
      output.style.color= "red"
      output.innerHTML = "Oops! " + name + " invalid year of birth! "
  }
    
  else if ((month < 1) || (month > 31)) {
      output.style.background ="white"
      output.style.color= "red"
      output.innerHTML = "Oops! " + name + " please enter your valid birth month! "
  }
    
   else if (day < 0 || day > 31) {
      output.style.background ="white"
      output.style.color= "black"
      output.innerHTML = "Oops! " + name + " please enter a valid day! "
  }
  

    if(male.checked && year > 0 && month > 0 && month < 12 && day > 0 && day < 32) {
      output.style.background ="blue"
        output.innerHTML = "Congrats! " + name + " you were born on a " + daysOfTheWeek[results] + ", your Akan name is " + maleNames[results];
    }
     else if(female.checked && year > 0 && month > 0 && month < 12 && day > 0 && day < 32) {
      output.style.background ="hotpink"
      output.innerHTML = "Congrats! " + name + " you were born on a " + daysOfTheWeek[results] + ", your Akan name is " + femaleNames[results];
  }
  
  };

  /* 
function submitDetailsFromUser(e){
    e.preventDefault();
    if(year === "" || date === "" || month === "" || jina === ""){
        alert("Please enter correct credentials");
    }


    if(year < 1900 || month < 0 || month > 11 || date < 0 || date > 31){
        alert("Please enter valid date details");
    }

    console.log(year);
    console.log(date);
    console.log(month);
    console.log(jina);

} */