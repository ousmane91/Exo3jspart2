//pour afficher une boite de dialogue avec la valeur du champ
function showname() {
  var elem = document.getElementById('lastname').value;
  elem.onkeyup = showname;
  alert('lastname');
}
