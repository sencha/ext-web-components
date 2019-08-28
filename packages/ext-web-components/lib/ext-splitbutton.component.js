import Ext_SplitButton_Component from './Ext/SplitButton'

export class ExtSplitbuttonComponent extends Ext_SplitButton_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-splitbutton', ExtSplitbuttonComponent);
    });
})();
