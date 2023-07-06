function verificar() {
   var data = new Date ()
   var ano = data.getFullYear() // getFullYear serve também para colocar números de quatro digítos
   
   var fano = document.getElementById('txtano')
    var res = document.querySelector(`div#res`)

    if (fano.value.lenght == 0 || fano.value > ano ) {
        window.alert('Verifique o valor e tente novamente!')
    }

}