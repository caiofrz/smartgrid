import "bootstrap/dist/css/bootstrap.min.css";
import "./Home/Home_style.css";

import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div>
      <nav>
        <li
          onClick={() => {
            navigate("/components/Home/Home");
          }}
        >
          <a href=" ">Home</a>
        </li>
        <li
          onClick={() => {
            navigate("/components/Conceito/Conceito");
          }}
        >
          <a href=" ">Conceito</a>
        </li>
        <li
          onClick={() => {
            navigate("/components/Aplicacao/Aplicacao");
          }}
        >
          <a href=" ">Aplicação</a>
        </li>
        <li
          onClick={() => {
            navigate("/components/Funcionamento/Funcionamento");
          }}
        >
          <a href=" ">Funcionamento</a>
        </li>
        <li
          onClick={() => {
            navigate("/components/Exemplos/Exemplos");
          }}
        >
          <a href=" ">Exemplos</a>
        </li>
      </nav>
    </div>
  );
};

export default Navbar;
