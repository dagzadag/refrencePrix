var config = {
      apiKey: "AIzaSyACSgbAIM01KGI_twhGzX1FABWyhhCS3Eo",
      authDomain: "test-6ee2a.firebaseapp.com",
      databaseURL: "https://test-6ee2a.firebaseio.com",
      projectId: "test-6ee2a",
      storageBucket: "test-6ee2a.appspot.com",
      messagingSenderId: "448582725279"
    };
firebase.initializeApp(config);

var ref = firebase.database().ref("refrences")
var refrence = {}
var dataValue = []
var arrayInside = []
ref.on("value",getData,errorData)
function errorData(err) {
  console.log('Error!' + err)
}
function getData (data){
  var ref = data.val()
  var keys = Object.keys(ref)
  for (var i = 0 ;i < keys.length; i++) {
    arrayInside =[]
    arrayInside.push(keys[i])
    arrayInside.push(ref[keys[i]].price3)
    arrayInside.push(ref[keys[i]].price6)
    arrayInside.push(ref[keys[i]].price9)
    arrayInside.push(ref[keys[i]].price12)
    arrayInside.push(ref[keys[i]].price13)
    arrayInside.push(ref[keys[i]].price18)
    arrayInside.push(ref[keys[i]].price24)
    arrayInside.push(ref[keys[i]].price30)
    dataValue.push(arrayInside)
  }
}
 function sendRefrence(){
    var element = document.getElementById("A1_")
    for (var i = 0; i < 600 ; i++) {
      element = document.getElementById("A1_"+i)
      if (element == null){
        break
      }
      firebase.database().ref("refrences/" + document.getElementById("A1_"+i+"_0").innerText).set({
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
   sendRefrence()
