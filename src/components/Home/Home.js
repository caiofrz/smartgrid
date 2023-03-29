import './Home_style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from '../Navbar.js';
import Header from '../Header';

const Home = () => {
    return(
        <div>
            <Header />
            <main>
                <section className="module parallax parallax-1">
                    <div className="nav-barmenu">
                        <div className="barmenu">
                        <a href=" " className="logo">CLG Energia</a>
                        <div className="navbar">
                            <Navbar />
                        </div>
                        </div>
                    </div>
                    <div className="content-paralax">
                        <h1>Smart Grids</h1>
                        <h2>
                            ​​​​​​​​As Smart Grids são compostas de uma série de automações e tecnologias que objetivam, principalmente, conferir segurança, comodidade e sustentabilidade ao fornecimento de energia. Os novos modelos de consumo elétrico exigem redes de distribuição mais modernas e complexas.                
                        </h2>
                    </div>
                </section>
                <section className="container-aboutme">
                    <br/><h2 className="titles">O que são Smart Grids?</h2>
                    <div className="content-aboutme">
                        <div className="imgme">
                            <img src="/2010.jpg" alt=""/>
                        
                        </div>
                        <div className="aboutme">
                            <p>No atual cenário, a energia sai das geradoras e chega até às nossas casas, escritórios, escolas e afins.
                                Com a Smart Grid, a proposta é que o fluxo aconteça de maneira mais dinâmica e bidirecional, ou seja, o consumidor se torna capaz de fazer a sua contribuição com o sistema, gerando boa parte da energia injetada na rede elétrica.
                            </p>

                            <p>
                                Assim, o sistema como um todo pode trabalhar de uma maneira mais adequada, com o fluxo de energia controlado e se tornando mais sustentável.
                                Tudo isso se torna possível pois as Smarts Grids permitem a integração das ações de todos os usuários que são conectados a elas, desde os que geram energia até os que consomem e também os que fazem os dois.
                            </p>

                            <p>
                                Então, podemos concluir que toda proposta das Smarts Grids gira em torno de transformar a eletricidade em algo mais digital, para facilitar a troca de energia por meio de automações capazes de responder às necessidades complexas e alguns incidentes em apenas alguns segundos.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
    <div className="content-section">    
    </div>
    <footer>
         <p>Copyright © clg energy- 2023 Todos os diteitos reservados</p>
    </footer>
        </div>
    );
}

export default Home;