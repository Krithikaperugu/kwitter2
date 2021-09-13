function addUser() {
    check_input = document.getElementById("user_name").value;
     if(check_input=="")
     { document.getElementById("label_user_name").innerHTML = "Enter the User Name";
     }
      else{ user_name = document.getElementById("user_name").value;
       localStorage.setItem("user_name", user_name); 
       window.location = "kwitter_room.html"; }
}