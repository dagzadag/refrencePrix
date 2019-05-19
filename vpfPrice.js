var config = {
      apiKey: "AIzaSyACSgbAIM01KGI_twhGzX1FABWyhhCS3Eo",
      authDomain: "test-6ee2a.firebaseapp.com",
      databaseURL: "https://test-6ee2a.firebaseio.com",
      projectId: "test-6ee2a",
      storageBucket: "test-6ee2a.appspot.com",
      messagingSenderId: "448582725279"
    };
setTimeout(function (){
firebase.initializeApp(config);
},3000)


function getRefrence(){ /*** get the short refrence****/
  var refrence = document.getElementsByClassName('dxgv')[1].innerText;
  var newRefrence =""
  for (var i = 0 ; i <= refrence.length; i++) {
    if (refrence[i] == " ") {
      break
    }
    newRefrence += refrence[i]
  }
  return newRefrence
}
var dataValue = []
function getData (data){
    console.log("geting the data...")  
    dataValue = []
    var ref = data.val()
    var keys = Object.keys(ref)
    var vpfRef = getRefrence()
    for (var i = 0 ;i < keys.length; i++) {
        arrayInside =[]

        arrayInside.push(ref[keys[i]].refrence)
        arrayInside.push(keys[i])
        dataValue.push(arrayInside)
        arrayInside[0][0]
        var newRefrence =""
        for (var l = 0 ; l <= arrayInside[0].length; l++) {
          if (arrayInside[0][l] == " ") {
            break
          }

          newRefrence += arrayInside[0][l]
        }
       if (getRefrence() == newRefrence) {
          console.log("breaking ..." + keys[i])
          updatePrice(keys[i])
          break
       }
    }
}
function errorData(err) {
    console.log('Error!' + err)
}
function getDataInArray() {
  firebase.database().ref("refrences").on("value",getData,errorData)
  console.log("start...")
}
function updatePrice(key) {
  console.log("updating the price...")
  var k = $("#Url").val();
  var ref = document.getElementsByClassName('dxgv')[1].innerHTML;
  // Get a reference to the database service
  var prices ={}
  var three = $.getJSON('/' + k + '/DOSSIER/CalculTotalRembourser?NbEcheance=' + 3);
  var nine = $.getJSON('/' + k + '/DOSSIER/CalculTotalRembourser?NbEcheance=' + 9);
  var ten = $.getJSON('/' + k + '/DOSSIER/CalculTotalRembourser?NbEcheance=' + 10);
  var twelev = $.getJSON('/' + k + '/DOSSIER/CalculTotalRembourser?NbEcheance=' + 12);
  var eighteen = $.getJSON('/' + k + '/DOSSIER/CalculTotalRembourser?NbEcheance=' + 18);
  var twentyfour = $.getJSON('/' + k + '/DOSSIER/CalculTotalRembourser?NbEcheance=' + 24);
  var therty = $.getJSON('/' + k + '/DOSSIER/CalculTotalRembourser?NbEcheance=' + 30);
  setTimeout(function (argument) {
    // body...
    prices = {
      price3: three.responseJSON.TotalRembourser,
      price9: nine.responseJSON.TotalRembourser,
      price10: ten.responseJSON.TotalRembourser,
      price12: twelev.responseJSON.TotalRembourser,
      price18: eighteen.responseJSON.TotalRembourser,
      price24: twentyfour.responseJSON.TotalRembourser,
      price30: therty.responseJSON.TotalRembourser,
    }
    console.Log('refrences/'+key)
    firebase.database().ref('refrences/'+key).set(prices)
  },6000)
  
  
}
