
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
                            "Watches Paris vous propose une sélection de montres neuves ou d’occasion pour le plus grand bonheur des passionnés d’horlogerie mais aussi des collectionneurs. Toutes nos pièces “certified pre-owned” sont authentifiées, certifiées et restaurées par des experts horlogers afin de garantir une qualité irréprochable. Nos montres 100% certifiées d’origine."
                        }

                    />
            </div>
        );
    }
}

export default withTranslation()(BuyTitre);