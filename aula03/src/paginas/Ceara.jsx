import { Link } from "react-router-dom";

export default function Ceara()
{
    return(
        <div>
          <h1> ☎ Estado do Ceará ☎</h1>

          
          <div className="conteudo">
          <img src="/CE.png" />
          <p> O Ceará está localizado no norte da Região Nordeste e possui um extenso litoral, conhecido por suas praias, dunas e paisagens naturais. Grande parte do interior do estado apresenta clima semiárido e vegetação típica da Caatinga. A economia cearense é formada por atividades como turismo, agricultura, pecuária, indústria, comércio e produção de energia. O turismo possui grande importância devido às praias e atrações naturais, recebendo visitantes de várias partes do Brasil e do mundo. Sua capital é Fortaleza, uma das maiores cidades do Nordeste e importante centro comercial e turístico.
</p>

<p>
            <Link to="/">↺ Voltar</Link> 
            </p>

            </div>
        </div>
    );
}