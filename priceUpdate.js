var config = {
      apiKey: "AIzaSyACSgbAIM01KGI_twhGzX1FABWyhhCS3Eo",
      authDomain: "test-6ee2a.firebaseapp.com",
      databaseURL: "https://test-6ee2a.firebaseio.com",
      projectId: "test-6ee2a",
      storageBucket: "test-6ee2a.appspot.com",
      messagingSenderId: "448582725279"
    };
firebase.initializeApp(config);


function sendRefrence(){
    var element = document.getElementById("A1_")
    for (var i = 0; i < 600 ; i++) {
      element = document.getElementById("A1_"+i)
      if (element == null){
        break
      }
      var inhance = document.getElementById("A1_"+i+"_12").innerHTML
      inhance1 = inhance.replace('<br>',"")
      inhance2 = inhance1.replace('<span>',"")
      inhance3 = inhance2.replace('</span>',"")
      firebase.database().ref("refrences/" + inhance3).set({
        price3:35000,
        price6:3000,
        price9:3000,
        price10:3000,
        price12:3000,
        price13:3000,
        price18:3000,
        price24:3000,
        price30:3000,
      })
      }
   }

setTimeout(function () {
  console.log('Started....')
  sendRefrence()
},8000)
