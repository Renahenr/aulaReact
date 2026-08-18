import { Link } from "react-router-dom";

export default function Pernambuco()

{
    return(
        <div>
          <h1>☀ Estado de Pernambuco ☀</h1>

          <div className="conteudo">
            
            <img src="/PE.png" />

            <p>Pernambuco é um estado de grande importância histórica, econômica e cultural para o Nordeste. Possui áreas de litoral, Agreste e Sertão, apresentando diferentes tipos de clima e vegetação. Sua economia é bastante diversificada e inclui indústria, agricultura, comércio, serviços, turismo e tecnologia. O estado é famoso por suas manifestações culturais, como o frevo, o maracatu e as festas de carnaval. Também possui importantes destinos turísticos, como Porto de Galinhas e o arquipélago de Fernando de Noronha. Sua capital é Recife, um dos principais centros urbanos e econômicos do Nordeste.</p>

           
<p>
            <Link to="/">↺ Voltar</Link> 
            </p>


            </div>
   </div>
        );
        }