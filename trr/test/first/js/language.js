function switchLanguage(chosenLanguage) {
    switch (chosenLanguage) {
        case 'language-ita':
            console.log('Ita');
            // $('#id').text('testo')
            $.getJSON('assets/' + chosenLanguage + '.json', function(json) {
                for (var k in json) {
                    $('#'+k).text(''+json[k]);
                };
                $('#language-navbar-language').attr('src', 'assets/img/flag/italy.png');
                $('#language-navbar-language').attr('alt', 'Italy flag');
            })
            geti18n(chosenLanguage);
            break;
        case 'language-eng':
            console.log('Eng')
            $.getJSON('assets/' + chosenLanguage + '.json', function(json) {
                for (var k in json) {
                    $('#'+k).text(''+json[k]);
                };
                $('#language-navbar-language').attr('src', 'assets/img/flag/uk.png');
                $('#language-navbar-language').attr('alt', 'England flag');
            })
            geti18n(chosenLanguage);
            break;
        case 'language-fra':
            console.log('Fra')
            $.getJSON('assets/' + chosenLanguage + '.json', function(json) {
                for (var k in json) {
                    $('#'+k).text(''+json[k]);
                };
                $('#language-navbar-language').attr('src', 'assets/img/flag/france.png');
                $('#language-navbar-language').attr('alt', 'France flag');
            })
            geti18n(chosenLanguage);
            break;
        default:
            console.log('No language selected')
            break;
    }
}

function geti18n(chosenLanguage) {
    switch (chosenLanguage) {
        case 'language-ita':
            $('.datepicker').datepicker({
                autoClose: true,
                format: 'dd mmmm yyyy',
                minDate: new Date(),
                firstDay: 1,        
                i18n: {
                    "months": ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"],
                    "monthsShort": ["Gen", "Feb", "Mar", "Apr", "Mag", "Giu", "Lug", "Ago", "Set", "Ott", "Nov", "Dic"],
                    "weekdays": ["Domenica","Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"],
                    "weekdaysShort": ["Dom","Lun", "Mar", "Mer", "Gio", "Ven", "Sab"],
                    "weekdaysAbbrev": ["D","L", "M", "M", "G", "V", "S"]
                }
            })
            break;
        case 'language-eng':
            $('.datepicker').datepicker({
                autoClose: true,
                format: 'mmm dd, yyyy',
                minDate: new Date(),
                firstDay: 1       
            })
            break;
        case 'language-fra':
            $('.datepicker').datepicker({
                autoClose: true,
                format: 'dd/mm/yyyy',
                minDate: new Date(),
                firstDay: 1,        
                i18n: {
                    "months": ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
                    "monthsShort": ["Jan", "Fév", "Mar", "Avr", "Mai", "Jui", "Jui", "Aoû", "Sep", "Oct", "Nov", "Déc"],
                    "weekdays": ["Dimanche","Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"],
                    "weekdaysShort": ["Dim","Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"],
                    "weekdaysAbbrev": ["D","L", "M", "M", "J", "V", "S"]
                }
            })
            break;
        default:
            console.log('No language selected')
            break;
    }

}