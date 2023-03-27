import 'bootstrap/dist/css/bootstrap.min.css';
import './Home/Home_style.css';

const Navbar = () => {
  return (
    <div>
      <div class="nav-barmenu">
        <div class="barmenu">
          <a href=" " class="logo">
            CLG Energia
          </a>
          <div class="navbar">
            <nav>
              <li>
                <a href="#info">Home</a>
              </li>
              <li>
                <a href="#projects">Conceito</a>
              </li>
              <li>
                <a href="#about">Aplicação</a>
              </li>
              <li>
                <a href="#contact">Funcionamento</a>
              </li>
              <li>
                <a href="#contact">Exemplos</a>
              </li>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
