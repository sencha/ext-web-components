import Ext_Media_Component from './Ext/Media'

export class ExtMediaComponent extends Ext_Media_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-media', ExtMediaComponent);
    });
})();
