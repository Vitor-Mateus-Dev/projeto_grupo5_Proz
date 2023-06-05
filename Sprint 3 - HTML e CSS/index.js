function abrirTab(idTab){
  var conteudos = document.getElementsByClassName("conteudo");
  for(var i=0; i<conteudos.length; i++){
    conteudos[i].style.display = "none";
  }

  document.getElementById(idTab).style.display="block";
}