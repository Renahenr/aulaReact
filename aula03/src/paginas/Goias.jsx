import { Link } from "react-router-dom";

export default function Goias()

{
    return(
        <div>
          <h1>☀ Estado de Goiás ☀</h1>

          <div className="conteudo">
            
            <img src="/GO.png" />

            <p>Goiás tem como capital Goiânia e é um dos principais estados da Região Centro-Oeste. O estado possui grande importância na produção agrícola e pecuária, destacando-se na produção de soja, milho, cana-de-açúcar e criação de gado. Goiás também possui belas paisagens naturais, cachoeiras, rios e áreas de Cerrado. Entre seus pontos turísticos estão a cidade histórica de Goiás, a Chapada dos Veadeiros e as águas termais de Caldas Novas. A cultura goiana é marcada por festas tradicionais, música sertaneja e uma culinária bastante conhecida, com pratos como arroz com pequi e empadão goiano.</p>

           
<p>
            <Link to="/">↺ Voltar</Link> 
            </p>


            </div>
   </div>
        );
        }