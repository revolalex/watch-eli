import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import '../css/CardHorizontal.css'

class CardHorizontal extends Component {
    render() {
        return (

            <div className="container">
                <div classNameName="row">
                    <div className="card col-md-12 p-3 my-horizontal-card">
                        <div className="row ">
                            <div className="col-md-8">
                                <div className="card-block">
                                    <h4 className="card-title text-right">Le vocabulaire horloger</h4>
                                    <br/>
                                    <p className="card-text text-justify">
                                        Pour apprécier et mieux connaître les montres, c'est toujours bien de connaître
                                        les mots qui apparaissent dans les différentes descriptions que vous pourrez
                                        lire ou entendre. C'est pourquoi nous vous conseillons cette série de vidéo. 
                                        Cette fois les mots expliqués sont aussi les plus basiques :
                                        boîtier, couronne, boucle, aiguille, corne, verre, fond, lunettes...
                                        Avec quelques anecdotes!
                                        Il faut échanger, discuter, apprendre pour approfondir ses connaissances.
                                    </p>
                                    <div className="my-flex-column">
                                        <a href="https://www.hautehorlogerie.org/fr/watches-and-culture/encyclopedie/lexique-de-lhorlogerie/">
                                            Fédération de Haute Horlogerie
                                        </a>
                                        <a href="https://www.fhs.swiss/berner/?l=fr">
                                            Dictiionnaire de l'horlogerie
                                        </a>
                                        <a href="https://www.lecalibre.com/lexique-horloger/">
                                            Le Calibre
                                        </a>
                                    </div>

                                    {/* <a href="/" className="btn btn-success">read more...</a> */}
                                </div>
                            </div>
                            <div className="col-md-4">
                                <iframe className="video-toutube"
                                    src="https://www.youtube.com/embed/b58ViTgZQNI"
                                    title="YouTube video player" frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen>
                                </iframe>
                            </div>
                        </div>
                    </div>


                    <div className="card col-md-12 p-3 my-horizontal-card">
                        <div className="row ">
                            <div className="col-md-4">
                                <img className="w-100" alt="montre" src="https://pbs.twimg.com/media/Ewx1m3jWgAsEjOU.jpg" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-block">
                                    <h4 className="card-title">Montre d'aviation</h4>
                                    <br/>
                                    <p className="card-text text-justify">
                                        L’aviation représente une avancée technologique des plus spectaculaires dans
                                        l’histoire de l’humanité, initiée par des personnes à la fois inventives et
                                        passionnées. Il est donc logique que l’univers de l’horlogerie et celui de
                                        l’aviation ne fassent souvent plus qu’un à l’aube du XXIe siècle.
                                        Les campagnes de publicité qui ont poussé sur le thème de l’aviation ne sont
                                        pas étrangères à ce phénomène. Autre explication, une meilleure connaissance de
                                        l’histoire de l’horlogerie. Parmi les différents types connus de montres,
                                        la montre d’aviateur est peut-être celle qui témoigne de l’histoire la plus fascinante.
                                    </p>
                                    <div className="my-flex-column">
                                        <a href="https://www.chrono24.fr/magazine/la-grande-histoire-des-montres-daviateur-p_18424/">
                                            Article Chrono24
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <div className="card col-md-12 p-3 my-horizontal-card">
                        <div className="row ">
                            <div className="col-md-8">
                                <div className="card-block">
                                    <h4 className="card-title text-right">Se tenir informer</h4>
                                    <br/>
                                    <p className="card-text text-justify">
                                        Découvrez les dernières actualités du monde de l'horlogerie, des produits, des nouveautés, des événements...
                                    </p>
                                    <div className="my-flex-column">
                                        <a href="https://www.lemonde.fr/m-horlogerie-joaillerie/">
                                            Le Monde
                                        </a>
                                        <br />
                                        <a href="https://www.lefigaro.fr/horlogerie">
                                            Le Figaro
                                        </a>
                                        <br />
                                        <a href="https://www.lepoint.fr/montres/">
                                            Le Point
                                        </a>
                                        <br />
                                        <a href="https://www.vogue.fr/dossier/horlogerie">
                                            Vogue
                                        </a>
                                        <br />
                                        <a href="https://www.lexpress.fr/tendances/montre/actualite-des-montres-de-luxe-et-de-l-horlogerie_2096289.html">
                                            L'Express
                                        </a>
                                        <br />
                                        <a href="https://journal.hautehorlogerie.org/fr/category/actualites/">
                                            Haute Horlogerie
                                        </a>
                                        <br />
                                        <a href="https://www.watches-news.com/fr/">
                                            Watches new
                                        </a>
                                        <br />
                                        <a href="https://serielimitee.lesechos.fr/horlogerie-et-joaillerie/horlogerie/">
                                            Les Echos
                                        </a>
                                        <br />

                                    </div>

                                 
                                </div>
                            </div>
                            <div className="col-md-4">
                                <img className="w-100"
                                    alt="montre" src={imgUrl} />
                            </div>
                        </div>
                    </div> */}


                </div>
            </div>
        );
    }
}

export default withTranslation()(CardHorizontal);