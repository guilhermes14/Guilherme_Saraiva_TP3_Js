class Aluno{
    constructor(nr){
        this.nr = nr;
        this.nota = parseInt(Math.random()*100);
        this.situacao = this.nota > 50 ? "Aprovado" : "Reprovado"
    }
}

function gerarRelatorio(){
    var alunos = []
    for(var i=1; i<21; i++)
    {
        var aluno = new Aluno(nr=i)
        document.getElementById("alunosRel").innerHTML+=
            `<tr>
                <td>${nr}</td>
                <td>${aluno.nota}</td>
                <td>${aluno.situacao}</td>
            </tr>`
        alunos.push(aluno)
    }
    return alunos
}

function criarRelatorio(){
    var nota = 20
    var lista_de_alunos = gerarRelatorio()
}

