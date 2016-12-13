(function(){

  let myName = document.getElementById("my-name"); 
  let getName = document.getElementById("get-name");
  let userName = document.getElementById("user-name");
  let surName = document.getElementById("surname"); 
  var clStore = document.getElementById("cl-store");
  let nameStored = localStorage.name;
  console.log(`Name on page load: ${nameStored}`);
  
  if(nameStored) {
    // If there's a name in localStorage, use it:
    myName.innerHTML = `again ${nameStored}`;
    console.log(`Name stored is: ${nameStored}`);
  }
  else {
    // There's no name in localStorage:
    myName.innerHTML = "stranger";
    console.log(`No name stored`);
  }

  function PerformGreeting() {
    if(userName.value === "") {
      alert("Please enter a first name");
      userName.focus();
    }
    if(surName.value === "") {
      alert("Please enter a surname");
      surName.focus();
    }
    // Get the name the user entered:
    nameStored = userName.value + " " + surName.value;
    // Show the name in "my-name":
    myName.innerHTML = nameStored;
    // Put the name into localStorage:
    localStorage.name = nameStored;
    console.log(`New name stored: ${nameStored}`);
    return false;
  }

  // Listens for a form submit action: 
  if (typeof event === "undefined") {
    getName.onsubmit = PerformGreeting; // for Firefox
  }
  else {
    getName.addEventListener("submit", PerformGreeting);
    event.preventDefault();
  }
    
    
    
    
    
    // Clear storage
    function clearStorage() {
        localStorage.clear();
        myName.innerHTML = "stranger";
        return false;
    }
    
    
  clStore.addEventListener("submit", clearStorage);

}());
