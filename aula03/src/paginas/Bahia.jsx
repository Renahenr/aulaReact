import { Link } from "react-router-dom";

export default function Bahia()
{
    return(
        <div>
          <h1> ♞ O estado da Bahia ♞</h1>

          <div className="conteudo">
            
            <img src="/BA.png" />
            <p>
            A Bahia é o maior estado da Região Nordeste em extensão territorial e possui uma grande diversidade de paisagens, incluindo praias, áreas de Caatinga, Cerrado e Mata Atlântica. O estado tem enorme importância histórica e cultural para o Brasil, sendo um dos principais locais de formação da cultura brasileira. Sua economia é bastante diversificada, envolvendo agricultura, pecuária, indústria, comércio, turismo, mineração e produção de petróleo. A Bahia também é famosa por sua culinária, música, festas populares e manifestações culturais. Sua capital é Salvador, uma das cidades mais importantes e históricas do país.
            </p>

            <p>
            <Link to="/">↺ Voltar</Link> 
            </p>
            </div>
        </div>
    );
}