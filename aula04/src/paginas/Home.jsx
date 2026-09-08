import {Link} from "react-router-dom";
import "../App.css";

export default function Home()
{
    return (
        <div>
            <h1> ㋡ 𝓐𝓾𝓵𝓪 04 ✦ ℰ𝓈𝓉𝓊𝒹ℴ 𝒹ℯ 𝒱𝒶𝓇𝒾𝒶́𝓋ℯ𝒾𝓈 𝒹ℯ ℰ𝓈𝓉𝒶𝒹ℴ ㋛ </h1>

            <div className="conteudo">

                <h3>Exemplos 𓃰 𓆉 𓃮 𓅭 𓆈 𓆙</h3>

                <ul>
                    <li><Link to="/exemplo1">Exemplo 1</Link></li>
                    <li><Link to="/exemplo2">Exemplo 2</Link></li>
                </ul>

                <h3>Exercícios 𓆝  𓆟  𓆞 𓆝  𓆟</h3>

                <ul>
                    <li><Link to="/exercicio1">Exercício 1</Link></li>
                    <li><Link to="/exercicio2">Exercício 2</Link></li>
                    <li><Link to="/exercicio3">Exercício 3</Link></li>
                </ul>

            </div>
            
        </div>
    );
}