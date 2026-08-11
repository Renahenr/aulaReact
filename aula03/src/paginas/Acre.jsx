import { Link } from "react-router-dom";

export default function Acre()
{
    return(
        <div>
          <h1> ♞ Estado do Acre ♞</h1>

          <div className="conteudo">
            
            <img src="/AC.png" />
            <p>
            O Acre tem como capital Rio Branco e está localizado no extremo oeste da Região Norte. O estado possui grande parte de seu território coberta por florestas amazônicas e apresenta uma grande diversidade de animais e plantas. A economia está relacionada à agricultura, à pecuária e ao extrativismo de produtos da floresta, como castanha e borracha. O Acre também possui uma história importante relacionada ao ciclo da borracha e à luta pela preservação da floresta. Sua cultura apresenta forte influência dos povos indígenas e das comunidades tradicionais da Amazônia.
         
            </p>

            <p>
            <Link to="/">↺ Voltar</Link> 
            </p>
            </div>
        </div>
    );
}