import { Link } from "react-router-dom";
import { useState } from "react";

export default function Exercicio2()
{
    const [numero, setNumero] = useState();
    const [resultado, setResultado] = useState();

    function calcular()
    {
        let celsius;

        celsius = (Number(numero) - 32) * 5 / 9;

        // Exibindo o resultado na variável
        setResultado(
            <div>
                {numero} °F = {celsius.toFixed(2)} °C
            </div>
        );
    }

    return (
        <div>

            <h1>❥ Exercício 2</h1>

            <div className="conteudo">

                <form>
                    <p>
                        Digite a temperatura em Fahrenheit <br />

                        <input
                            type="text"
                            value={numero}
                            onChange={(e) => setNumero(e.target.value)}
                        />
                    </p>

                    <p>
                        <input
                            type="button"
                            value="✎ Calcular"
                            onClick={calcular}
                        />
                    </p>

                    <p>
                        {resultado}
                    </p>

                </form>

                <p>
                    <Link to="/">⟲ Voltar ⋆☀︎.</Link>
                </p>

            </div>

        </div>
    );
}
