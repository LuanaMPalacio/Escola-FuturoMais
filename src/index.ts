class Aluno{
    nome:string;
    idade : number;
    nota1 : number;
    nota2: number;
    media : number;
    situacao : string;

    constructor(nome:string, idade:number, nota1 : number, nota2:number){
        this.nome = nome;
        this.idade = idade;
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.media = this.calcularMedia(nota1, nota2);
        this.situacao = this.definirSituacao(this.media);
    }

    calcularMedia(nota1 : number, nota2 : number): number{
        return (nota1 + nota2) / 2;
    }

    definirSituacao(media: number) : string{
        this.situacao = media >=7 ? "Aprovado" : "Reprovado"

        return this.situacao;
    }
}

const btnCadastrar = document.getElementById("btnCadastrar") as HTMLButtonElement;
const nomeAluno = document.getElementById("aluno") as HTMLInputElement;
const idadeAluno = document.getElementById("idade") as HTMLInputElement;
const nota1 = document.getElementById("nota1") as HTMLInputElement;
const nota2 = document.getElementById("nota2") as HTMLInputElement;
const tabela = document.getElementById("tabela") as HTMLTableElement
const tabelaCorpo = document.getElementById("tabelaAluno") as HTMLTableSectionElement


btnCadastrar.addEventListener("click", () =>{
    if(nomeAluno.value.trim() === "" ||idadeAluno.value.trim() === "" || nota1.value.trim() === "" || nota2.value.trim() == ""){
        alert("Prencha todos os campos!");
        return;
    }

    const nome = nomeAluno.value.trim();
    const idade = Number(idadeAluno.value);
    const nota01 = Number(nota1.value);
    const nota02 = Number(nota2.value);

    if (!/^[A-Za-zÀ-ÿ\s]+$/.test(nome)) {
    alert("O nome deve conter apenas letras!");
    return;
  }

    if(isNaN(idade) || idade<=0 || idade > 122){
        alert("Digite um idade válida!")
        return;
    }

    if(isNaN(nota01) || nota01 < 0 || nota01 > 10){
        alert("Digite um nota entre 0 e 10!");
        return;
    }

    if(isNaN(nota02) || nota02 < 0 || nota02 > 10){
        alert("Digite um nota entre 0 e 10!");
        return;
    }

    const aluno = new Aluno(nome,idade,nota01,nota02);
    const linha = document.createElement("tr")
    linha.innerHTML = `
    <td>${aluno.nome}</td>
    <td>${aluno.idade}</td>
    <td>${aluno.nota1}, ${aluno.nota2}</td>
    <td>${aluno.media.toFixed(1)}</td>`

    const situacaoTd = document.createElement("td");
    situacaoTd.textContent = aluno.situacao;
       if(aluno.situacao == "Aprovado"){
        situacaoTd.classList.add("aprovado");
       }
       else{
        situacaoTd.classList.add("reprovado");
       }
    linha.appendChild(situacaoTd);
    tabelaCorpo.appendChild(linha);
    
    tabela.style.display = "table"

    nomeAluno.value = "";
    idadeAluno.value = "";
    nota1.value = "";
    nota2.value = "";
}); 