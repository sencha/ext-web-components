import Ext_container_Container_Component from './Ext/container/Container'

export class ExtContainerComponent extends Ext_container_Container_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-container', ExtContainerComponent);
    });
})();
