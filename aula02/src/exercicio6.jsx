export default function Exercicio6({ capital, taxa, tempo }) {
    const jurosSimples =
      capital * (1 + (taxa / 100) * tempo);
  
    const jurosCompostos =
      capital * Math.pow(1 + taxa / 100, tempo);
  
    return (
      <div>
        <p>
          Capital Inicial = R$ {capital.toFixed(2)}
        </p>
  
        <p>
          Montante (Juros Simples) = R${" "}
          {jurosSimples.toFixed(2)}
        </p>
  
        <p>
          Montante (Juros Compostos) = R${" "}
          {jurosCompostos.toFixed(2)}
        </p>
      </div>
    );
  }
  
 