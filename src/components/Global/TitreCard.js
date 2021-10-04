import { Component } from "react";
import { Card } from "react-bootstrap";
import '../css/TitreCard.css'

/**
 * @props : titre, sousTitre, cardText
 */
class TitreCard extends Component {
    state = {}
    render() {
        return (
            <Card >
                <div className="title-div">
                    <div className="title-setting">
                        <h1 className="my-police-titre">{this.props.titre}</h1>
                        <br/>
                        <h5>{this.props.sousTitre}</h5>
                        <p>
                            {this.props.cardText}
                        </p>
                        <p>
                            {this.props.cardText2}
                        </p>
                    </div>

                </div>
            </Card>
        );
    }
}

export default TitreCard;