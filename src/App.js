import Nav from "./components/Nav";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TopInfo from "./pages/TopInfo";
import Topinfo2 from "./pages/Topinfo2";
import Topinfo3 from "./pages/Topinfo3";

function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>

    <Route path="/" element={<Nav/>}></Route>
    <Route path="/info/:title" element={<TopInfo/>}></Route>
    <Route path="/info2/:title" element={<Topinfo2/>}></Route>
    <Route path="/info3/:title" element={<Topinfo3/>}></Route>
   </Routes>
   
   
   </BrowserRouter>
   </>
  );
}

export default App;
