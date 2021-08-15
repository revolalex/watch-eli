import { Component } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import breitlingLogo from "../../img/logo/breitling.png"
import hubloLogo from '../../img/logo/hublot.png'
import omega from '../../img/logo2/omega.png'
import rolex from '../../img/logo2/rolex.png'
import cartier from "../../img/logo2/cartier.png"
import tagHeuerIcon from "../../img/logo2/tag-heuer.png"
import Longines from "../../img/logo2/Longines-logo-2021.png"
import iwc from "../../img/logo2/iwc.png"
import jaeger from '../../img/logo2/jaeger.png'
import ap from '../../img/logo2/ap.png'
import bellRoss from '../../img/logo2/Bellross_logo.svg.png'
import patek from '../../img/logo2/Patek_Philippe_logo.png'

class BrandLogo extends Component {

    render() {
        return (
            <Container>
                <Row>
                    <Col xs={6} md={4}>
                        <Image className="brand-logo" thumbnail src={rolex} onClick={this.props.onBrandLogoClick} alt="Rolex" />
                    </Col>
                    <Col xs={6} md={4}>
                        <Image className="brand-logo" thumbnail src={omega} onClick={this.props.onBrandLogoClick} alt='Omega' />
                    </Col>
                    <Col xs={6} md={4}>
                        <Image className="brand-logo" thumbnail src={hubloLogo} onClick={this.props.onBrandLogoClick} alt="Hublot" />
                    </Col>
                    <Col xs={6} md={4}>
                        <Image className="brand-logo" thumbnail src={tagHeuerIcon} onClick={this.props.onBrandLogoClick}alt='Tag Heuer' />
                    </Col>
                    <Col xs={6} md={4} >
                        <Image className="brand-logo" thumbnail src={breitlingLogo} onClick={this.props.onBrandLogoClick} alt="Breitling" />
                    </Col>
                    <Col xs={6} md={4}>
                        <Image className="brand-logo" thumbnail src={iwc} onClick={this.props.onBrandLogoClick} alt='Iwc' />
                    </Col>
                    <Col xs={6} md={4}>
                        <Image className="brand-logo" thumbnail src={cartier} onClick={this.props.onBrandLogoClick} alt="Cartier" />
                    </Col>
                    <Col xs={6} md={4}>
                        <Image className="brand-logo" thumbnail src={Longines} onClick={this.props.onBrandLogoClick}alt="Longines" />
                    </Col>
                    <Col xs={6} md={4}>
                        <Image className="brand-logo" thumbnail src={bellRoss} onClick={this.props.onBrandLogoClick}alt="Bell Ross" />
                    </Col>
                    <Col xs={6} md={4}>
                        <Image className="brand-logo" thumbnail src={ap} onClick={this.props.onBrandLogoClick} alt='Audemars Piguet' />
                    </Col>
                    <Col xs={6} md={4}>
                        <Image className="brand-logo" thumbnail src={jaeger} onClick={this.props.onBrandLogoClick} alt='Jaeger Lecoultre' />
                    </Col>
                    <Col xs={6} md={4}>
                        <Image className="brand-logo" thumbnail src={patek} onClick={this.props.onBrandLogoClick} alt="Patek Phillip" />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default BrandLogo;