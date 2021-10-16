import React, { Component } from 'react';
import '../css/FormSell.css'
import { withTranslation } from 'react-i18next';

import SellDetail from './SellDetail';
import TitreCard from '../Global/TitreCard';
import FormGlobal from '../Global/FormGloball';





class FormSell extends Component {



    render() {
        // const t = this.props.t

        return (
            <section className="contact">
                <TitreCard
                    titre={
                        `Actualisez votre collection`
                    }

                    cardText={
                        `
                        Vendez votre montre en trois clics:
                        nos spécialistes vous offrent une expertise gratuite, ainsi qu’ un conseil 
                        personnalisé afin de maximiser la valeur de votre montre. Notre objectif 
                        est de vous accompagner de manière transparente à travers un processus 
                        simple, rapide et sécurisé en trois étapes. `
                    }
                    cardTextPart2={`Remplissez le formulaire 
                    ci-dessous, un membre de notre équipe vous contactera dans un délai de 
                    48 heures afin d’établir un devis gratuit pour votre montre. `}
                />
                <div className="container-contact">
                    {/* container on left */}
                    <SellDetail />
                    {/* container on right */}
                    <div className="contactform card" style={{ margin: "12px" }}>
                        <FormGlobal wantModel={false} formFrom={"Sell"} />
                    </div>

                </div>
            </section>


        )
    }

}
export default withTranslation()(FormSell)