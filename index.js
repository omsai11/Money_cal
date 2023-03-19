
  // Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import {getAuth, createUserWithEmailAndPassword,} from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js"

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
  const auth=getAuth();
  const databse=getDatabase(app);

  var name=document.getElementById("name")
  var email=document.getElementById("email")
  var password=document.getElementById("password")
  var cpassword=document.getElementById("confirm_password")
  var user=auth.currentUser;
  // Sending data
  function writeUserData(userId,name,email,password){
    const db=getDatabase();
    set(ref(db,'users/'+userId),{
      name:name,
      email:email,
      password:password
    });
  }
  //Making function for submit and sending
  window.signup=function(e){
    e.preventDefault();
    var obj={
        name:name.value,
        email:email.value,
        password:password.value,
        cpassword:cpassword.value
    }
    createUserWithEmailAndPassword(auth,obj.email,obj.password).then(function(success){
        alert("registered successfully")
        const user=success.user
        writeUserData(user.uid,obj.name,obj.email,obj.password);
        window.location.replace('login.html')
    }).catch(function(err){
        alert("error"+err)
    })
   
    
    console.log(obj)

  }

