import { Link } from "react-router-dom";

export default function Rondonia()
{
    return(
        <div>
          <h1> ♞ Estado de Rondônia ♞</h1>

          <div className="conteudo">
            
            <img src="/RO.png" />
            <p>
            Rondônia está localizada na Região Norte e possui uma parte significativa de seu território ocupada pela Amazônia. A agricultura e a pecuária são atividades importantes para sua economia, com destaque para a produção de café, soja e criação de gado. O estado também possui diversos rios utilizados para a geração de energia. Sua capital é Porto Velho.
         
            </p>

            <p>
            <Link to="/">↺ Voltar</Link> 
            </p>
            </div>
        </div>
    );
}