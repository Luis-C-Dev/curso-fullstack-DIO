//o ts não vai entender de primeira que isso é um input. ele julga ser apenas um elemnto html generico. pra ele entender precisamos dizer pra ele usando 'as'
const input = document.getElementById("input") as HTMLInputElement /*se não especificar que ele é um elemento input do html o comando input.value n vai existir. ja que o ts n sabe se ele tem ou n valor */ /*opinião pessoal n gostuei poderia ser mais facil de entender se n fosse por esse htmlinputelement */
// console.log (input.value)

input.addEventListener('input',function(){ /*isso era materia de eventos mas dale: escrevendo input(nome do elemento que estamos mudando) ele vai ser true todas as vezes que ele atualizar. ai ele atualiza sempre que estamos fazendo qualquer coisa que envolva ele ou seja cada vez que digitamos alguma letra */
console.log(input.value)
})