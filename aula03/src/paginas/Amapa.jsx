import { Link } from "react-router-dom";

export default function Amapa()
{
    return(
        <div>
          <h1> ♞ Estado do Amapá ♞</h1>

          <div className="conteudo">
            
            <img src="/AP.png" />
            <p>
            O Amapá tem como capital Macapá e está localizado no extremo norte do Brasil. O estado possui uma grande quantidade de áreas preservadas e importantes ecossistemas amazônicos. Uma característica interessante é que Macapá é cortada pela Linha do Equador, que divide o planeta entre os hemisférios Norte e Sul. A economia do Amapá envolve atividades como mineração, agricultura, comércio e extrativismo. O estado também possui belas paisagens naturais, rios e florestas, além de uma cultura marcada por influências indígenas, africanas e amazônicas.
         
            </p>

            <p>
            <Link to="/">↺ Voltar</Link> 
            </p>
            </div>
        </div>
    );
}