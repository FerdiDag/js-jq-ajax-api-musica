$(document).ready(function() {
    $.ajax({
        url: "https://flynn.boolean.careers/exercises/api/array/music",
        'method': 'GET',
        success: function(data) {


            var array_dischi = data.response;
            // console.log(array_dischi);

            for (var i = 0; i < array_dischi.length; i++) {
                var disco_corrente = array_dischi[i];
                // console.log(disco_corrente);

                var dati_disco = {
                    'autore': disco_corrente.author,
                    'titolo': disco_corrente.title,
                    'immagine': disco_corrente.poster,
                    'anno': disco_corrente.year,
                    'genere': disco_corrente.genre,
                };





                var template_html = $('#card-disco').html();
                // preparo la funzione da utilizzare per utilizzare il template
                var template_function = Handlebars.compile(template_html);

                // tramite handlebars preparo l'html finale con i dati del disco all'interno
                var html_finale = template_function(dati_disco);

                // appendo in pagina una card con i dati del disco
                $('.cds-container').append(html_finale);


            }
            $("#generi").change(function() {
                var genereCorrente = $(this).val().toLowerCase();
                console.log(genereCorrente)
                console.log(disco_corrente.genre.toLowerCase())

            });

        },
        error: function() {
            alert("E' avvenuto un errore.");
        }


    });


});
