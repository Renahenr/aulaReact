import { Link } from "react-router-dom";

export default function Tocantins()
{
    return(
        <div>
          <h1>☂ Estado de Tocantins ☂</h1>

          <div className="conteudo">
          <img src="/TO.png" />
          <p>
          Tocantins é o estado mais novo do Brasil, criado em 1988, e está localizado na Região Norte. Seu território é formado principalmente pelo Cerrado, com muitos rios e áreas naturais. A agricultura e a pecuária são importantes para sua economia, além do turismo. A capital é Palmas.




          </p>
          <p>
            <Link to="/">↺ Voltar</Link> 
            </p>
            
            
            </div>
        </div>
    );
}