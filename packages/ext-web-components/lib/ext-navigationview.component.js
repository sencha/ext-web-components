import Ext_NavigationView_Component from './Ext/NavigationView'

export class ExtNavigationviewComponent extends Ext_NavigationView_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-navigationview', ExtNavigationviewComponent);
    });
})();
