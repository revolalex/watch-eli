import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import { Container } from 'react-bootstrap'


class PageTitle extends Component {
    state = {}
    render() {
        return (
            <Container>
                <h1 className="my-page-title">
                    {this.props.PageTitle}
                </h1>
            </Container>
        );
    }
}

export default withTranslation()(PageTitle);