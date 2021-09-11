import React, { Component } from 'react';
import '../css/BrandContainer.css'

class BrandContainer extends Component {
    render() {
        return (
            <div className="container brand-container">
                <div className="row">
                    <div className="col-sm-6 col-md-3" onClick={this.props.onBrandLogoClick} alt="Rolex">
                        <a href="https://www.rolex.com/">
                            <div className="thumbnail">
                                <div className="image rolex" alt="Rolex"></div>
                            </div>
                        </a>
                    </div>
                    <div className="col-sm-6 col-md-3" onClick={this.props.onBrandLogoClick}>
                        <a href="https://www.audemarspiguet.com/">
                            <div className="thumbnail">
                                <div className="image audemars" alt="Audemars Piguet"></div>
                            </div>
                        </a>
                    </div>
                    <div className="col-sm-6 col-md-3" onClick={this.props.onBrandLogoClick}>
                        <a href="https://www.fpjourne.com/">
                            <div className="thumbnail">
                                <div className="image journe" alt="F.P.journe"></div>
                            </div>
                        </a>
                    </div>
                    <div className="col-sm-6 col-md-3" onClick={this.props.onBrandLogoClick}>
                        <a href="https://www.breitling.com/">
                            <div className="thumbnail">
                                <div className="image breitling" alt="Breitling"></div>
                            </div>
                        </a>
                    </div>
                    <div className="col-sm-6 col-md-3" onClick={this.props.onBrandLogoClick}>
                        <a href="https://www.cartier.com/">
                            <div className="thumbnail">
                                <div className="image cartier" alt="Cartier"></div>
                            </div>
                        </a>
                    </div>
                    <div className="col-sm-6 col-md-3" onClick={this.props.onBrandLogoClick}>
                        <a href="https://www.jaeger-lecoultre.com/">
                            <div className="thumbnail">
                                <div className="image jaeger" alt="Jaeger LeCoultre"></div>
                            </div>
                        </a>
                    </div>
                    <div className="col-sm-6 col-md-3" onClick={this.props.onBrandLogoClick}>
                        <a href="https://www.longines.com/">
                            <div className="thumbnail">
                                <div className="image longines" alt="Longines"></div>
                            </div>
                        </a>
                    </div>
                    <div className="col-sm-6 col-md-3" onClick={this.props.onBrandLogoClick}>
                        <a href="https://www.patek.com/">
                            <div className="thumbnail">
                                <div className="image patek" alt="Patek Philippe"></div>
                            </div>
                        </a>
                    </div>
                    <div className="col-sm-6 col-md-3" onClick={this.props.onBrandLogoClick}>
                        <a href="https://www.tudorwatch.com/">
                            <div className="thumbnail">
                                <div className="image tudor" alt="Tudor"></div>
                            </div>
                        </a>
                    </div>
                    <div className="col-sm-6 col-md-3" onClick={this.props.onBrandLogoClick}>
                        <a href="https://www.vacheron-constantin.com/">
                            <div className="thumbnail">
                                <div className="image vacheron" alt="Vacheron Constantin"></div>
                            </div>
                        </a>
                    </div>
                    <div className="col-sm-6 col-md-3" onClick={this.props.onBrandLogoClick}>
                        <a href="https://www.tagheuer.com/">
                            <div className="thumbnail">
                                <div className="image tag-heuer" alt="Tag Heuer"></div>
                            </div>
                        </a>
                    </div>
                    <div className="col-sm-6 col-md-3" onClick={this.props.onBrandLogoClick}>
                        <a href="https://www.alange-soehne.com/">
                            <div className="thumbnail">
                                <div className="image sohne" alt="A.Lange & Sohne"></div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default BrandContainer;