import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import Card from 'react-bootstrap/Card'
import CartierImg from '../img/cartier.jpeg'


class Trade extends Component {
    state = {}
    render() {
        return (
            <Card>
                <Card.Img variant="top" src={CartierImg} />
                <Card.Body>
                    <Card.Title>Card title that wraps to a new line</Card.Title>
                    <Card.Text>
                        This is a longer card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                    </Card.Text>
                </Card.Body>
            </Card>

        );
    }
}

export default withTranslation()(Trade);