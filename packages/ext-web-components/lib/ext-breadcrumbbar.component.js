import Ext_BreadcrumbBar_Component from './Ext/BreadcrumbBar'

export class ExtBreadcrumbbarComponent extends Ext_BreadcrumbBar_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-breadcrumbbar', ExtBreadcrumbbarComponent);
    });
})();
