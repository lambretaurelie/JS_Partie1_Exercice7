function result() {
  var shoeSize = document.getElementById('shoeSize').value ;
  var yearOfBirth = document.getElementById('yearOfBirth').value ;
  if(isNaN(shoeSize)==false && isNaN(yearOfBirth)==false && yearOfBirth !=0){
    var result = shoeSize*2;
    result +=5;
    result *=50;
    result -=yearOfBirth;
    result +=1766;
    alert('Le resultat est : '+ result);
  } else {
    alert('Erreur, ceci n\'est pas un nombre');
  }
}
