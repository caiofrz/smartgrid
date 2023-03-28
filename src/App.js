import Aplicacao from './components/Aplicacao/Aplicacao';
import Conceito from './components/Conceito/Conceito';
import Exemplos from './components/Exemplos/Exemplos';
import Funcionamento from './components/Funcionamento/Funcionamento';
import Home from './components/Home/Home';
import InicialPage from './components/InicialPage/InicialPage';

import {BrowserRouter as Router} from 'react-router-dom';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">

      <Router>
        <Routes>

          <Route path="/" element={<InicialPage />} />
          <Route path="/components/Home/Home" element={<Home />} />
          <Route path="/components/Conceito/Conceito" element={<Conceito />} />
          <Route path="/components/Funcionamento/Funcionamento" element={<Funcionamento />} />
          <Route path="/components/Aplicacao/Aplicacao" element={<Aplicacao />} />
          <Route path="/components/Exemplos/Exemplos" element={<Exemplos />} />

        </Routes>
      </Router>

    </div>
  );
}

export default App;
