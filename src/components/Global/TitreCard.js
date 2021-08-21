import { Component } from "react";
import { Card } from "react-bootstrap";

/**
 * @props : titre, sousTitre, cardText
 */
class TitreCard extends Component {
    state = {}
    render() {
        return (
            <Card >
                <div className="title-div">
                    <div>
                        <h1>{this.props.titre}</h1>
                        <h5>{this.props.sousTitre}</h5>
                        <p>
                            {this.props.cardText}
                        </p>
                    </div>

                </div>
            </Card>
        );
    }
}

export default TitreCard;