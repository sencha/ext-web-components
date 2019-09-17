import Ext_form_Hidden_Component from './Ext/form/Hidden'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtHiddenfieldComponent extends Ext_form_Hidden_Component {
    constructor() {
        super ()
        this.xtype = 'hiddenfield'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-hiddenfield', ExtHiddenfieldComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-hiddenfield', HTMLParsedElement.withParsedCallback(ExtHiddenfieldComponent))
