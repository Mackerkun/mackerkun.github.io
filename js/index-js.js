$(document).ready(function () {

    $(".dropdown-trigger").dropdown({
        hover: true,
        coverTrigger: false,
        constrainWidth: false
    });
    $(".sidenav").sidenav();
    $(".materialboxed").materialbox();

    loadProjects();
    loadSkills();

    //loadSnow();
    
});

function loadProjects() {
    var html = ``;
    db.collection('progetti').get().then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
            html += `
                <div class="col s12 m4">
                    <div class="card">
                        <div class="card-image">
                            <img src="assets/img/progetti/` + doc.data().immagine + `">
                            <a class="btn-floating halfway-fab waves-effect waves-light red" href="` + doc.data().link + `" target="_blank"><i class="material-icons">more_horiz</i></a>
                        </div>
                        <div class="card-content">
                            <span class="card-title">` + doc.data().nome + `</span>
                            <p>` + doc.data().descrizione + `</p>
                        </div>
                    </div>
                </div>
            `;
        });
        document.getElementById('presentationCards').innerHTML = html;
    });
}

function loadSkills() {
    var html = ``;
    db.collection('skill').get().then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
            html += `
                <div class="col s6 m2" style="margin-bottom: 5%">
                    <div style="position: relative; height: 180px; overflow: hidden">
                        <img width="100%" src="assets/img/skill/` + doc.data().nome + `.png" style="position: absolute; bottom: 0">
                    </div>
                    <h5 style="font-variant-caps: all-small-caps; color: white; text-align: center">` + doc.data().nome + `</h5>
                </div>
            `;
        });
        document.getElementById('skills').innerHTML = html;
    });
}

function loadWishlist() {
    var html = ``;
    db.collection('wishlist').get().then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
            html += `
                <div class="col s12 m3">
                    <div class="card">
                        <div class="card-image">
                            <img src="` + doc.data().immagine + `">
                            <span class="card-title" id="` + doc.id + `"></span>
                            <a class="btn-floating halfway-fab waves-effect waves-light red" href="` + doc.data().url + `" target="_blank"><i
                                    class="material-icons">attach_money</i></a>
                        </div>
                        <div class="card-content">
                            <h6><b>` + doc.data().nome + `</b></h6>
                            <p>Venditore: <b>` + doc.data().venditore + `</b> <br> ` + doc.data().descrizione + `</p>
                        </div>
                    </div>
                </div>
            `;
        });
        document.getElementById('wishlist').innerHTML = html;
        document.getElementById('wishlist-principal').style.display = 'block';
        document.getElementById('wishlist-principal').scrollIntoView();
    });
}

function loadCosplay() {
    document.getElementById('cosplay-principal').style.display = 'block';
    document.getElementById('cosplay-principal').scrollIntoView();
}

// Controlla il codice inserito nell'input della navbar
$('#sendSpecialCode').click(checkSpecialCode());
$('#inputSpecialCode').on('keypress',function(e) {
    if(e.which == 13) {
        checkSpecialCode();
    }
});
function checkSpecialCode() {
    var code = document.getElementById('inputSpecialCode').value;
    switch (code) {
        case 'wl88':
            loadWishlist();
        break;
        
        case 'cp77':
            loadCosplay();
        break;

        default:
            console.log('Codice non valido');
        break;

    }
}

function loadSnow() {
    try {
        $('body').flurry('destroy');
      }
      catch(err) {
      }
      finally {
        $('body').flurry();
      }
}