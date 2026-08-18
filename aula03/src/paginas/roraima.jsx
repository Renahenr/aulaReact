import { Link } from "react-router-dom";

export default function Roraima()
{
    return(
        <div>
          <h1> ☎ Estado de Roraima ☎</h1>

          
          <div className="conteudo">
          <img src="/RR.png" />
          <p> Roraima está localizado no extremo norte do Brasil, fazendo fronteira com a Venezuela e a Guiana. O estado possui paisagens variadas, incluindo florestas, campos e montanhas, como o Monte Roraima. Sua economia envolve agricultura, pecuária, comércio e serviços. A capital é Boa Vista.
</p>

<p>
            <Link to="/">↺ Voltar</Link> 
            </p>

            </div>
        </div>
    );
}