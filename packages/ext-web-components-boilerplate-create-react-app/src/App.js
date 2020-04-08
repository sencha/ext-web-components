import { Switch, Route, Router } from 'react-router';

import React from 'react';
import Home from './home/HomeComponent.jsx';
import About from './about/About.jsx';
import { createBrowserHistory } from 'history';

import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.collapsed = true;
        this.navTreeRoot = {
            hash: 'all',
            iconCls: 'x-fa fa-home',
            leaf: false,
            text: 'All',
            children: [
                { text: 'Home', hash:'/home', iconCls: 'x-fa fa-home', leaf: true },
                { text: 'About', hash: '/about', iconCls: 'x-fa fa-info', leaf: true },
            ]
        };
        this.treeStore = window.Ext.create('Ext.data.TreeStore', {
            rootVisible: true,
            root: this.navTreeRoot
        });

        this.history = createBrowserHistory();
        window.app = this;
    }

    readyNavTreelist = (event) => {
        this.navTreelistCmp = event.detail.cmp;
        this.navTreelistCmp.setStore(this.treeStore);
        let hash = window.location.pathname.toLowerCase();
        if (hash === '') {
            hash = '/home';
        }
        const node = this.navTreelistCmp.getStore().findNode('hash', hash, false, false, false, false);
        this.navTreelistCmp.setSelection(node);

    }

    toggleAppMenu = () => {
        let collapsed = this.navTreePanelCmp.getCollapsed();

        if (collapsed) {
            collapsed = false;
        } else {
            collapsed = true;
        }
        this.navTreePanelCmp.setCollapsed(collapsed);
    }


    navTreePanelReady = (event) => {
        this.navTreePanelCmp = event.detail.cmp;
    }

    navTreelistSelectionChange = (event) => {
        const record = event.detail.record.data.text;

        if(window.Ext.os.is.phone){
            this.navTreePanelCmp.setCollapsed(this.collapsed);
        }
        this.history.push(`/${record}`);
    }

    getTreeView = () => {
        let result = (
            <ext-panel
                docked="left"
                border="true"
                shadow="true"
                scrollable="y"
                resizable='{"edges": "east", "dynamic": "true"}'
                header="false"
                collapsible='{"direction": "left"}'
                width="200px"
                zIndex="2"
                onready="app.navTreePanelReady"

            >
                <ext-treelist
                    ui="nav"
                    expanderFirst="false"
                    expanderOnly="false"
                    onready="app.readyNavTreelist"
                    onselectionchange="app.navTreelistSelectionChange"
                    responsiveConfig='{
                        "medium": {
                            micro: true,
                            width: 56
                        },
                        "large": {
                            "micro": false,
                            "width": 200
                        }
                    }'>
                </ext-treelist>
            </ext-panel>
        );

        if (window.Ext.platformTags.phone) {
            result = (
                <ext-panel
                    docked="left"
                    border="true"
                    shadow="true"
                    scrollable="y"
                    resizable='{"edges": "east", "dynamic": "true"}'
                    header="false"
                    width="200px"
                    zIndex="2"
                    collapsible='{"direction": "left"}'
                    collapsed='true'
                    onready="app.navTreePanelReady"

                >
                    <ext-treelist
                        ui="nav"
                        expanderFirst="false"
                        expanderOnly="false"
                        onready="app.readyNavTreelist"
                        onselectionchange="app.navTreelistSelectionChange"
                        width="250">
                    </ext-treelist>
                </ext-panel>
            );
        }

        return result;
    }

    render() {
        const treeView = this.getTreeView();

        return (
            <Router history={this.history}>
                <ext-panel layout="fit" viewport="true" bodyPadding="0">
                    <ext-titlebar docked="top" weight="10" title="Sencha ExtWebComponents React 7.1 Boilerplate">
                        {window.Ext.platformTags.phone && (
                            <ext-button iconCls="x-fa fa-bars" onTap="app.toggleAppMenu"></ext-button>
                        )}
                    </ext-titlebar>
                    {treeView}
                    <div style={{width: window.innerWidth + 'px', height: window.innerHeight + 'px' }}>
                        <Switch>
                            <Route path='/About' render={(props) => {
                                window.about = new About({ ...props }); return window.about.render();
                            }} />
                            <Route path='/Home' render={(props) => {
                                window.home = new Home({ ...props }); return window.home.render();
                            }} />
                            <Route exact path='/' render={(props) => {
                                window.home = new Home({ ...props }); return window.home.render();
                            }} />
                        </Switch>
                    </div>
                </ext-panel>
            </Router>
        );
    }
}

export default App;
