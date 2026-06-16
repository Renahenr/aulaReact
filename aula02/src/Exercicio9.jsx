 export default function Exercicio9({ vendas, salario }) {

    let comissao = vendas * 0.06;
    let salarioFinal = salario + comissao;
  
    return (
      <div>
        <h2>Exercício 9 - Comissão de Vendas</h2>
  
        <p>Total de vendas: R$ {vendas.toFixed(2)}</p>
        <p>Salário base: R$ {salario.toFixed(2)}</p>
        <p>Comissão (6%): R$ {comissao.toFixed(2)}</p>
        <p>Salário final: R$ {salarioFinal.toFixed(2)}</p>

      </div>

    );
  }
  
  