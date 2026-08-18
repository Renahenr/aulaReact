import { Link } from "react-router-dom";

export default function RioGrandeNorte()
{
    return(
        <div>
          <h1> ☎ Estado do Rio Grande do Norte☎</h1>

          
          <div className="conteudo">
          <img src="/RN.png" />
          <p> O Rio Grande do Norte está localizado no extremo nordeste do Brasil e possui um extenso litoral com praias, dunas, falésias e áreas de grande beleza natural. O turismo é uma das atividades mais importantes do estado, atraindo visitantes durante todo o ano. Além do turismo, sua economia também envolve agricultura, pecuária, produção de sal, comércio, indústria e geração de energia eólica. O estado possui grande potencial para a produção de energia dos ventos devido às suas condições climáticas. Sua capital é Natal, uma cidade conhecida pelas praias, dunas e atrações turísticas.
</p>

<p>
            <Link to="/">↺ Voltar</Link> 
            </p>

            </div>
        </div>
    );
}