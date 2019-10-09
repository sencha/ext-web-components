import React, { Component, Fragment } from 'react';

import { connect } from 'react-redux';

import '@sencha/ext-web-components-all/dist/ext-panel.component';

const mapStateToDummy = state => {
    //text: 'connected dummy'
    return { ...state }
};
const Dummy2 = ({ text = 'not connected dummy' }) => <span>{text}</span>;

class Dummy extends Component {
    render() {
        return (
            <span>hi</span>
        )
    }
}


const ConnectedDummy = connect(mapStateToDummy)(Dummy2);

class App extends Component {
    render() {
        return (
            <Fragment>
                <div>before ewc</div>
                <ConnectedDummy />

                    <ext-panel title="i m a panel">
                      <ConnectedDummy />
                    </ext-panel>

                <div>after ewc</div>
            </Fragment>
        );
    }
}

const mapStateToApp = state => ({
    store: state.store,
    text: state.hello
});

//export default renderWhenReady(connect(mapStateToApp)(App));
//export default App
export default connect(mapStateToApp)(App);
