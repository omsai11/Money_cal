
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
  
  import{getDatabase,ref,set} from "https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js" 
  // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
  
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
      apiKey: "AIzaSyDcZAGabmDDOGVfnBCNflbsh1tD0I5bEhc",
      authDomain: "money-c1b4a.firebaseapp.com",
      databaseURL: "https://money-c1b4a-default-rtdb.firebaseio.com",
      projectId: "money-c1b4a",
      storageBucket: "money-c1b4a.appspot.com",
      messagingSenderId: "527976016602",
      appId: "1:527976016602:web:d292d85b2fd4af1b2793e3",
      measurementId: "G-SXFEMHXP2Q"
    };
  
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const databse=getDatabase();

// let user_uid=localStorage.getItem("uid")
let user_uid='btlacVZYblWVSe2EzrEy17ZdR9v1'
console.log(user_uid);

var _new=document.getElementById("new")
function writeUserData(userId,_new){
    const db=getDatabase();
    set(ref(db,'users/'+userId),{
      _new:_new
    });
  }
  window.signup=function(e){
    e.preventDefault();
    var obj={
      _new:_new
    }

    writeUserData(user_uid,obj._new)
    
    console.log(obj)

  }