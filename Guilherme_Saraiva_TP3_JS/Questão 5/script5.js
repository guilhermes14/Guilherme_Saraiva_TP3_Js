function calcularTriangulo(){

    let LadoA = parseFloat(document.getElementById("ladoATri").value);
    let LadoB = parseFloat(document.getElementById("ladoBTri").value);
    let LadoC = parseFloat(document.getElementById("ladoCTri").value);

    if (LadoA < LadoB + LadoC && LadoB < LadoA + LadoC && LadoC < LadoA + LadoB)
    {
        if (LadoA == LadoB && LadoB==LadoC) {
            document.getElementById("respostaCalcular").innerHTML ='Triângulo Equilátero';
        }
        else 
        {
            if (LadoA == LadoB || LadoA == LadoC || LadoC == LadoB) {
                document.getElementById("respostaCalcular").innerHTML ='Triângulo Isósceles';
            }
            else {
                document.getElementById("respostaCalcular").innerHTML ='Triângulo Escaleno';
            }
        }
    }else 
    {
        document.getElementById("respostaCalcular").innerHTML ='Não é um triângulo.';
    }

}