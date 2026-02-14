function onClickedEstimatePrice(){
         console.log("bouton d'estimation du prix cliqué");
         var sqft = document.getElementById("sqft")
         var bhk = getBHKValue;
         var bathrooms = getBathValue;
         var location = document.getElementById("location");
         var estPrice = document.getElementById("EstimatedPrice");

         var url = "http://127.0.0.1:5000/predict_home_price";

         $.post(url, {
          total_sqft: parseFloat(sqft.value),
          bhk: bhk,
          bath: bathrooms,
          location: location.value
         },function(data, status) {
          console.log(data.estimated_price);
          estPrice.innerHTML = "<h2>" + Math.floor((data.estimated_price*100000)/3) + "€<h2>";
          console.log(status);
         });
 
     }


function getBathValue() {
     var Bathrooms = document.getElementsByName("bath");
     for(var i in Bathrooms){
          if(Bathrooms[i].checked){
               return parseInt(i)+1;
          }
     }
     return -1; 
}

function getBHKValue() {
     var BHK = document.getElementsByName("bhk");
     for(var i in BHK) {
          if(BHK[i].checked) {
               return parseInt(i)+1;
          }
     }
     return -1; 
}


function onPageLoad() {
    console.log("Fichier chargé");

    var url = "http://127.0.0.1:5000/get_location_names";

    $.get(url, function(data, status) {
        console.log("Réponse obtenue pour le chargement des locations :", status);

        if (data) {
            var locations = data.locations;
            var $locationSelect = $('#location'); // id corrigé pour correspondre au HTML
            $locationSelect.empty();

            // Option par défaut
            $locationSelect.append(new Option("Choisissez une localisation", ""));

            // Ajouter les options dynamiquement
            for (var i in locations) {
                $locationSelect.append(new Option(locations[i], locations[i]));
            }
        }
    });
}

// Exécute au chargement de la page
window.onload = onPageLoad;
