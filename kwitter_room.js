

  var firebaseConfig = {
    apiKey: "AIzaSyCOhs1zF1OnCmOF9Z2FmrDwFhBcE0vF_9o",
    authDomain: "kwitter-52f80.firebaseapp.com",
    databaseURL: "https://kwitter-52f80-default-rtdb.firebaseio.com",
    projectId: "kwitter-52f80",
    storageBucket: "kwitter-52f80.appspot.com",
    messagingSenderId: "995681351095",
    appId: "1:995681351095:web:c730f8243fbbff963de432"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "welcome " + user_name +" !";

function addRoom (){
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    BTS : "hey"
  });
  localStorage.setItem("room_name",room_name);
  window.location = "kwitter_page.html"
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
    row = "<div class = 'room_name' id = " + Room_names + "onclick = 'redirectToRoomName(this.id)'>#"+Room_names + "</div> <hr>"
    document.getElementById("output").innerHTML+= row
      //End code
      });});}
getData();

function redirectToRoomName(name) 
{ console.log(name); 
  localStorage.setItem("room_name", name);
   window.location = "kwitter_page.html";
   }
    


function logout (){
  localStorage.removeItem("user_name")
  localStorage.removeItem("room_name")
  window.location.replace("index.html")
}