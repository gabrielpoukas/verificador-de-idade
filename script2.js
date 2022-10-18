function verificar() {

var data = new Date ()
var ano = data.getFullYear()
var fano = document.getElementById ('txtano')
var res = document.getElementById ('res')
if (fano.value.length == 0 || fano.value > ano) {


window.alert ('[ERRO] verifique seus dados e tende novamente')



}else {


var fsex = document.getElementsByName ('radsex')
var idade = ano-Number(fano.value)
var genero = ``
var img = document.createElement ('img')
img.setAttribute ('id', 'foto')
if (fsex [0].checked){

genero = 'Homem'
if(idade >=0 && idade <10) {

//criança
img.setAttribute('src', './imagens/bebem.png')

} else if (idade <21){

//jovem
img.setAttribute('src', './imagens/homemjovem.png')



} else if (idade <50) {

//adulto
img.setAttribute('src', './imagens/homemm.png')



} else if (idade >60){

        //idoso
img.setAttribute('src', './imagens/homenvelho.png')
}

}else if (fsex [1].checked){


genero = 'Mulher'

if(idade >=0 && idade <10) {

    //criança
    img.setAttribute('src', './imagens/bebef.png')

    
    } else if (idade <21){
    
    //jovem
    img.setAttribute('src', './imagens/mulherjjjj.png')

    
    
    } else if (idade <50) {
    
    //adulto
    img.setAttribute('src', './imagens/mulherm.png')

    
    
    } else if (idade >60){
    
            //idoso
    img.setAttribute('src', './imagens/mulherv.png')

    }

}

res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
res.appendChild(img)


}




}