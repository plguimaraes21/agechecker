function verificar() {
  var data = new Date()
  var ano = data.getFullYear()
  var fano = document.getElementById('txtano')
  var res = document.getElementById('res')
  if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert('Error. Verifique o ano digitado e tente novamente!')
  } else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fsex[0].checked) {
      genero = 'Homem'
      if (idade > 0 && idade < 10) {
        // criança
        img.setAttribute('src', 'assets/kid boy.jpg')
      }  else if (idade < 21) {
        // jovem
        img.setAttribute('src', 'assets/rapaz.jfif')
      } else if (idade < 50) {
        // adulto
        img.setAttribute('src', 'assets/adulto.jfif')
      } else {
        // 50+
       img.setAttribute('src', 'assets/adulto.jpg') 
      }
      } else if (fsex[1].checked){
      genero = 'Mulher'
      if (idade > 0 && idade < 10) {
        // criança
        img.setAttribute('src', 'assets/kidgirl.jpg')
      }  else if (idade < 21) {
        // jovem
        img.setAttribute('src', 'assets/moça.jpg')
      } else if (idade < 50) {
        // adulto
        img.setAttribute('src', 'assets/adulta.jpg')
      } else {
        // 50+
        img.setAttribute('src', 'assets/50.jpg')
      }
    }
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)
  }
}