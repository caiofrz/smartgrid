import './Exemplos_style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from '../Navbar.js';
import Header from '../Header';

const Exemplos = () => {

    return(
        <div>
            <Header/>
            <main>
                <section className="module parallax parallax-1 ">
                    <div className="nav-barmenu">
                        <div className="barmenu">
                        <a href=" " className="logo">CLG Energia</a>
                        <div className="navbar">
                            <Navbar/>
                        </div>
                        </div>
                    </div>
                    <div className="content-paralax">
                        <h1>Exemplos</h1>
                        <h2>Em inúmeras áreas do país existem projetos-piloto de smart grid apoiados por 36 concessionárias de distribuição energética. Esses projetos estão espalhados nas regiões sul, sudeste, norte e nordeste.
                        </h2>              
                    </div>
                </section>
                <section className="container-aboutme">
                    <br/><h2 className="titles">Smart Grids no Brasil</h2>
                    <div className="content-aboutme">
                        <div className="imgme">
                            <img src="/2174611.jpg" alt=""/>
                        
                        </div>
                        <div className="aboutme">
                            <p>A armação dos Búzios, município da região dos lagos no Rio de Janeiro, recebeu tecnologias sustentáveis para um consumo de energia consciente, sem abrir mão da eficiência.

                                <br/>Esse conceito de Smart City já existe em outras cidades do mundo e vem conquistando espaço no Brasil, tendo como exemplo Búzios, um dos locais mais badalados por turistas. 
                                
                                <br/>A parte central desse projeto é justamente Smart Grid, com muitos domicílios já fazendo uso de medidores inteligentes, que geram informações aos moradores, possibilitando que eles organizem assim o seu consumo.
                            </p>
                        </div>
                    </div>
                </section>
                <section className="container-aboutme about2">
                    <br/><h2 className="titles">Projetos pilotos</h2>
                    <div className="content-aboutme">
                        <div className="aboutme">
                            <p>O projeto com maior número de consumidores, tendo no planejamento atual 400 mil deles, é o projeto-piloto realizado pela LIGHT na Área Metropolitana do Rio de Janeiro. Esse projeto contempla essencialmente a parte de medição, feito com a implantação de AMI e representa ainda os primeiros passos rumo a uma rede inteligente.

                                <br/>O segundo projeto em número de consumidores atingidos pela rede é a realizada pela Eletropaulo, com 84 mil consumidores, envolvendo os municípios de Barueri, Vargem Grande e Caucaia do Norte e também não está preparado para o armazenamento de energia, assim como o anterior. Uma lista com os demais projetos existentes no país está a seguir.
                            </p>
                        </div>
                        <div className="imgme">
                            <img src="/pessoa-usando-um-smartphone-em-sua-casa-automatizada.jpg" alt=""/>
                        </div>
                    
                    </div>
                </section>
                <div className="section-concept">
                    <h2 className="titles">Estados que utilizam Smart Grid</h2>
                    <div className="content-concept">
                    <div className="line">
                        
                            <p>Smart Grid Light (Light) - Rio de Janeiro/RJ: 400.000 consumidores.
                            <br/>Smart Grid (AES Eletropaulo) - Barueri e outras localidades/SP: 84.000 consumidores.
                            <br/>Cidade Inteligente Aquiraz (Coelce) - Fortaleza/CE: 19.000 consumidores.
                            <br/>Paraná Smart Grid (Copel) - Curitiba/PR: 10.000 consumidores.
                            <br/>Cidades do Futuro (Cemig) - Sete Lagoas/MG: 8.000 consumidores. 
                            <br/>Parintins (Eletrobras Amazonas Energia) - Parintins/AM: 5000 consumidores. 
                            <br/>Arquipélago de Fernando de Noronha (CELPE) - Ilha de Fernando de Noronha/PE: 1.000 consumidores. 
                            </p> 
                    </div>
                    <div className="video">
                        <img src="sodium_battery_animation_final.gif" type="gif" id="player"/> 
                    </div>
                    </div>
                </div>
            </main>
            <div className="content-section">    
            </div>
            <footer>
                <p>Copyright © clg energy- 2023 Todos os diteitos reservados</p>
            </footer>
        </div>
    );
}

export default Exemplos;