import Ext_Map_Component from './Ext/Map'

export class ExtGoogle_mapComponent extends Ext_Map_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-google-map', ExtGoogle_mapComponent);
    });
})();
