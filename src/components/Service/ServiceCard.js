import servCard from '../../img/serv.jpeg'
import React, { Component } from 'react';
import TooltipPerso from "../Global/TooltipPerso.js"

class ServiceCard extends Component {
    render() {
        return <div>
            <div className="container">
                <div classNameName="row">
                    <div className="card col-md-12 p-3 my-horizontal-card">
                        <div className="row ">
                            <div className="col-md-4">
                                <img className="w-100" alt="horloger" src={servCard} />
                            </div>
                            <div className="col-md-8">
                                <div className="card-block">
                                    <h4 className="card-title">Service</h4>
                                    <div className="toto">
                                        <p className="card-text text-justify">
                                            La fascination d’une montre mécanique réside souvent dans sa vie intérieure complexe. Pour s’assurer que votre montre fournira les services attendus pendant de nombreuses années et qu’elle fonctionnera avec précision,des séances de soin et de maintenance minutieuses sont indispensables. Profitez pour ce faire de notre service horloger: faites vérifier votre montre tous les deux ans par un spécialiste certifié et faites-la réviser entièrement tous lescinq ans.
                                        </p>
                                        <br />
                                        <p className="card-text text-justify">
                                            {/* Nous travaillons main dans la main avec les plus grandes manufactures
                      horlogères afin de vous proposer un service de réparation et de
                      révision et entretien à la hauteur de vos attentes.
                      Montres mécaniques à remontage manuel, montres automatiques,
                      modèles à complications ou simples échanges de piles,
                      nos techniciens horlogers assurent la maintenance de tous types de montres. */}
                                            Montres mécaniques à remontage manuel ou automatique, modèles à complications
                                            ou simple échange de pile, nos maîtres horlogers assurent la maintenance de tous
                                            types de montres dans le plus grand détail afin de vous proposer un service de
                                            réparation, révision et entretien à la hauteur de vos attentes.
                                            Afin de garantir le bon fonctionnement de votre montre WMC s’engage à en assurer
                                            régulièrement le service complet, comme conseillé par les fabricants.
                                            Nos horlogers s’appliquent soigneusement à  réparer, restaurer, ou
                                            remettre à neuf vos pièces préférées en respectant les standards imposés par
                                            l’industrie de la haute horlogerie.
                                            N'hésitez pas à nous contacter pour obtenir la liste complète de nos services.
                                        </p>
                                        <br />
                                        <p>
                                            Remplacement de la pile
                                            &nbsp;<TooltipPerso
                                                abrevation={<i className="fal fa-info-circle" />}
                                                traduction={"Si l’aiguille des secondes de votre montre électronique ne saute plus que toutes les quatre secondes en mode EOL ou si votre montre est déjà arrêtée, il est temps de faire remplacer la pile par un détaillant spécialisé. Les étapes de travail suivantes complètent chez WMC le remplacement de la pile: Nos experts ouvrent le boîtier avec des outils spéciaux. Ils nettoient d’abord les contacts électroniques. Ils remplacent la pile, puis referment le boîtier à l’aide de l’outil approprié, conformément aux instructions du fabricant. Les spécialistes mesurent ensuite la consommation d’énergie et effectuent un contrôle d’étanchéité selon les normes du fabricant. Ils nettoient ensuite le boîtier et le bracelet, puis vérifient et ajustent le bracelet et le fermoir, si nécessaire."}
                                            />
                                        </p>
                                        <br />
                                        <p>
                                            Réglage d'une montre mécanique
                                            &nbsp;<TooltipPerso
                                                abrevation={<i className="fal fa-info-circle" />}
                                                traduction={"Si votre montre avance ou retarde malgré des entretiens réguliers, nos conseillers ou nos horlogers s’en occuperont de manière compétente. Ils détermineront si la précision de marche peut être optimisée par un réglage. Les étapes suivantes complètent chez WMC le réglage d’une montre mécanique: Nos collaborateurs vérifient tout d’abord toutes les fonctions du mouvement. Ils ouvrent le boîtier et règlent la précision avec des outils spéciaux. Ils referment ensuite le boîtier à l’aide de l’outil approprié, conformément aux instructions du fabricant. Ils effectuent en outre un contrôle d’étanchéité et nettoient le boîtier et le bracelet. Ils vérifient également le bracelet et le fermoir et les ajustent en conséquence. Enfin, ils vérifient la précision de marche sur un simulateur pendant 48 à 72 heure"}
                                            />
                                        </p>
                                        <br />
                                        <p>
                                        Révision
                                            &nbsp;<TooltipPerso
                                                abrevation={<i className="fal fa-info-circle" />}
                                                traduction={"Et faites réviser entièrement votre montre mécanique tous les quatre à six ans. Une révision tous les six à huit ans suffit pour les montres électroniques, sauf si vous remarquez que la pile n’a plus d’autonomie que pour environ six mois. Dans ce cas, il faut faire réviser rapidement votre montre. L’éventuelle remise à neuf minutieuse de l’extérieur de votre montre par des termineurs en habillage horloger diplômés est également incluse dans notre service horloger spécial. Après la révision, votre montre brille ainsi à nouveau d’un nouvel éclat."}
                                            />
                                        </p>
                                        <br/>
                                        <p>
                                            Autre
                                            &nbsp;<TooltipPerso
                                                abrevation={<i className="fal fa-info-circle" />}
                                                traduction={"Peut importe votre besoins WMC vous propose une solution adaptée et personalisée"}
                                            />
                                        </p>
                                    </div>

                                    {/* <a href="/" className="btn btn-success">read more...</a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>;
    }
}

export default ServiceCard;