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

