import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
    render() {
        return (
            <div>
                Hello {this.props.name}
                <a onClick={this.loadNewComponent}>Load component</a>
            </div>
        );
    }
    loadNewComponent() {
        console.log('log load new component')
    }
}

ReactDOM.render(
    <App name="Taylor"/>,
    document.getElementById('app')
);