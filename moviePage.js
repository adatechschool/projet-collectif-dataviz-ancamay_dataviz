fetch('https://ghibliapi.vercel.app/films')
            .then(response => response.json())
            
            .then(data => {
                
                data.forEach(movie => {// forEach ft une boucle 

                    const characterDiv = document.createElement("div");
                    characterDiv.classList.add('character'); //list classe les characteres 
                    characterDiv.innerHTML = `
                       
                    
                    
    
                    <img ${movie.image}>
                     <p>${movie.original_title}</p>
                     <d>${movie.rt_score}</d>
                     
                    `;
                    

                    document.getElementById("drago").appendChild(characterDiv) //utiliser l'id et la variable qu'on a ccrée 
                        

            })
        })