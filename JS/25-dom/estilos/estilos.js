//element.classlist serve pra adicionar ou remover classes em elementos html.
//isso é util por exemplo quando queremos trocar o estilo de um site. la no css ja esta pronto um bloco onde deixa as coisas no tema escuro por exemplo mas pra ativalo é importante que as classes estejam nomeadas pra receber seus comandos
// com o elemnt.classlist podemos adicionar na classe do elemento um dark-theme ou o light-theme por exemplo e mudar a cor dele quando quiser por exemplo

const meuElemento = document.getElementById('paragrafo')
meuElemento.classList.add('coresAleatorias')
//adiciona classes
meuElemento.classList.remove('coresAleatorias')
//remove a classe
meuElemento.classList.toggle('coresAleatorias')
//funciona como um interruptor. se tiver "coresAleatorias" ele remove, se não tiver ele adiciona

function fundoPreto(){
   meuElemento.classList.toggle('fundoPreto')
}

//podemos ecessar e alterar o css a partir do js como se fosse propriedades entrando cada vez mais dentro das propriedades ex:
let nossoElemento= document.getElementById('titulo').style.backgroundColor = 'blue'