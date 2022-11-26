
//ADD YOUR FIREBASE LINKS HERE
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
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
        console.log("Room Name - " + Room_names);
        row = "<div class =' id='"+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</dv><hr>";
        document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
User_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + User_name+"!";
function addRoom()
{
      room_names = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_names).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name" , room_names);

      window.location = "kwitter_page.html";
}
function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name" , name);
window.location = "kwitter_page.html";
}
function logout()
{
      window.location ="index.html";
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");

}
