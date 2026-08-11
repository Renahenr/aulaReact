import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./paginas/Home";
import SaoPaulo from "./paginas/SaoPaulo";
import MinasGerais from "./paginas/MinasGerais";
import RioJaneiro from "./paginas/RioJaneiro";
import EspiritoSanto from "./paginas/EspiritoSanto";
import SantaCatarina from "./paginas/SantaCatarina";
import Parana from "./paginas/Parana";
import RioGrandeSul from "./paginas/RioGrandeSul";
import Goias from "./paginas/Goias";
import MatoGrosso from "./paginas/MatoGrosso";
import MatoGrossoSul from "./paginas/MataGrossoSul";
import DistritoFederal from "./paginas/DistritoFederal";
import Acre from "./paginas/Acre";
import Amapa from "./paginas/Amapa";
import Amazonas from "./paginas/Amazonas";
import Para from "./paginas/Para";

export default function App()
{
  return (
     <BrowserRouter>
       <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/estados/sp" element={<SaoPaulo />} />
        <Route path="/estados/mg" element={<MinasGerais />} />
        <Route path="/estados/rj" element={<RioJaneiro />} />
        <Route path="/estados/es" element={<EspiritoSanto />} />

        <Route path="/estados/pr" element={<Parana />} />
        <Route path="/estados/sc" element={<SantaCatarina />} />
        <Route path="/estados/rs" element={<RioGrandeSul />} />

        <Route path="/estados/go" element={<Goias />} />
        <Route path="/estados/mt" element={<MatoGrosso />} />
        <Route path="/estados/ms" element={<MatoGrossoSul />} />
        <Route path="/estados/df" element={<DistritoFederal />} />

        <Route path="/estados/ac" element={<Acre />} />
        <Route path="/estados/ap" element={<Amapa />} />
        <Route path="/estados/am" element={<Amazonas />} />
        <Route path="/estados/pa" element={<Para />} />


  

        


        
       </Routes>
     </BrowserRouter>
  );
}