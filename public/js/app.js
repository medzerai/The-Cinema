fOfflineLoad();
function fOfflineLoad() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("./sw.js")
      .then((reg) => {
        console.log("Registration succeeded.");
      })
      .catch((error) => {
        console.log("Registration failed with " + error);
      });
  }
}

function consulterFilm() {
  var nom = document.getElementById("Nom").value;
  var annee = document.getElementById("Année").value;
  var genre = document.getElementById("Genre").value;
  var k = "";
  var ch = [];
  if (nom.length != 0 || annee.length != 0 || genre.length != 0) {
    k += "?";
    if (nom.length != 0) {
      ch.push("nom=" + nom);
    }
    if (annee.length != 0) {
      ch.push("annee=" + annee);
    }
    if (genre.length != 0) {
      ch.push("genre=" + genre);
    }
    k += ch.join("&");
  }
  fetch("http://127.0.0.1:8000/film" + k)
    .then((res) => res.json())
    .then((data) => {
      var res = "";
      var tabjson = data;
      for (var i = 0; i < tabjson.length; i++) {
        res +=
          '<div class="card col-12 col-sm-6 col-md-4" style="width: 18rem;"> <img src="./img/Filmoo.jpg" class="card-img-top"> <div class="card-body"> <h5 class="card-title">FILM : ' +
          tabjson[i].nom +
          '</h5> <h6 class="card-subtitle mb-2 text-muted">Réalisé par : ' +
          tabjson[i].realisateur +
          '</h6> </div> <ul class="list-group list-group-flush"> <li class="list-group-item"><b>Genre : </b>' +
          tabjson[i].genre +
          '</li> <li class="list-group-item"><b>Année : </b>' +
          tabjson[i].annee +
          '</li> <li class="list-group-item"><b>ID : </b>' +
          tabjson[i].id +
          "</li> </ul> </div>";
      }
      var P = document.getElementById("content");
      if (P) {
        P.innerHTML = res;
      }
    });
}
function ajouterFilm() {
  var nom = document.getElementById("nom").value;
  var rea = document.getElementById("realisateur").value;
  var genre = document.getElementById("genre").value;
  var annee = document.getElementById("annee").value;
  fetch("http://127.0.0.1:8000/film", {
    method: "POST",
    body: JSON.stringify({
      nom: nom,
      realisateur: rea,
      genre: genre,
      annee: annee,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      alert(data.message);
    });
}
