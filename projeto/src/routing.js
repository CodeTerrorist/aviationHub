import { BrowserRouter, Routes, Route} from "react-router-dom";
import MassAndBalanceCalculator from "./app/components/mass_Balance/MassBalance";
import Aeronaves from "./app/components/aeronaves/Aeronaves";


function AppR(){
  
  return(
    <BrowserRouter>
     <Routes>
      <Route path='MassBalance' element={<MassAndBalanceCalculator/>}/>
     </Routes>
    </BrowserRouter>

  )

}
export default AppR;