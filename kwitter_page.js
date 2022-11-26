//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyDHBZ0CscVyzBP8ORYCl7NrILmd3nM4-Kc",
      authDomain: "kwitter-92325.firebaseapp.com",
      databaseURL: "https://kwitter-92325-default-rtdb.firebaseio.com",
      projectId: "kwitter-92325",
      storageBucket: "kwitter-92325.appspot.com",
      messagingSenderId: "443247135901",
      appId: "1:443247135901:web:b72cf4db8cd72ed52a9874"
    };
    
    // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 User_name = localStorage.getItem("user_name");
 room_name = localStorage.getItem("room_name"); 
 console.log(room_name);
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function Logout()
{
      window.location ="index.html";
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
  
}
function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:User_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
}