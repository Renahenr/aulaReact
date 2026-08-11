import { Link } from "react-router-dom";

export default function SantaCatarina()
{
    return(
        <div>
        <h1> ♞ Estado de Santa Catarina ♞</h1>
        <div className="conteudo">
        <img src="/SC.png" />

          <p>
          Santa Catarina tem como capital Florianópolis e é conhecida principalmente por suas praias, montanhas e cidades com forte influência da imigração europeia. O estado possui paisagens muito variadas, desde o litoral até regiões serranas onde as temperaturas podem ficar bastante baixas no inverno. O turismo é uma atividade importante, especialmente nas cidades litorâneas, que recebem muitos visitantes durante o verão. A economia também se destaca pela indústria, pela agricultura, pela pesca e pela produção de alimentos. Santa Catarina apresenta uma grande diversidade cultural, com tradições trazidas principalmente por imigrantes alemães, italianos, portugueses e outros povos. Festas tradicionais, culinária e arquitetura são exemplos dessa mistura cultural.
          </p>

          <p>
            <Link to="/">↺ Voltar</Link> 
            </p>

        </div>
  </div>




    );
}