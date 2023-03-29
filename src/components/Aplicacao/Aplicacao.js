import './Aplicacao_style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from '../Navbar.js';
import Header from '../Header';

const Aplicacao = () => {

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
                        <h1>Aplicação</h1>
                        <h2>
                            Uma empresa pode gerenciar a distribuição de forma muito mais eficiente ao garantir que todos os componentes da rede, incluindo medidores elétricos, transformadores e linhas de energia tenham endereços de IP, sendo capazes de utilizar comunicação bidirecional.
                        </h2>
                    </div>
                </section>
                <section className="container-aboutme">
                    <br/><h2 className="titles">Casas inteligentes e automação de construções</h2>
                    <div className="content-aboutme">
                        <div className="imgme">
                            <img src="/2174611.jpg" alt="" />
                        </div>
                        <div className="aboutme">
                            <p>Essa categoria de aplicação inclui Home Automation (HBES - home and building electronic systems) e Building Automation and Control Systems (BACS). O termo “building automation and control” refere-se ao equipamento, software e serviços necessários para controle automático, monitoramento, otimização, operação e gestão usados no gerenciamento da operação de serviços em construções.

                                <br/>Em um sistema HBES/BACS as construções se tornam um elemento ativo na infraestrutura da rede, ao contrário do consumidor imprevisível de energia de redes convencionais. Nesse sistema o índice de demanda pode ser controlado segundo a necessidade da rede, como no caso da falha de fornecimento.
                                
                                <br/>O controle e monitoramento não se restringe apenas ao consumo, mas também aos recursos locais, como geradores solares, carros elétricos e reservatórios térmicos. Dessa forma, segundo necessidade da rede, a construção pode atuar como geradora de energia, de forma a estabilizar a rede</p>
                        
                        </div>
                    </div>
                </section>
                <section className="container-aboutme about2">
                    <br/><h2 className="titles">Armazenamento elétrico</h2>
                    <div className="content-aboutme">
                        <div className="aboutme">
                            <p>Atualmente a rede elétrica funciona com a política de just-in-time, ou seja, a energia que é produzida é aquela que será consumida. Esse princípio é utilizado principalmente pois é muito caro ou ineficiente armazenar energia.

                                <br/>Devido a baixa taxa de armazenamento, o sistema de produção e distribuição é construído de forma a atender a taxa máxima de demanda, ao invés da taxa média, resultando em sistemas subaproveitados e caros. O armazenamento geraria um acréscimo de confiabilidade, uso mais eficiente da geração de energia e melhor suporte a fontes instáveis como energia solar e eólica. Portanto esse elemento é de grande importância para smart grids.
                                
                                <br/>Existem dois tipos principais de armazenamento elétrico, o armazenamento real, que pode introduzir eletricidade na rede, e energy buffers, que fazem parte de sistemas de resposta à demanda, como reservatórios de hidrogênio e de calor. Em ambos os casos, o armazenamento é distribuído e acionado quando necessário.</p>
                        </div>
                        <div className="imgme">
                            <img src="/413-removebg-preview.png" alt=""/>
                        </div>
                    </div>
                </section>
                <div className="section-concept">
                    <h2 className="titles">Resposta à demanda</h2>
                    <div className="content-concept">
                    <div className="line">
                        
                            <p>Com a disponibilidade de informações de demanda em tempo real e com dados passados que podem ser usados para construção de um mapa estatístico de demanda, a rede elétrica inteligente é capaz de se ajustar para atender a demanda.
                                <br/>Para isso a rede inteligente conta com as seguintes estratégias :

                                <br/><br/>Utilizar os sistemas de armazenamento de forma a suprir a rede com maior disponibilidade de energia e atender a demanda.
                                <br/><br/> Utilizar os equipamentos inteligentes conectados a rede, de forma a diminuir ativamente a demanda.
                                <br/><br/>Os equipamentos ligados a rede inteligente, podem utilizar as informações disponibilizadas, como preço da energia, demanda atual e futura. Dessa forma, um aparelho pode reduzir o próprio consumo quando o preço estiver alto - um ar condicionado que aumenta a temperatura quando for muito caro resfriar o ambiente, por exemplo. 
                            </p> 
                    </div>
                    <div className="video">
                            <img src="/fmor.gif" type="gif" id="player" /> 
                    </div>
                    </div>
                </div>
                <div className="content-section">
                </div>
            </main>
            <footer>
                <p>Copyright © clg energy- 2023 Todos os diteitos reservados</p>
            </footer>
        </div>
    );
}

export default Aplicacao;