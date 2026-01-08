import { useState } from "react"
function Render() {
    const[hide, sethide]= useState(false)



  return (
    <>
    <h1>AULA 38:</h1>
    {/*renderização condicional. basicamente é vc decidir se algo vai ser mostrado(renderizado) ou não */}
    {/*uma forma simples é essa: */}
    <p style={{display:"none"}}>teste</p> {/*esse metodo é funcional porem é mais pesado do que um metodo proprio do react: */}
    {hide && <p>teste 2</p>} {/*esse o codigo nem vai ser lido no navegador. o proprio react sabe q n é pra mostrar  */}
    {!hide && <p>teste 3</p>}{/*esse como eu estou negando o hide e la no useState ele ta false. no fim o paragrafo vai dar true e vai mostrar o conteúdo */}
    {/*analise pessoal sem professor: o usestate esta definindo q o "hide" é false. o sethide n esta sendo usado. ja q eu n estou mudando o valor. quando eu coloco "&&"  os dois lados devem ser posivos para o comando todo executar. como o hide é false ent nada executa. mas quando eu nego o hide => - com - = +. ent um lado executa somente o true e o outro ja estava true e retorna um html. os dois estão sendo executados mas só um retorna html*/}

    <button onClick={() => {sethide(!hide)}}>troca</button>{/* setHide atualiza o estado hide usando o valor atual negado */}
    {/*podemos usar um if ternario q é bem simples x ? v : f */}
    {/*x: verdadeiro ou falso?
    v: se verdadeiro
    f: se falso */}


   </>
  )
}

export default Render