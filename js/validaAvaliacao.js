var botaoAdicionar = document.querySelector("#adicionar-avaliacao");

//var regex = (^\d{1,2}).?(\d{3}).?(\d{3})-?(\d{1}|X|x$);

botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();
    
    var form2 = document.querySelector("#avaliacao1")
    var avaliacao = obtemAvaliacaoForm(form2);
    

    var erros = validaAvaliacao(avaliacao);

    if(erros.length > 0){
        exibeMsgDeErros(erros);
        return;
    }



    form2.reset();
    var mensagemErro = document.querySelector("#mensagem-erro")
    mensagemErro.innerHTML = "";
    
});



function obtemAvaliacaoForm(form2){
    var avaliacao = {
    medico: form2.medico.value,
    medicoCrm: form2.medicoCrm.value,
    nome: form2.nome.value,
    atendimento: form2.atendimento.value,
    queixas: form2.queixas.value,
    doenca: form2.doenca.value,
    alergias: form2.alergias.value,
    fumante: form2.fumante.value,
    tratamento: form2.tratamento.value,
    tipoTratamento: form2.tipoTratamento.value,
    remedio: form2.remedio.value,
    tipoRemedio: form2.tipoRemedio.value,

}
    return avaliacao;

}

function validaAvaliacao(avaliacao){
    var erros = [];

    if (avaliacao.medico.length == 0) {
        erros.push("Preencha o nome do médico");     
    }

    if (avaliacao.medicoCrm.length == 0) {
        erros.push("Preencha o campo CRM"); 
    }

    if (avaliacao.nome.length == 0) {
        erros.push("Preencha o nome do paciente");
        
    }
    if (avaliacao.atendimento.length == 0) {
        erros.push("Preencha o campo Data");
        
    }
    if (avaliacao.queixas.length == 0) {
        erros.push("Preencha o campo Queixas e Durações");
        
    }  
    if (avaliacao.doenca.length == 0) {
        erros.push("Preencha o campo História de Doenças");
        
    } 
    if (avaliacao.alergias.length == 0) {
        erros.push("Preencha o campo Alergias a Remédios");
        
    } 
    if (avaliacao.tipoTratamento.length == 0) {
        erros.push("Preencha o campo Tipo Tratamento");
        
    }  
    if (avaliacao.tipoRemedio.length == 0) {
        erros.push("Preencha o campo Queal Remédio");
        
    } 


    return erros;

}

function exibeMsgDeErros(erros){
    var ul = document.querySelector("#mensagem-erro");
    ul.innerHTML = "";
    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    })
}

console.log(botaoAdicionar)