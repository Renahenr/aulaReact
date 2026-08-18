import { Link } from "react-router-dom";

export default function Maranhao()
{
  
    return(
        <div>
          <h1>☂ Estado do Maranhão☂</h1>

          <div className="conteudo">
          <img src="/MA.png" />
          <p>
          O Maranhão está localizado na parte oeste do Nordeste e apresenta uma grande diversidade de paisagens e características naturais. O estado possui áreas de Amazônia, Cerrado, Caatinga e uma extensa região litorânea. Entre seus principais pontos turísticos estão os Lençóis Maranhenses, conhecidos pelas grandes dunas e lagoas de águas cristalinas. Sua economia envolve agricultura, pecuária, indústria, mineração, comércio e atividades portuárias. O Maranhão também possui uma cultura muito rica, com destaque para o Bumba Meu Boi e outras festas tradicionais. Sua capital é São Luís, cidade histórica localizada no litoral.

          </p>
          <p>
            <Link to="/">↺ Voltar</Link> 
            </p>
            
            
            </div>
        </div>
    );

}