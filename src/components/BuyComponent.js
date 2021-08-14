
import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';


class BuyComponent extends Component {
    state = {}
    render() {
        return (
            <div>
                <p>Trouvez le modèle de vos rêves en visitant notre boutique en ligne via la plateforme sécurisée Chrono24 et achetez l’esprit tranquille.
                    Nous vendons uniquement des montres 100% certifiées authentiques et garanties minimum 12 mois.
                    Notre sélection de montres( link chrono24)</p>
            </div>
        );
    }
}

export default withTranslation()(BuyComponent);