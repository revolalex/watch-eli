import React from 'react';
import { withTranslation } from 'react-i18next';
import './css/TextAnimate.css'

class TextAnimate extends React.Component {
    render() {
        return (
            <div>
                <div className="containerT">
                    <div className="box">
                        <div className="title">
                            <span className="block"></span>
                            <h1>{this.props.textOne}<span></span></h1>
                        </div>
                        <div className="role">
                            <div className="block"></div>
                            <p>{this.props.textTwo}</p>
                        </div>
                    </div>
                </div>
            </div>

        )
    }


}
export default withTranslation()(TextAnimate);