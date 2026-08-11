import { Link } from "react-router-dom";

export default function MatoGrosso()
{
  
    return(
        <div>
          <h1>☂ Estado de Mato Grosso ☂</h1>

          <div className="conteudo">
          <img src="/MT.png" />
          <p>
          O Mato Grosso tem como capital Cuiabá e é um dos maiores estados brasileiros em extensão territorial. O estado possui grande importância para a agricultura e é um dos maiores produtores de soja, milho e algodão do Brasil. Também se destaca pela criação de gado. Seu território apresenta uma grande diversidade natural, incluindo áreas do Pantanal, do Cerrado e da Floresta Amazônica. Essa riqueza natural faz do turismo uma atividade importante, principalmente para quem busca conhecer rios, animais e paisagens. A economia do Mato Grosso está fortemente ligada ao agronegócio, que tem grande participação na produção e nas exportações brasileiras.

          </p>
          <p>
            <Link to="/">↺ Voltar</Link> 
            </p>
            
            
            </div>
        </div>
    );

}