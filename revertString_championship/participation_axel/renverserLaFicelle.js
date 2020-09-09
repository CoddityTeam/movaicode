function renverserLaFicelle(ficelle) {
  var Copie_De_La_Ficelle = "";
  for (var i = 0; typeof ficelle[i] != "undefined"; i = i + 1) {
    Copie_De_La_Ficelle = Copie_De_La_Ficelle.concat(ficelle[i]);
  }

  var Ficelle_Finale = "";
  while (typeof Copie_De_La_Ficelle != "undefined") {
    var j = 0;
    while (typeof Copie_De_La_Ficelle[j + 1] != "undefined") {
      j = j + 1;
    }
    if (Copie_De_La_Ficelle[j]) {
      Ficelle_Finale = Ficelle_Finale.concat(Copie_De_La_Ficelle[j]);
      Copie_De_La_Ficelle = Copie_De_La_Ficelle.substring(0, j);
      if (Copie_De_La_Ficelle == "") {
        Copie_De_La_Ficelle = undefined;
      }
    }
  }

  delete Copie_De_La_Ficelle;
  return Ficelle_Finale;
}

console.log(renverserLaFicelle(process.argv[2]));
