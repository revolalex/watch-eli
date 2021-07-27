import React from 'react';
import { withTranslation } from 'react-i18next';
import './TextAnimate.css'

class TextAnimate extends React.Component {
    render() {
        return (
            <div>
                <div class="containerT">
                    <div class="box">
                        <div class="title">
                            <span class="block"></span>
                            <h1>{this.props.textOne}<span></span></h1>
                        </div>
                        <div class="role">
                            <div class="block"></div>
                            <p>{this.props.textTwo}</p>
                        </div>
                    </div>
                </div>
            </div>

        )
    }


}
export default withTranslation()(TextAnimate);