 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
 import {getAuth, signInWithEmailAndPassword,} from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js"
 
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

   var email=document.getElementById("email")
   var password=document.getElementById("password")
window.login=function(e){
    e.preventDefault();
    var obj={
        email:email.value,
        password:password.value
    };
    signInWithEmailAndPassword(auth,obj.email,obj.password).then(function(success)
    {
        const user=success.user;
        console.log(user.uid)
        localStorage.setItem("uid",user.uid)
        window.location.replace('money.html')
    }).catch(function(err){
        alert("login error "+err)
    })
    console.log(obj)
   
}