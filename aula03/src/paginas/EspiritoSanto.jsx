import { Link } from "react-router-dom";

export default function EspiritoSanto()
{
    return(
        <div>
          <h1> ☎ Estado do Espírito Santo ☎</h1>

          
          <div className="conteudo">
          <img src="/ES.png" />
          <p> O estado do Espírito Santo está localizado na região Sudeste do Brasil e é conhecido por suas belas praias, montanhas e rica diversidade natural. Sua capital, Vitória, é um importante centro econômico e portuário. A economia do estado se destaca pela produção de café, rochas ornamentais, petróleo e gás natural, além do comércio e da indústria. O Espírito Santo também é reconhecido por sua cultura, gastronomia e pela importância de seus portos para o país.
</p>

<p>
            <Link to="/">↺ Voltar</Link> 
            </p>

            </div>
        </div>
    );
}