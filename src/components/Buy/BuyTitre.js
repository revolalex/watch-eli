
import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import TitreCard from '../Global/TitreCard';


class BuyTitre extends Component {
    state = {}
    render() {
        // const t = this.props.t
        return (
            <div>
                    <TitreCard
                        titre={"Trouvez la montre de vos rêves"}
                        cardText={
                            "WMC vous propose une sélection de montres neuves ou d’occasion pour le plus grand bonheur des amateurs d’horlogerie et des collectionneurs passionnés. Toutes nos pièces “certified pre-owned” sont contrôlées, authentifiées et certifiées par des experts horlogers afin de garantir une qualité irréprochable."
                        }
                        cardTextPart2={
                            "Nos montres sont 100% certifiées d’origine et garanties 18mois*"
                        }

                    />
            </div>
        );
    }
}

export default withTranslation()(BuyTitre);