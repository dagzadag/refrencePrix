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
document.getElementsByClassName('widget-header')[1].innerHTML += '<a onclick="updatePrice()">hello</a>'
var globalRefrence =""
var globKey =""

  function getRefrence(){ /*** get the short refrence****/
    var refrence = document.getElementsByClassName('dxgv')[1].innerText;
    var newRefrence =""
    for (var i = 0 ; i <= refrence.length; i++) {
      if (refrence[i] == " ") {
        break
      }
      newRefrence += refrence[i]
    }
    return newRefrence + " : " + document.getElementsByClassName('dxgv')[2].innerText
  }
 
  function updatePrice() {
    console.log("updating the price...")
    var k = $("#Url").val();
    var ref = document.getElementsByClassName('dxgv')[1].innerHTML;
    // Get a reference to the database service
    var three = $.getJSON('/' + k + '/DOSSIER/CalculTotalRembourser?NbEcheance=' + 3);
    var nine = $.getJSON('/' + k + '/DOSSIER/CalculTotalRembourser?NbEcheance=' + 9);
    var ten = $.getJSON('/' + k + '/DOSSIER/CalculTotalRembourser?NbEcheance=' + 10);
    var twelev = $.getJSON('/' + k + '/DOSSIER/CalculTotalRembourser?NbEcheance=' + 12);
    var eighteen = $.getJSON('/' + k + '/DOSSIER/CalculTotalRembourser?NbEcheance=' + 18);
    var twentyfour = $.getJSON('/' + k + '/DOSSIER/CalculTotalRembourser?NbEcheance=' + 24);
    var therty = $.getJSON('/' + k + '/DOSSIER/CalculTotalRembourser?NbEcheance=' + 30);
    var prices ={}
    setTimeout(function () {
      // body...
      prices = {
        refrence:getRefrence(),
        price3: three.responseJSON.TotalRembourser,
        price6: three.responseJSON.TotalRembourser,
        price9: nine.responseJSON.TotalRembourser,
        price10: ten.responseJSON.TotalRembourser,
        price12: twelev.responseJSON.TotalRembourser,
        price13: twelev.responseJSON.TotalRembourser,
        price18: eighteen.responseJSON.TotalRembourser,
        price24: twentyfour.responseJSON.TotalRembourser,
        price30: therty.responseJSON.TotalRembourser,
      }
    firebase.database().ref('refrences/').push().set(prices)
    console.log("refrence/" )
    },6000)
    
    
  }
