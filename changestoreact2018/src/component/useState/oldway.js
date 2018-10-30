import React, { Component } from 'react'


export default class Oldway extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "Andrew",
            surname: "Han"
        }

        this.handleNameChange.this.handleNameChange.bind(this);
    }

    handleNameChange(e) {
        this.setState({
            name: e.target.value
        })
    }

    handleSurnameChange = (e) => {
        this.setState({
            surname: e.target.value
        })
    }

    render() {
        return (
            <section>
                <div>
                    <input
                        value={this.state.name}
                        onChnage={this.handleNameChange}
                    />
                </div>

                <div>
                    <input
                        value={this.state.surname}
                        onChnage={this.handleSurnameChange}
                    />
                </div>
            </section>
        )
    }
}
