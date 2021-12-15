var botaoAdicionar = document.querySelector("#adicionar-paciente");

//var regex = (^\d{1,2}).?(\d{3}).?(\d{3})-?(\d{1}|X|x$);

botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();
    
    var form = document.querySelector("#adiciona");
    var paciente = obtemPacienteForm(form);
  

    var erros = validaPaciente(paciente);

    if(erros.length > 0){
        exibeMsgDeErro(erros);
        return;
    }



    form.reset();
    var mensagemErro = document.querySelector("#mensagem-erro")
    mensagemErro.innerHTML = "";
});

function obtemPacienteForm(form){

    var paciente = {
        nome: form.nome.value,
        nascimento: form.nascimento.value,
        estadoCivil: form.estadoCivil.value,
        telefone: form.telefone.value,
        cpf: form.cpf.value,
        rua: form.rua.value,
        numero: form.numero.value,
        bairro: form.bairro.value

    }

    return paciente;
}




function validaPaciente(paciente){
    var erros = [];

    if (paciente.nome.length == 0) {
        erros.push("Preencha o campo Nome");     
    }

    if (paciente.nascimento.length == 0) {
        erros.push("Preencha o campo Data de Nascimento"); 
    }

    if (paciente.estadoCivil.length == 0) {
        erros.push("Preencha o campo Estado Civil");
        
    }
    if (paciente.telefone.length == 0) {
        erros.push("Preencha o campo Telefone");
        
    }
    if (paciente.rua.length == 0) {
        erros.push("Preencha o campo Rua");
        
    }  
    if (paciente.numero.length == 0) {
        erros.push("Preencha o campo Número");
        
    } 
    if (paciente.bairro.length == 0) {
        erros.push("Preencha o campo Bairro");
        
    }  

    if(paciente.cpf.length == 0 || paciente.cpf < 11){
        erros.push("CPF é Invalido");
    } 

    return erros;

}

function exibeMsgDeErro(erros){
    var ul = document.querySelector("#mensagem-erro");
    ul.innerHTML = "";
    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    })
}


