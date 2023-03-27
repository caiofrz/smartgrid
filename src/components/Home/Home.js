import './Home_style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './Home/js/script.js'

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
                        <h1>Smart Grid</h1>
                        <h2>
                            ​​​​​​​​As Smart Grids são compostas de uma série de automações e tecnologias que objetivam, principalmente, conferir segurança, comodidade e sustentabilidade ao fornecimento de energia
                        </h2>
                    </div>
                </section>
                <section className="container-aboutme">
                    <br /><h2 className="titles">Conceito</h2>
                    <div className="content-aboutme">
                        <div className="imgme">
                            <img src="/19036-removebg-preview.png" alt="" /> 
                        </div>
                        <div className="aboutme">
                            <p>A descarbonização da economia e a inovação digital trazem consigo inovadoras redes de distribuição para os novos modelos de consumo elétrico. A bidirecionalidade, flexibilidade, digitalização e automatização das smart grids tornam possível um novo mapa interconectado que responde às necessidades dos usuários e produtores de energia. As redes elétricas inteligentes também garantem a incorporação de mais fontes de energias renováveis e se posicionam como um pilar vital para a transição energética.</p>
                        </div>
                    </div>
                    </section>
                    <section className="container-aboutme about2">
                    <div className="content-aboutme">
                        <div className="aboutme">
                            <p>O diferencial das Smart Grids é incorporar a transformação digital para facilitar a
                                bidirecionalidade de energia e informações. Isso é feito graças a um alto grau de
                                automação que responde a necessidades complexas e a potenciais incidentes em
                                poucos segundos</p>
                        </div>
                        <div className="imgme">
                            <img src="418-removebg-preview.png" alt="" />
                        </div>
                        
                    </div>
                    </section>
                    <div className="section-concept">
                        <h3>​​​​​​​​As Smart Grids são compostas de uma série de automações e tecnologias que objetivam, principalmente, conferir segurança, comodidade e sustentabilidade ao fornecimento de energia. Mas, como surgiu?</h3>
                        <div className="content-concept">
                            <div className="line">
                                <p>Instintivamente, durante o ano de 1888, Oliver Shallenberger criou um dispositivo
                                    que supria essa necessidade de medir o consumo de energia elétrica de um usuário
                                    sendo o primeiro medidor de energia elétrica ou electricity meter.<br /><br />
                                    Essa tecnologia surgiu de tentativas anteriores de uso do controle eletrônico,
                                    medição e monitoramento, com equipamentos que evoluíram de elementos
                                    eletromecânicos para equipamentos de tecnologia eletrônica analógica em estado
                                    sólido e circuitos digitais discretos.
                                </p> 
                            </div>
                        <div className="video">
                            <video autoplay muted loop id="player">
                                <source src="0325.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                    </div>
                <div className="content-section">
                    <div className="section">
                        <p>Ao garantir que todos os componentes da rede — de transformadores e linhas de 
                            energia a medidores elétricos domésticos, comerciais e industriais — tenham 
                            endereços IP e sejam capazes de usar a comunicação bidirecional, a empresa pode 
                            gerenciar a distribuição de forma mais eficiente. Além disso, pode ser proativa na 
                            manutenção e responder a interrupções mais rapidamente.
                            Outro componente importante da tecnologia de redes inteligentes é a automação. <br />Basicamente, estamos falando de:</p>
                        <ul>
                            <li>● comunicação automatizada integrada entre componentes da rede elétrica;</li>
                            <li>● tecnologias de detecção e medição;</li>
                            <li>● controles automatizados para distribuição e reparos;</li>
                            <li>● melhor gestão de dashboards e softwares de apoio à decisão</li>
                        </ul>    
                    </div>
                </div>
            </main>
            <footer>
                    <p>Copyright © clg energy- 2023 Todos os diteitos reservados</p>
            </footer>
        </div>
    );
}

export default Home;