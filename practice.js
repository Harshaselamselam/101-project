const firebaseConfig = {
    apiKey: "AIzaSyAvkhKG-Np7yvWv-3qc18kxLPd01UNwPAU",
    authDomain: "class-a01d9.firebaseapp.com",
    databaseURL: "https://class-a01d9-default-rtdb.firebaseio.com",
    projectId: "class-a01d9",
    storageBucket: "class-a01d9.appspot.com",
    messagingSenderId: "918381957629",
    appId: "1:918381957629:web:23c4c5523dec1a18b6c994",
    measurementId: "G-LNEKX9SM15"
  };
//ADD YOUR FIREBASE LINKS

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
         purpose : "adding user"
    });
}