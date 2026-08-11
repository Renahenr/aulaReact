import { Link } from "react-router-dom";

export default function RioGrandeSul()
{
    return(
        <div>
          <h1> ☎ Estado do Rio Grande Do Sul ☎</h1>
          
          <div className="conteudo">
           <img src="/RS.png" />

     <p>O Rio Grande do Sul é o estado mais ao sul do Brasil e tem Porto Alegre como capital. É conhecido por suas tradições culturais, sua história e suas belas paisagens. O estado possui regiões de campos, serras, áreas de mata e um extenso litoral. A agricultura e a pecuária são atividades muito importantes para sua economia, com destaque para a produção de arroz, soja, milho, trigo e uvas. O Rio Grande do Sul também é famoso pela produção de vinhos, especialmente na região da Serra Gaúcha. Entre os costumes tradicionais estão o chimarrão, o churrasco e as roupas típicas gaúchas. A cultura do estado recebeu influências de povos indígenas, portugueses, africanos, alemães, italianos e outros grupos que contribuíram para sua formação.</p>

     <p>
            <Link to="/">↺ Voltar</Link> 
            </p>


           </div>
    </div>
    )
}