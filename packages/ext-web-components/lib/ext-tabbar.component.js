import Ext_TabBar_Component from './Ext/TabBar'

export class ExtTabbarComponent extends Ext_TabBar_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-tabbar', ExtTabbarComponent);
    });
})();
