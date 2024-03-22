var ContenuName = document.getElementById('drago');

var endPoint = 'https://api.tvmaze.com/shows'


for (var i = 1; i < 10; i++) {
    ajaxGet(endPoint + i, function (response) {
        var contenu;
        var information = JSON.parse(response);
        contenu = '<ul>';
        contenu += '<li>' + information.name + '</li>';
        contenu += '<li>' + information.types[0].type.name + '</li>';
        ContenuName.innerHTML += contenu;
        console.log(contenu);
    });
}
{/* <li>
                            <p id="drago" class="mr-16 text-xl">Les informations arrivent..</p>
                        </li> */}