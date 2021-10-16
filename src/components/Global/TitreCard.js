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
                        <h4>
                            {this.props.cardText}
                        </h4>
                        <h4>
                            {this.props.cardTextPart2}
                        </h4>
                        <br/>
                        <h3 style={{fontWeight:"bold", color:"black !impoortant",}} className="my-link-titre-card">
                            <a className="titre-link" href="/sell"> {this.props.cardText2}</a>
                        </h3>
                        <br/>
                    </div>

                </div>
            </Card>
        );
    }
}

export default TitreCard;