import { Link } from "react-router-dom";

export default function Paraiba()
{
    return(
        <div>
          <h1> ☎ Estado da Paraíba ☎</h1>
          
          <div className="conteudo">
           <img src="/PB.png" />

     <p>A Paraíba está localizada na parte leste da Região Nordeste e possui um litoral com praias, falésias e áreas de grande beleza natural. O estado apresenta diferentes regiões, como o Litoral, o Agreste e o Sertão, cada uma com características próprias de clima e vegetação. Sua economia envolve agricultura, pecuária, indústria, comércio, serviços e turismo. A Paraíba também possui importantes manifestações culturais e festas tradicionais, além de cidades com patrimônio histórico. Sua capital é João Pessoa, conhecida por suas praias e por ser uma das capitais mais antigas do Brasil.
        </p>

     <p>
            <Link to="/">↺ Voltar</Link> 
            </p>


           </div>
    </div>
    )
}