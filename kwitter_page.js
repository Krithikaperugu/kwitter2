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

    user_name = localStorage.getItem("user_name")
    room_name = localStorage.getItem("room_name")
 
    
    function send (){
          msg = document.getElementById("msg").value
          firebase.database().ref(room_name).push({
                name : user_name,
                message : msg,
                like : 0
          }) 

          document.getElementById("msg").value = ""

    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start 
    name = message_data['name'];
    message = message_data['message'];
    like = message_data['like'];
    name_with_tag  = "<h4>" + name + "<img class = 'user_tick' src = 'tick.png'></h4>";
    message_with_tag = "<h4 class = 'message_h4'>" + message + "</h4>";
    like_button = "<button class = 'btn btn-warning' id =  " + firebase_message_id + "value = " + like + "onclick = 'updateLike(this.id)'>";
    span_with_tag = "<span class = 'glyphicon glyphicon-thumps-up'>Like : " + like + "</span></button>";
    row  = name_with_tag + message_with_tag + like_button + span_with_tag ;
    document.getElementById("output").innerHTML += row;

//End code
      } });  }); }
getData();

function updateLike (message_id){
      console.log("clicked on like  button")
button_id = message_id;
likes = document.getElementById(button_id).value;
updated_likes = Number(likes ) + 1 ; 
console.log(updated_likes)
firebase.database().ref(room_name).child(message_id).update({
      like: updated_likes
})
}

function logout (){
      localStorage.removeItem("user_name")
      localStorage.removeItem("room_name")
      window.location.replace("index.html")
}
