function Exercicio4({ tipo, base, altura }) {
    let area = 0;
  
    if (tipo === 'triangulo') {
      area = (base * altura) / 2;
    } else if (tipo === 'retangulo') {
      area = base * altura;
    } else {
      area = 0;
    }
  
    return (
      <div>
        <h1>
          A área do {tipo} com base {base} e altura {altura} é {area}.
        </h1>
      </div>
    );
  }
  
 
  