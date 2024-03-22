fetch('https://ghibliapi.vercel.app/films')
            .then(response => response.json())
            
            .then(data => {
                
                data.forEach(movie => {// forEach ft une boucle 

                    const characterDiv = document.createElement("div");
                    characterDiv.classList.add('character'); //list classe les characteres 
                    characterDiv.innerHTML = `
                       
                    
                    <a href=${movie.image} class="button">${movie.title}</a>
    
                    
                     <p>${movie.description}</p>
                     <d>${movie.release_date}</d>
                     
                    `;
                    

                    document.getElementById("drago").appendChild(characterDiv) //utiliser l'id et la variable qu'on a ccrée 
                        

            })
        })


