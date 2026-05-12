export default function Exercicio2( {peso, altura})
{
    let imc = Number(peso) / Number(altura *altura)
 
return(
    <div>
        O peso é {peso} e a altura é {altura}, e o IMC é {imc}.
    </div>
)

}   