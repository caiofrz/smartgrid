import './InicialPage_style.css';

const InicialPage = () =>{
    return(
        <div>
            <section className="home">
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
                                    <div className="button">
                                        <a href="./Home/Home.js" className="read-more">
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