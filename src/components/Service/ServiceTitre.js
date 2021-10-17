
import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import { Card } from "react-bootstrap";
import '../css/TitreCard.css'


class ServiceTitre extends Component {
    state = {}
    render() {
        // const t = this.props.t
        return (
            <div>
                <Card >
                    <div className="title-div">
                        <div>
                            <h1 className="my-police-titre">
                                Service
                            </h1>
                            <br/>
                            <h4 style={{ color: "#616A6B", fontStyle: "italic" }}>Calibre | Caliber | キャリバー | 机芯号 :</h4>
                            <h4 style={{ color: "#616A6B", fontStyle: "italic" }} className="card-text text-justify">
                                Un calibre désigne un type de mouvement en horlogerie.
                                À l'origine, il était synonyme d'une dimension, souvent exprimée en
                                lignes, pour un mouvement d'horlogerie. Il existe des calibres pour
                                homme ou dame, mécaniques, automatiques, quartz ou hybrides.
                                Le calibre de la marque du fabricant en désigne la provenance.

                            </h4>
                            <br />
                        </div>

                    </div>
                </Card>
            </div>
        );
    }
}

export default withTranslation()(ServiceTitre);