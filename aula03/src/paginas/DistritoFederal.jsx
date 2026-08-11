import { Link } from "react-router-dom";

export default function DistritoFederal()
{
    return(
        <div>
          <h1> ♞ O Distrito Federal ♞</h1>

          <div className="conteudo">
            
            <img src="/DF.png" />
            <p>
            O Distrito Federal (DF) é uma unidade federativa diferente dos estados e tem como principal cidade Brasília, que também é a capital do Brasil. Brasília foi inaugurada em 1960 e foi planejada para ser a nova capital do país. A cidade é conhecida por sua arquitetura moderna e por importantes edifícios públicos, como o Congresso Nacional, o Palácio do Planalto e o Supremo Tribunal Federal. O Distrito Federal possui grande importância política e administrativa, pois é onde estão localizados os principais órgãos do governo federal. Além da atividade política, a região também possui comércio, serviços e áreas de preservação ambiental.
         
            </p>

            <p>
            <Link to="/">↺ Voltar</Link> 
            </p>
            </div>
        </div>
    );
}