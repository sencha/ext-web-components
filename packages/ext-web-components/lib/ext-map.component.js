import Ext_Map_Component from './Ext/Map'

export class ExtMapComponent extends Ext_Map_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-map', ExtMapComponent);
    });
})();
