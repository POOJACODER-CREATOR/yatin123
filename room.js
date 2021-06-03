var firebaseConfig = {
    apiKey: "AIzaSyDCC_cmE_e9g94yUXxJBK8jOCYS7hk-k1o",
    authDomain: "chicha-49065.firebaseapp.com",
    databaseURL: "https://chicha-49065.firebaseio.com",
    projectId: "chicha-49065",
    storageBucket: "chicha-49065.appspot.com",
    messagingSenderId: "661597536784",
    appId: "1:661597536784:web:bea486fed881a83435c095",
    measurementId: "G-7QTEZBP9SC"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 

  Username = localStorage.getItem('Username');

  
  function rooomcreat() {
    room_add= document.getElementById("roomname").value;
    firebase.database().ref("/").child(room_add).update({
        purpose:"addingroom_name"
    });
    localStorage.setItem("room_name" , room_add);
    window.location="Lets_chat_page.html";
}

  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
         Room_names = childKey;
        //Start code
            console.log(Room_names);
            row = "<div class='Room_name_created' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
            document.getElementById("output").innerHTML += row;
        //End cod
        });});}
  getData();
  
  function redirectToRoomName(name){
        localStorage.setItem("room_name", name);
        window.location="Lets_chat_page.html";
  }
  
  function Button_Logout() {
        localStorage.removeItem("Username");
        window.location="Lets_chat_coding.html";
        localStorage.removeItem("room_name");
  }
  
 