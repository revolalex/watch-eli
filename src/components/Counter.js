import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
    }

    counter = (minimum, maximum) => {
        for (let count = minimum; count <= maximum; count++) {
            setTimeout(() => {
                this.setState({ count })
            }, 1000);
        }
    }

    componentDidMount() {
        this.counter(0, this.props.to)
    }

    render() {
        return (
            <div>
                <h4 id='stats-number'>{this.state.count}</h4>
            </div>
        );
    }
}
export default Counter