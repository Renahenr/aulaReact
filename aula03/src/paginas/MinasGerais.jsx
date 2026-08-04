import { Link } from "react-router-dom";

export default function MinasGerais()
{
    return(
        <div>
          <h1>☂ Estado de Minas Gerais ☂</h1>

          <div className="conteudo">
          <img src="/MG.png" />
          <p>
          O estado de Minas Gerais está localizado na região Sudeste do Brasil e é conhecido por sua rica história, patrimônio cultural e belezas naturais. Destaca-se pela produção de café, leite e minérios, além de possuir uma economia diversificada. Sua capital, Belo Horizonte, é um importante centro econômico e cultural. Minas Gerais também é famosa por suas cidades históricas, sua culinária típica e sua contribuição para a história e o desenvolvimento do Brasil.

          </p>
          <p>
            <Link to="/">↺ Voltar</Link> 
            </p>
            
            
            </div>
        </div>
    );
}