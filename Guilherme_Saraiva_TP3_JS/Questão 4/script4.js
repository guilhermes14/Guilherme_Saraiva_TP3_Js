function CriaLista(){

    var QntNumeros = Number(document.getElementById('qntNumeros').value);
    var ValorMinimo = Number(document.getElementById('valorMin').value);
    var ValorMaximo = Number(document.getElementById('valorMax').value);
	var ListadeNumeros = []

	for(var i=ValorMinimo; i<QntNumeros; i++)
    {
		ListadeNumeros.push(GerarNumeros(ValorMinimo,ValorMaximo))

	}

    var numerosOrdenados = ListadeNumeros.sort(comparaNumeros);

	document.getElementById("respostaCalcular").innerHTML = "Lista de números: " + numerosOrdenados

}


function GerarNumeros(ValorMinimo,ValorMaximo)
{
	return Math.floor((Math.random() * ValorMaximo) + ValorMinimo);

}

function comparaNumeros(a,b) 
{ 
    if (a == b) return 0; if (a < b) return -1; if (a > b) return 1; 
}