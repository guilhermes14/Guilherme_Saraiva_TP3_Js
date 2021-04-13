function calcularMinMax(){

    var valor_minimo = document.getElementById("numeroMin").value
    var valor_maximo = document.getElementById("numeroMax").value
    var listaDeMultiplos = []

    if(valor_minimo < valor_maximo)
    {
        for(num=valor_minimo; num<valor_maximo; i++)
        {
            if(num % 2 == 0 && num % 3 == 0)
            {
                listaDeMultiplos.push(i)
                
            }
            document.getElementById("respostaCalcular").innerHTML = listaDeMultiplos
            document.getElementById("respostaCalcular2").innerHTML = "Tem " + listaDeMultiplos.length + " número(s) múltiplos de 2 e de 3."
            
        }  
    }else
    {
        document.getElementById("respostaCalcular").innerHTML = "Valor máximo menor que valor mínimo."
    }
}