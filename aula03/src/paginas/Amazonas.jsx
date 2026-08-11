import { Link } from "react-router-dom";

export default function Amazonas()
{
    return(
        <div>
          <h1>☀ Estado de Amazonas ☀</h1>

          <div className="conteudo">
            
            <img src="/AM.png" />

            <p>
            O Amazonas (AM) tem como capital Manaus e é o maior estado brasileiro em extensão territorial. Grande parte de seu território é coberta pela Floresta Amazônica, que possui uma enorme biodiversidade. O estado é conhecido pelos grandes rios, sendo o Rio Amazonas um dos principais símbolos da região. Manaus é um importante centro econômico e industrial, principalmente por causa da Zona Franca de Manaus. O turismo também possui grande importância, com atrações relacionadas à floresta, aos rios e à cultura local. A população amazonense possui forte ligação com os rios e com a natureza.


            </p>

            <p>
              <Link to="/">↺ Voltar</Link> 
            </p>

          </div>
        </div>
    );
}