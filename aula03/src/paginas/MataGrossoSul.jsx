import { Link } from "react-router-dom";

export default function MatoGrossoSul()
{
  
    return(
        <div>
          <h1>☂ Estado de Mato Grosso DO Sul☂</h1>

          <div className="conteudo">
          <img src="/MS.png" />
          <p>
          O Mato Grosso do Sul tem como capital Campo Grande e é conhecido principalmente por suas riquezas naturais. Uma parte importante do estado está localizada no Pantanal, uma das maiores áreas alagadas do mundo e um importante ambiente para diversas espécies de animais e plantas. O estado também possui áreas de Cerrado e rios de águas cristalinas, como os encontrados na região de Bonito, um dos principais destinos turísticos do Brasil. A economia de Mato Grosso do Sul é baseada principalmente na agricultura, na pecuária, na produção de celulose e em outras atividades industriais. A cultura do estado também apresenta influências indígenas e de diferentes grupos de imigrantes.

          </p>
          <p>
            <Link to="/">↺ Voltar</Link> 
            </p>
            
            
            </div>
        </div>
    );

}