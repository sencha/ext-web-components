import Ext_ux_rating_Picker_Component from './Ext/ux/rating/Picker'

export class ExtRatingComponent extends Ext_ux_rating_Picker_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-rating', ExtRatingComponent);
    });
})();
