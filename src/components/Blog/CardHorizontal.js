import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import { arrayOfImages } from '../../utils/WatchImgUrl';
import '../css/CardHorizontal.css'

class CardHorizontal extends Component {
    render() {
        var randomItem = arrayOfImages[Math.floor(Math.random() * arrayOfImages.length)];
        const imgUrl = randomItem
        return (

            <div className="container">
                <div classNameName="row">
                    <div className="card col-md-12 p-3 my-horizontal-card">
                        <div className="row ">
                            <div className="col-md-4 my-center-vertical">
                                <iframe className="video-toutube"
                                    src="https://www.youtube.com/embed/zIBiG_B35-o"
                                    title="YouTube video player" frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen>
                                </iframe>
                            </div>
                            <div className="col-md-8">
                                <div className="card-block">
                                    <h4 className="card-title">Comment débuter une collection de montres</h4>
                                    <br/>
                                    <p className="card-text text-justify">
                                        De simple amateur d’horlogerie à véritable collectionneur de montres,
                                        il y a un cap qu’il n’est pas si simple de franchir. Par quoi commencer ?
                                        Quelles marques choisir ? Quels modèles faut-il sélectionner ?
                                        Est-ce forcément très coûteux ? Faut-il privilégier
                                        la passion ou bien la notion de placement financier ?
                                        Consulter un dictionnaire a toujours du bon.
                                        Ainsi, chercher la définition du mot “collection” dans
                                        le Larousse conduit à ceci : « Réunion d’objets rassemblés
                                        et classés pour leur valeur documentaire, esthétique, pour leur prix,
                                        leur rareté, etc. » Voici une phrase qui correspond tout à fait aux
                                        multiples aspects que peut recouvrir une collection horlogère.
                                        Mais d’abord, quand devient-on collectionneur ?
                                        Posséder une, deux ou trois belles montres fait de vous un “amateur”.
                                        Ajouter quelques pièces, lire la presse spécialisée, consulter
                                        régulièrement WatchMarketClub vous permettra d’accéder au rang d’amateur éclairé.
                                        Vous possédez plus d’une dizaine de montres ? Vous projetez d’en achetez d’autres,
                                        quitte à en revendre certaines ? Alors vous êtes collectionneur.
                                        Mais quelle que soit la catégorie dans laquelle vous vous rangez,
                                        un seul mot compte vraiment : passion. Etre “passionné de montres”
                                        est finalement la seule définition à retenir.
                                    </p>
                                    {/* <a href="/" className="btn btn-success">read more...</a> */}
                                </div>
                            </div>
                        </div>
                    </div>

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
                                        <br/>
                                        <a href="https://www.fhs.swiss/berner/?l=fr">
                                            Dictiionnaire de l'horlogerie
                                        </a>
                                        <br/>
                                        <a href="https://www.lecalibre.com/lexique-horloger/">
                                            Le Calibre
                                        </a>
                                        <br/>
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
                                        <br />
                                        <a href="https://magmontres.fr/top-montres-de-pilotes-davion/">
                                            Top 10 des montres d'aviateurs
                                        </a>
                                        <br />
                                        <a href="https://www.lepoint.fr/montres/zenith/une-passion-qui-engendre-des-modeles-de-legende-29-05-2012-1991722_2875.php">
                                            Montres de légends
                                        </a>
                                        <br />
                                        <a href="https://journal.hautehorlogerie.org/fr/laventure-de-la-montre-pilote-i/">
                                            Montres de pilotes part I
                                        </a>
                                        <br />
                                        <a href="https://journal.hautehorlogerie.org/fr/laventure-de-la-montre-pilote-ii/">
                                            Montres de pilotes part II
                                        </a>
                                    </div>
                                    {/* <a href="/" className="btn btn-success">read more...</a> */}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card col-md-12 p-3 my-horizontal-card">
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

                                    {/* <a href="/" className="btn btn-success">read more...</a> */}
                                </div>
                            </div>
                            <div className="col-md-4">
                                <img className="w-100"
                                    alt="montre" src={imgUrl} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withTranslation()(CardHorizontal);