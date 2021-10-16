
import React, { Component } from 'react';
import TooltipPerso from "../Global/TooltipPerso.js"
import { Col, Row } from 'react-bootstrap';
import hologer from '../../img/serv.jpeg'

class ServiceCard extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div classNameName="row">
                        <div className="card col-md-12 p-3 my-horizontal-card">
                            <div className="row">

                                <div className="col-md-4">
                                    <img className="w-100" alt="horloger" src={hologer} />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-block">
                                        <h4 className="card-title">WMC l’expertise horlogère à votre service</h4>
                                        <div className="toto">
                                            <br />
                                            <p className="card-text text-justify">
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
                                            <Row>
                                                <Col>

                                                    <p>
                                                        Réglage montre mécanique
                                                        &nbsp;<TooltipPerso
                                                            abrevation={<i className="fal fa-info-circle" />}
                                                            traduction={`Le réglage d’une montre permet d’ajuster la précision du mouvement.
                                                            Nos horlogers certifiés possèdent les compétences qui leur permettent de régler 
                                                            tous types de garde-temps. Chaque ouverture de montre mécanique suit scrupuleusement 
                                                            les instructions des fabricants telle que le nettoyage et le contrôle de l’étanchéité. 
                                                            Ainsi votre pièce fonctionnera comme au premier jour.
                                                            `}
                                                        />
                                                    </p>
                                                    <p>
                                                        Révision
                                                        &nbsp;<TooltipPerso
                                                            abrevation={<i className="fal fa-info-circle" />}
                                                            traduction={`Il est recommandé par les fabricants de faire réviser sa 
                                                            montre tous les 5 à 7 ans selon les modèles. Nos maîtres horlogers 
                                                            procéderont à une expertise de votre montre, établiront un diagnostic 
                                                            personnalisé, un délai d’intervention puis vous transmettrons un devis 
                                                            gratuit dans les 5 jours ouvrés après réception de cette dernière.`}
                                                        />
                                                    </p>

                                                    <p>
                                                        Autre
                                                        &nbsp;<TooltipPerso
                                                            abrevation={<i className="fal fa-info-circle" />}
                                                            traduction={`Quelle que soit votre question, WMC vous répond de manière personnalisée afin de vous accompagner dans votre projet. Contactez-nous pour obtenir la liste complète de nos services.`}
                                                        />
                                                    </p>



                                                </Col>
                                                <Col>
                                                    <p>
                                                        Remplacement de la pile
                                                        &nbsp;<TooltipPerso
                                                            abrevation={<i className="fal fa-info-circle" />}
                                                            traduction={`Lorsque votre montre à quartz s'arrête, cela signifie sûrement qu’il est 
                                                            nécessaire de remplacer la pile. Les normes fixées par les fabricants sont scrupuleusement 
                                                            respectées par nos maîtres horlogers.Le nettoyage du mouvement, le remplacement de la pile 
                                                            et le  contrôle de l'étanchéité font partie du protocole WMC. 
                                                            Ainsi votre montre fonctionnera comme au premier jour.`}
                                                        />
                                                    </p>

                                                    <p>
                                                        Polissage
                                                        &nbsp;<TooltipPerso
                                                            abrevation={<i className="fal fa-info-circle" />}
                                                            traduction={`WMC propose également des options purement esthétiques tel que le polissage et le ravivage.`}
                                                        />
                                                    </p>

                                                </Col>
                                            </Row>
                                        </div>
                                        <br />
                                        <a href="/contact-service" className="btn btn-success" style={{ backgroundColor: "var(--vert-color)" }}>Nous contacter</a>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ServiceCard;