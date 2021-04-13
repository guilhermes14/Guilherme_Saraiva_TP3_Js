function calcularFatorial(){
    
    var inicio = Date.now()
    var numeroFatorial = parseInt(document.getElementById("numeroFat").value)

    if (numeroFatorial < 0)
    {
        document.getElementById("respostaCalcular").innerHTML = "Erro: Número negativo."

    }else if (numeroFatorial === 0 || numeroFatorial === 1)
    {
        var fim = Date.now();
        var decorrido = fim - inicio;
        document.getElementById("respostaCalcular").innerHTML = numeroFatorial + "! = 1 <br>(" + decorrido + " milissengundos)"

    }else
    {
        var Fatorial = 1;
        
        for(var num = 1; num <= numeroFatorial; num++)
        {
            Fatorial *= num;

        }
        var fim = Date.now();
        var decorrido = fim - inicio;
        document.getElementById("respostaCalcular").innerHTML = numeroFatorial + "! = " + Fatorial + "<br> (" + decorrido + " milissengundos)"

    }
}
