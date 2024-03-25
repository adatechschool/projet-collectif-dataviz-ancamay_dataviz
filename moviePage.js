// let url = new URL("https://ghibliapi.vercel.app/films");
// let params = url.searchParams;

// //Add a second foo parameter.
// params.append("film_id", 1);


// // Obtenir la valeur de l'identifiant de la requête actuelle
// const id = searchParams.get('id');

// // Remplacer "{id}" dans paramsString par la valeur de l'identifiant
// const url = paramsString.replace('{id}', id);

// // Maintenant, url contiendra l'URL complète avec l'identifiant spécifié
// console.log(url);

// let fullURL = url.toString();
// document.addEventListener("DOMContentLoaded", function () {
//     // Récupérer l'ID du film à partir de l'URL
//     const urlParams = new URLSearchParams(window.location.search);
//     const pokemonId = urlParams.get('id');

//     // Utiliser <id> pour récupérer les détails du film depuis votre API
//     fetch(` https://ghibliapi.vercel.app/films/ `)
//         .then(response => response.json())

//         .then(movieD => {
//             console.log(movieD)

//             movieD.forEach(movie => {
//             // Créer un élément div pour afficher les détails du film

//             const div = document.createElement("div");
//             div.classList.add('movieDetails'); //list classe les characteres 
//             div.innerHTML = `
                       
                    
                    
    
//                     <img src = ${movie.image}/>
//                      <p>${movie.original_title}</p>
//                      <d>rate of movie: ${movie.rt_score}</d>
                     
//                     `;

//             // document.body.appendChild(div);
//             document.getElementById("detailsMovie").appendChild(div) //utiliser l'id et la variable qu'on a ccrée 


//         })
//         .catch(error => {
//             console.error('Une erreur s\'est produite lors de la récupération des détails du film :', error);
//         });
// })

// })
// document.addEventListener("DOMContentLoaded", function() {
//     // Récupérer l'ID du Pokémon à partir de l'URL
//     const urlParams = new URLSearchParams(window.location.search);
//     const pokemonId = urlParams.get('id');
//     // Utiliser pokemonId pour récupérer les détails du Pokémon depuis votre API
//     fetch(`https://pokebuildapi.fr/api/v1/pokemon/${pokemonId}`)
//         .then(response => response.json())
//         .then(pokemon => {
//             // Créer un élément div pour afficher les détails du Pokémon
//             const div = document.createElement("div");
//             div.classList.add("pokemonDetails");
//             div.innerHTML = `
//                 <center><img class="image" src="${pokemon.image}" /></center>
//                 <h2><center>${pokemon.name}</center></h2>
//                 <p><center>
//                 ${pokemon.apiTypes.map(type => `<span class="${type.name.toLowerCase()}">${type.name}</span> `).join('')}
//                 </center></p>
//                 <div id="statsContainer">
//                 ${Object.entries(pokemon.stats).map(([statName, statValue]) => `<p class="centered">${statName}: ${statValue}</p>`).join('')}
//             </div>
//             `;
//             // Ajouter l'élément div à la page HTML
//             document.body.appendChild(div);
//         })
//         .catch(error => {
//             console.error('Une erreur s\'est produite lors de la récupération des détails du Pokémon :', error);
//         });
// });

document.addEventListener("DOMContentLoaded", function () {
    // Récupérer l'ID du film à partir de l'URL
    const urlParams = new URLSearchParams(window.location.search);
    const filmId = urlParams.get('id');

    // Utiliser <id> pour récupérer les détails du film depuis votre API
    fetch(`https://ghibliapi.vercel.app/films/${filmId}`)
        .then(response => response.json())
        .then(film => {
            // Afficher les détails du film
            displayFilmDetails(film);
        })
        .catch(error => {
            console.error('Une erreur s\'est produite lors de la récupération des détails du film :', error);
        });
});

function displayFilmDetails(film) {
    // Créer un élément div pour afficher les détails du film
    const filmDetailsDiv = document.createElement("div");
    filmDetailsDiv.classList.add('filmDetails'); // Ajouter la classe CSS
    filmDetailsDiv.innerHTML = `
       
                   <img src = ${film.image}/>
                   <p>${film.original_title}</p>
                  <d>rate of movie: ${film.rt_score}</d>
    `;

    // Ajouter le div à l'élément avec l'ID "filmDetails"
    document.getElementById("filmDetails").appendChild(filmDetailsDiv);
}