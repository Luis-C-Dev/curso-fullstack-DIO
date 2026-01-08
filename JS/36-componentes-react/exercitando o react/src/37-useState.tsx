import { useState } from "react"

function Use() {
    const [value, setvalue] = useState(0)


  return (
    <>
    <h1> AULA 37: USESTATE</h1>
    <p>nessa aula estudaremos o useState</p>
    <p>podemos usar o mesmo exemplo q fizemos la na aula 35</p>
    <button onClick={() => setvalue(value + 1)}>
        {value}
    </button>
    {/*esplicação: basicamente o useState cria um ambiente onde um valor sera guardado. enquanto todo o resto sera refeito. quando é renderizado pela primeira vez vem com o valor inicial 0 (coloquei la em cima) depois que eu clico o value recebe o valor do setvalue. e ai o useState salva o valor atual. quando eu clico dnv o usestate guarda o valor e apaga todo o codigo. e executa o codigo dnv mas agora com o valor salvo no useState. basicamente isso. importante avisar tbm q isso seria muito pesado. mas o react tem otimizações onde ele percebe onde ta igual e onde mudou. ai ele só re-renderiza onde mudou. */}
    {/*essa esplicação é importante pra entender como funciona o useState. mas basicamente o que é importante lembrar é que tudo que vamos querer guardar o valor e mostrar na tela usaremos usestate. */}
    </>
  )
}

export default Use
