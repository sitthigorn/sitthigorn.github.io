//current energy consumption update picture
function update_data(id, number) {
    $("#"+String(id)).text(String(number));
}

function writeUserData(userId, name, email, imageUrl) {
  firebase.database().ref('users/' + userId).set({
    username: name,
    email: email,
    profile_picture : imageUrl
  });
}

$( document ).ready(function() {
    console.log("starting document!!!!");

    $(function ($) {
         $("#firebasebutton").click(function (evt) {
           console.log("firebasebutton was clicked")
         })
       });

    // Initialize Firebase
    console.log("Initialize Firebase");


         }
     }
    // Initialize Firebase
    var config = {
    apiKey: "AIzaSyDUhkAHhNES5aYXWHAaaFAMJZQxdkMECRI",
    authDomain: "pea-ne1-test-project.firebaseapp.com",
    databaseURL: "https://pea-ne1-test-project.firebaseio.com",
    projectId: "pea-ne1-test-project",
    storageBucket: "pea-ne1-test-project.appspot.com",
    messagingSenderId: "1065057190584"
    };
    firebase.initializeApp(config);

    var ref = firebase.database().ref();

    var member_profitRef = firebase.database().ref("member");

    member_profitRef.on("child_changed", function(data) {
        console.log(data.key);
        console.log(data.val());
        if(data.key == "1PV221445K1200100") {
            total_load_activePower  = data.val().load_activePower;
        } else {
           update_data(data.key, parseInt(data.val()))

           writeUserData('warodom', 'warodom khamphanchai',
           'kwarodom@vt.edu', 'https://pbs.twimg.com/profile_images/966896631147765760/AJ836huS_400x400.jpg')
        }
    });

});
