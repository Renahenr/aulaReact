import { Link } from "react-router-dom";

export default function RioJaneiro()
{
    return(
        <div>
          <h1> ♞ Estado de Rio de Janeiro ♞</h1>

          <div className="conteudo">
            
            <img src="/RJ.png" />
            <p>
            O estado do Rio de Janeiro está localizado na região Sudeste do Brasil e é conhecido por suas belas paisagens, praias famosas e grande importância cultural e turística. Sua capital, a cidade do Rio de Janeiro, abriga pontos turísticos reconhecidos mundialmente, como o Cristo Redentor e o Pão de Açúcar. Além do turismo, o estado possui uma economia baseada nos setores de serviços, indústria e petróleo, desempenhando um papel importante no desenvolvimento do país.
         
            </p>

            <p>
            <Link to="/">↺ Voltar</Link> 
            </p>
            </div>
        </div>
    );
}