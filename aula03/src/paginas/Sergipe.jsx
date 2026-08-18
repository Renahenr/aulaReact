import { Link } from "react-router-dom";

export default function Sergipe()
{
    return(
        <div>
          <h1> ♞ Estado de Sergipe ♞</h1>

          <div className="conteudo">
            
            <img src="/SE.png" />
            <p>
            Sergipe é o menor estado brasileiro em extensão territorial e está localizado na parte leste da Região Nordeste. O estado possui uma faixa litorânea com praias, além de regiões de Agreste e Sertão no interior. Sua economia envolve agricultura, pecuária, indústria, comércio, serviços, exploração de petróleo e turismo. Sergipe também possui manifestações culturais, festas tradicionais e importantes construções históricas. Entre seus atrativos naturais estão praias e áreas próximas ao Rio São Francisco. Sua capital é Aracaju, cidade litorânea que concentra grande parte das atividades econômicas e turísticas do estado.
         
            </p>

            <p>
            <Link to="/">↺ Voltar</Link> 
            </p>
            </div>
        </div>
    );
}