import { Link } from "react-router-dom";

export default function Para()
{
    return(
        <div>
          <h1>☂ Estado de Pará ☂</h1>

          <div className="conteudo">
          <img src="/PA.png" />
          <p>
          O Pará (PA) tem como capital Belém e é um dos estados mais importantes da Região Norte. Seu território possui grandes áreas de Floresta Amazônica e uma extensa rede de rios. A economia paraense é bastante diversificada, com destaque para a mineração, a agricultura, a pecuária e o extrativismo. O estado é um importante produtor de minério e também se destaca pela produção de açaí, que é consumido em várias partes do Brasil. A cultura do Pará é muito rica, com manifestações tradicionais, música, dança e uma culinária marcada por ingredientes amazônicos.

          </p>
          <p>
            <Link to="/">↺ Voltar</Link> 
            </p>
            
            
            </div>
        </div>
    );
}