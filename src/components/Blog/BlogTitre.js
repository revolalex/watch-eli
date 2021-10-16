
import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import TitreCard from '../Global/TitreCard';


class BlogTitre extends Component {
    state = {}
    render() {
        // const t = this.props.t
        return (
            <div>
                    <TitreCard
                        titre={"Blog"}
                        // sousTitre={"Actualitées, savoir, vidéo"}
                        // cardText={
                        //     "Idéal pour vous renseigner avant votre achat de montre de luxe homme ou femme ou bien ou tout simplement pour découvrir les dernières montres de luxe, l’équipe de WMC souhaite en toute simplicité via ce blog montres partager sa passion des belles montres, qu’elles soient neuves, d’occasion, vintage… Retrouvez nous également sur les principaux réseaux sociaux et n’oubliez pas de vous abonner à la newlestter, pour les amateurs de montres de luxe de caractère !"
                        // }
                    />
            </div>
        );
    }
}

export default withTranslation()(BlogTitre);