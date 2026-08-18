import { Link } from "react-router-dom";

export default function Amazonas()
{
    return(
        <div>
          <h1>☀ Estado de Alagoas ☀</h1>

          <div className="conteudo">
            
            <img src="/AL.png" />

            <p>
            Alagoas está localizado na parte leste da Região Nordeste e possui um dos litorais mais conhecidos do Brasil, com praias de águas claras, piscinas naturais e belas paisagens. O estado possui áreas de Mata Atlântica e também regiões de clima mais seco no interior. Sua economia é baseada principalmente no turismo, na agricultura, na produção de cana-de-açúcar, na indústria, no comércio e nos serviços. Alagoas também possui uma cultura muito rica, com festas, músicas, danças e comidas típicas. Sua capital é Maceió, importante centro turístico e econômico do estado.


            </p>

            <p>
              <Link to="/">↺ Voltar</Link> 
            </p>

          </div>
        </div>
    );
}