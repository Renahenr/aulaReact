import { Link } from "react-router-dom";

export default function Parana()
{
    return(
        <div>
          <h1> ☎ Estado do Paraná ☎</h1>
          
          <div className="conteudo">
           <img src="/PR.png" />

           <p>O Paraná é um estado localizado na região Sul do Brasil, conhecido por sua diversidade natural, cultural e econômica. Sua capital é Curitiba, uma cidade reconhecida pela organização urbana e pela qualidade de vida. O estado possui importantes áreas de preservação ambiental, como as Cataratas do Iguaçu, um dos principais pontos turísticos do país. Além do turismo, o Paraná se destaca pela agricultura, pela indústria e pela produção de alimentos, contribuindo de forma significativa para a economia brasileira. Sua população também é marcada pela diversidade cultural, resultado da influência de diferentes povos que participaram da formação do estado.
</p>
   
<p>
            <Link to="/">↺ Voltar</Link> 
            </p>

          </div>

  </div>
    )
}