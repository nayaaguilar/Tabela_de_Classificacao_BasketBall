var bulls = {
    nome: " Los Angeles Lakers",
    lanceLivre: 0,
    cestaDois: 0,
    cestaTres: 0,
    pontos: 0,
  }
  
  var lakers = {
    nome: "Chicago Bulls",
    lanceLivre: 0,
    cestaDois: 0,
    cestaTres: 0,
    pontos: 0,
  }
  
  lakers.pontos = calculaPontos(lakers)
  bulls.pontos = calculaPontos(bulls)
  
  function calculaPontos(times){
    var pontos = (times.lanceLivre * 1 +  times.cestaDois * 2 + times.cestaTres * 3)
    return pontos
  }
  
    var times = [bulls, lakers]
    
    exibirTimesNaTela(times)
    
    function exibirTimesNaTela(times){
      var html = ""
      for(var i = 0; i < times.length; i++){
        html += "<tr><td>" + times[i].nome +"</td>"
        html += "<td>" + times[i].lanceLivre +"</td>"
        html += "<td>" + times[i].cestaDois +"</td>"
        html += "<td>" + times[i]. cestaTres +"</td>"
        html += "<td>" + times[i].pontos +"</td>"
        html += "<td><button onClick='adicionarLanceLivre(" + i +")'>Lance Livre</button></td>"
        html += "<td><button onClick='adicionarCestaDois(" + i + ")'>Cesta de 2</button></td>"
        html += "<td><button onClick='adicionarCestaTres(" + i + ")'>Cesta de 3</button></td></tr>"
      }
      var tabelaTimes = document.getElementById('tabelaTimes')
      tabelaTimes.innerHTML = html
    }
  
  function adicionarLanceLivre(i){
    var time = times[i]
    time.lanceLivre++
    time.pontos = calculaPontos(time)
    exibirTimesNaTela(times)
  }
  
  function adicionarCestaDois(i){
    var time = times[i]
    time.cestaDois++
    time.pontos=calculaPontos(time)
    exibirTimesNaTela(times)
  }
  
  function adicionarCestaTres(i){
    var time = times[i]
    time.cestaTres++
    time.pontos=calculaPontos(time)
    exibirTimesNaTela(times)
  }
  //
  
  function adicionarGames() {
    var campoTrailer = document.querySelector('#video')
    var trailerGame = campoTrailer.value
    if (validaVideo(trailerGame)) {
      listarTrailerNaTela(validaVideo(trailerGame))
    } else {
      document.getElementById('erro').innerText = "Ops! você inseriu um endereço inválido do YouTube";
    }
    campoTrailer.value = ""
    setTimeout(function() {
          document.getElementById('erro').innerText = ""
        }, 2000);
  }
  
  function validaVideo(url) {
    var v = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/
    return (url.match(v)) ? url.match(v)[1] : false
  }
  
  function listarTrailerNaTela(codVideo) {
    var listaGameTrailer = document.querySelector('#listaGameTrailer')
    var elementoGame = "<div class='gameTrailer'><iframe src='https://www.youtube.com/embed/" + codVideo + "' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></div>"
    listaGameTrailer.innerHTML += elementoGame
  }
  
  function limparCampo() {
    var listaGameTrailer = document.querySelector('#listaGameTrailer')
    listaGameTrailer.innerHTML = ""
    
  }
  