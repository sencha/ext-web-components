import Ext_draw_Surface_Component from './Ext/draw/Surface'

export class ExtSurfaceComponent extends Ext_draw_Surface_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-surface', ExtSurfaceComponent);
    });
})();
