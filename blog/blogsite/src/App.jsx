import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AnaSayfa from "./pages/AnaSayfa";
import Yazilar from "./pages/Yazilar";
import YaziDetay from "./pages/YaziDetay";
import Hakkimda from "./pages/Hakkimda";
import Iletisim from "./pages/Iletisim";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<AnaSayfa />} />
        <Route path="/yazilar" element={<Yazilar />} />
        <Route path="/yazi/:id" element={<YaziDetay />} />
        <Route path="/hakkimda" element={<Hakkimda />} />
        <Route path="/iletisim" element={<Iletisim />} />
      </Routes>
    </Router>

  );
}
<Route path="/yazi/:id" element={<YaziDetay />} />

export default App;
