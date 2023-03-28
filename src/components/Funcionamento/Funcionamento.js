import './Funcionamento_style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from '../Navbar.js';
import Header from '../Header';


const Funcionamento = () => {

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
                        <h1>Funcionamento</h1>
                        <h2>
                            Atualmente, os problemas na distribuição de energia são relatados pelos próprios consumidores, levando dias até serem realmente sanados
                        </h2>
                    </div>
                </section>
                <section className="container-aboutme">
                    <br/><h2 className="titles">Sobre</h2>
                    <div className="content-aboutme">
                        <div className="imgme">
                            <img src="/tecnico-especialista.jpg" alt=""/>
                        </div>
                        <div className="aboutme">
                            <p>Com os sensores, a rede será capaz de identificar qualquer alteração em seu sistema 
                                e tratá-la automaticamente, sem precisar aguardar pela informação do consumidor.
                                Tais alterações tornaram a rede mais robusta, promovendo maior segurança, 
                                agilidade e qualidade no serviço oferecido.
                                <br/><br/>Com a utilização de medidores inteligentes, o consumidor será capaz de melhor 
                                controlar, de forma consciente, o seu próprio consumo de energia elétrica. Será 
                                possível acompanhar diariamente seu gasto com energia, sem precisar aguardar a 
                                conta no final do mês. Além disso, será possível informar sobre a qualidade da 
                                energia oferecida, bem como utilizar diferentes tarifas dependendo do horário do dia, 
                                com o objetivo de notificar o consumidor sobre quais horários o custo da produção é 
                                maior ou menor. Dessa forma, o consumidor será capaz de optar por utilizar a energia 
                                em horários mais baratos, diminuindo o fluxo nos horários de pico.
                            </p>
                        </div>
                    </div>
                </section>
                <section className="container-aboutme">
                    <h2 className="titles">As Smart Grid são compostas de uma série de automações e tecnologias que objetivam, principalmente, conferir segurança, comodidade e sustentabilidade ao fornecimento de energia. Confira algumas delas:</h2>
                    <div className="content-aboutme">
                        <div className="aboutme">
                            <h3>
                                BIDIRECIONALIDADE
                            </h3>
                            <p>
                                Smart Grids possuem a capacidade bidirecional de fluxo energético. Ou seja, é uma rede que pode tanto levar energia a um estabelecimento, quanto distribuir a energia gerada pelas placas solares ou outros geradores desseestabelecimento. Para isso, a energia deve passar pelo smart meter, um medidor bidirecional. Se um prédio, por exemplo, tiver placas solares que produzem mais do que ele consome, o excedente é redistribuído em outras localidades.
                            </p>
                        </div>
                    </div>
                    <div className="content-aboutme">
                        <div className="aboutme">
                            <h3>
                                ARMAZENAMENTO
                            </h3>
                            <p>
                                Historicamente, os picos de consumo de energia ocorrem à noite. Contudo, os horários de maior geração são durante o dia. Um grande diferencial das Smart Grids é o banco de energia, que possibilita o armazenamento de grandes cargas de energia por algumas horas. 
                            </p>
                        </div>
                    </div>
                    <div className="content-aboutme">
                        <div className="aboutme">
                            <h3>
                                SELF-HEALING
                            </h3>
                            <p>
                                O Self Healing é um sistema que identifica e corrige, em poucos segundos, possíveis falhas no fornecimento de energia, geralmente causadas por árvores, tempestades ou animais. No momento em que uma falha é detectada, o trecho da rede é isolado, e alternativas são ativadas para fazer a energia chegar ao cliente  afetado por outras rotas.
                            </p>
                        </div>
                    </div>
                </section>
                <section className="container-aboutme about2">
                    <br/><br/><h2 className="titles">Funcionalidades</h2>
                    <div className="content-aboutme">
                        <div className="aboutme">
                            <p>
                                Toda essa informação oferecida pelos medidores eletrônicos poderá ser interpretada 
                                por um sistema de gerenciamento de energia, possibilitando uma fácil visualização 
                                dos dados aos consumidores. Esse sistema auxiliará na economia de energia através 
                                de funcionalidades como:<br/>
                                <br/>1. Exibir o quanto cada equipamento consome de energia.
                                <br/>2. Monitorar as variações de preço e possibilitar que certos equipamentos sejam 
                                ligados automaticamente quando as tarifas forem menores.
                                <br/>3. Desligar automaticamente certos equipamentos quando houver fluxo intenso 
                                com chances de queda de energia.
                                <br/>4. Com a integração a diferentes tipos de software seria possível, por exemplo, 
                                que o ar condicionado ou aquecedor fossem ligados automaticamente quando 
                                o usuário estivesse indo para casa.
                            </p>
                        </div>
                        <div className="imgme">
                            <img src="/SE-Vehicle-to-Grid-1.gif" alt=""/>
                        </div>
                    </div>
                </section>
                <div className="content-section">
                </div>
            </main>
            <footer>
                <p>Copyright © clg energy- 2023 Todos os diteitos reservados</p>
            </footer>
        </div>
    );
}

export default Funcionamento;