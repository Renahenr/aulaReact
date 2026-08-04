import { Link } from "react-router-dom";

export default function SaoPaulo()
{
    return(
        <div>
          <h1>☀ Estado de São Paulo ☀</h1>

          <div className="conteudo">
            
            <img src="/SP.png" />

            <p>
            O estado de São Paulo é o mais populoso e um dos mais importantes do Brasil, destacando-se por sua economia forte, diversidade cultural e desenvolvimento. Localizado na região Sudeste, abriga a maior cidade do país, que é um importante centro financeiro e comercial. Além da indústria e do agronegócio, São Paulo também se destaca pela riqueza cultural, pelas opções de turismo e por sua contribuição para o crescimento econômico e social do Brasil.


            </p>

            <p>
              <Link to="/">↺ Voltar</Link> 
            </p>

          </div>
        </div>
    );
}