import Ext_Video_Component from './Ext/Video'

export class ExtVideoComponent extends Ext_Video_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-video', ExtVideoComponent);
    });
})();
