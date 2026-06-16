export default function Exercicio10({ salario }) 
{
    let gratificacao = salario * (0.08) ;
    let salarioFinal = salario + gratificacao;

     return(
    <div>
         
      <p>Salário base:{salario.toFixed(2)}</p>
      <p>gatificação:{gratificacao.toFixed(2)}</p>
      <p>Salário final:{salarioFinal.toFixed(2)}</p>


    </div>
     );


}