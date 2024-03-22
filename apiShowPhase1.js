
const ajaxGet = (url, callback) => { // url, est l'URL de la ressource à récupérer, et callback, qui est une fonction à appeler une fois que la réponse est reçue.
    var xhr = new XMLHttpRequest();//Crée un nouvel objet XMLHttpRequest, qui sera utilisé pour effectuer la requête AJAX.
    xhr.open("GET", url);//initialise requête 
    xhr.addEventListener("load", function () { //lorsque la rep est chargée, la fct anonyme appeler prq traiter rep
        if (xhr.status >= 1 && xhr.status < 250) {// compris entre 1-250 
            callback(xhr.responseText);//l'utilisateur peut spécifier une fonction à exécuter avec les données de la réponse une fois qu'elles sont reçues.
        } else {
            console.error("Erreur de chargement : " + xhr.status + " " + xhr.statusText);// affiche msg erreur si c pas compris entre 1 et 250
        }
    });
    xhr.addEventListener("error", function () { // si la rqt échou pour qqconque rsn, elle sera appelé par la fonction anonyme
        console.error("La requête n'a pas pu aboutir."); // aff dans la cnsl si pr qq rsn la rqt ne s'affiche pas 
    });
    xhr.send(null);// Envoie la requête au serveur. Dans ce cas, aucun corps de requête n'est spécifié (null) car il s'agit d'une requête GET et il n'y a pas de données à envoyer avec la requête.
}
ajaxGet()
j'utilise une fonction fermée pour prendre en compte 1 et 250 et non 249, comme pour intervalle ouvert à droite
const getRandomInt = (min, max) =>{
    min = Math.ceil(1);
    max = Math.floor(250);
    return Math.floor(Math.random() * (max - min + 1)) + 1;
  }
getRandomInt ()

// Fonction pour récupérer une série TV aléatoire
// function getRandomShow() {
//     var randomPage = Math.floor(Math.random() * 250); // Choisit une page aléatoire (de 1 à 250)
//     var apiUrl = "https://api.tvmaze.com/shows?page=" + randomPage;
    
//     ajaxGet(apiUrl, function(response) {
//         var shows = JSON.parse(response);
//         var randomIndex = Math.floor(Math.random() * shows.length); // Choisit un index aléatoire dans la liste de séries de la page
//         var randomShow = shows[randomIndex];
//         console.log(randomShow); // Affiche les détails de la série aléatoire dans la console
//     });
// }

// // Appel de la fonction pour récupérer une série TV aléatoire
// getRandomShow();