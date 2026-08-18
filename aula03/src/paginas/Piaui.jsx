import { Link } from "react-router-dom";

export default function Piaui()
{
    return(
        <div>
          <h1>☂ Estado do Piauí ☂</h1>

          <div className="conteudo">
          <img src="/PI.png" />
          <p>
          O Piauí está localizado na parte oeste da Região Nordeste e é um dos estados mais afastados do litoral, possuindo apenas uma pequena faixa costeira. Grande parte de seu território apresenta áreas de Cerrado e Caatinga, com clima predominantemente quente e, em algumas regiões, bastante seco. A economia do estado é baseada principalmente na agricultura, pecuária, comércio e serviços, com destaque para a produção de soja, milho e outros produtos agrícolas. O Piauí também possui importantes atrações naturais e históricas, como o Parque Nacional da Serra da Capivara, famoso por suas pinturas rupestres. Sua capital é Teresina, localizada no interior do estado.
          </p>
          <p>
            <Link to="/">↺ Voltar</Link> 
            </p>
            
            
            </div>
        </div>
    );
}