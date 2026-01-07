function App() {
/*RESUMO INTERFACE: eu criei um "criador de tipos" e disse q qualquer um q seja do tipo "criador de cards" tem que ter uma propriedade titulo e deve ser uma string. Quando eu crio uma função posso colocar nela uma propriedade e eu coloquei "nome" esse que sera do tipo "criador de cards" quando eu escrevi "titulo :" e abri chaves vem um codigo js. esse codigo só tinha a propriedade :"nome" que retornava a propriedade title q retorna uma string.*/

  interface CriadorDeCards { /*aqui é um criador de tipos. ai to dizendo q qualquer tipo q se chame "criador de cards deve ter a propriedade titulo e que deve ser uma string" */
        title: string
        children: React.ReactNode
      }                     /*aqui em baixo como é uma função coloquei um parametro chamado propriedade. essa propriedade é do tipo criador de cards */
  let Card = (nome : CriadorDeCards )=> { /*ja comecei fazendo um erro. ele só retorna uma div. ent fazemos uma div pai e colocamos componentes menores dentro pra ficar tipo uma super div */
    return (
      <div style={{border: '5px solid black'}}>
                      {/*meio q eu digo q o titulo é do tipo propriedade. e propriedade é do tipo criador de cards. ai eu vou pra propriedade title. por isso esse ponto "." */}
        <span> titulo:{nome.title} </span> {/*span é voltado pra palavras pequenas ou partes especificas de um paragrafo. ele é inline ou seja cobre só o espaço do conteudo*/}

        <div>{nome.children} </div>

        <footer> footer</footer> {/* footer é o final de um site */}

      </div>
    )
  }



  return (
    <> {/*aqui no componente eu informo q la na propriedade title resulta teste. uma string. o html consegue ler e roda tile: teste */}
    <Card title="teste"/> {/*aqui eu chamei aquela função e a função retorna um html. o html é lido e rodado.*/  /*aqui eu fiz "selfclose" no elemento pois ele n aceita "html's" filhos. é só o dele e acabou */}
    {/*poderiamos só escrever o html aqui dentro mas usando  esses componentes podemos re-chamalos e podemos aplicar propriedades nele. ex */}
      
    <Card title="teste"/>
{/*outra utilidade dos componentes */}
    <Card title="teste"/> {/*esses vão ter erro ja que esta faltando a propriedade children */}

    {/*podemos colocar um children se especificarmos o lugar q ele vai ficar. tudo q é escrito entre duas tags é filho vem de um q ja tem informação. vc vai la e coloca mais */}
    <Card title="coloquei um children">
    se n escrever q isso é um children da erro. mas se eu especificar q vai ter um children e escrever onde vai ficar esse children ai ele aceita
    </Card>
    </>
  )
}

export default App
