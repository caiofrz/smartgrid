import './InicialPage_style.css';

import { useNavigate } from "react-router-dom";

const InicialPage = () => {

    const navigate = useNavigate();

    return(
        <div onLoad={alert('Seja bem vindo(a)! Clique em "Saiba Mais" e aprenda tudo sobre Smart Grid!')}>
            <section className="home" >
                <video autoPlay muted loop className="player">
                    <source src="/Pexels Videos 1085656.mp4" type="video/mp4"/>
                </video>
                <div className="container">
                    <div className="content">                    
                            <div className="headline">
                                <div className="content-headline">
                                    <h2>Smart Grid</h2>
                                    <p>
                                    As Smarts Grids (Redes Inteligentes) são redes elétricas que podem integrar de forma inteligente e dinâmica as ações de todos os usuários conectados a elas — aqueles que geram energia, aqueles que a consomem ou aqueles que fazem ambas as coisas — a fim de fornecer eletricidade de forma eficiente, sustentável, econômica e segura.  
                                    </p>
                                    <div className="button" onClick={() => {
                                        navigate("/components/Home/Home")
                                    }}>
                                        <a href=" " className="read-more">
                                            Saiba Mais
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>
        </div>       
    );
}

export default InicialPage;