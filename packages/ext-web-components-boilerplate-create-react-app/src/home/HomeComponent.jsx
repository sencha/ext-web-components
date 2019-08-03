import data from './data.js';
import React from 'react';

export default class HomeComponent extends React.Component {
    constructor(props) {
        super(props);
        this.store = window.Ext.create('Ext.data.Store', {
            fields: ['name', 'email', 'phone', 'hoursTaken', 'hoursRemaining'],
            data,
        });

        this.toolbarReady = this.toolbarReady.bind(this);
        this.readyGrid = this.readyGrid.bind(window);
        this.onSearch = this.onSearch.bind(window);
    }

    readyGrid(event) {
        this.gridCmp = event.detail.cmp;
        const store = window.Ext.create('Ext.data.Store', {
            fields: ['name', 'email', 'phone', 'hoursTaken', 'hoursRemaining'],
            data,
        });

        this.gridCmp.setStore(store);
    }

    onSearch(context, newValue) {
        this.gridCmp.getStore().clearFilter();

        if (newValue.length) {
            const newValueStr = newValue.toLowerCase();

            this.gridCmp.getStore().filterBy((record) => {
                const { name, email, phone } = record.data;
                return name.toLowerCase().indexOf(newValueStr) > -1
            || email.toLowerCase().indexOf(newValueStr) > -1
            || phone.toLowerCase().indexOf(newValueStr) > -1;
            });
        }
    }

    toolbarReady(event) {
        this.toolbar = event.detail.cmp;
        this.toolbar.setItems({
            xtype: 'searchfield',
            ui: 'faded',
            placeholder: 'Search...',
            responsiveConfig: {
                'width <= 576': { flex: 1 },
                'width > 576': { flex: undefined }
            },
            listeners: {
                change: this.onSearch.bind(this)
            }
        });
    }

    render() {
        return (
            <ext-grid
                onready="home.readyGrid"
                height="100%"
            >
                <ext-toolbar docked="top" onready="home.toolbarReady">
                </ext-toolbar>
                <ext-column
                    text="Name"
                    flex="2"
                    dataIndex="name"
                    resizable="true"
                >
                </ext-column>
                <ext-column
                    text="Email"
                    flex="3"
                    dataIndex="email"
                    resizable="true"
                    responsiveConfig='{
                        "width <= 576": { "hidden": true },
                        "width > 576": { "hidden": false }
                    }'
                >
                </ext-column>
                <ext-column
                    text="Phone"
                    flex="2"
                    dataIndex="phone"
                    resizable="true"
                >
                </ext-column>
            </ext-grid>
        );
    }
}
