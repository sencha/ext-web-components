import Ext_grid_rowedit_Gap_Component from './Ext/grid/rowedit/Gap'

export class ExtRoweditorgapComponent extends Ext_grid_rowedit_Gap_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-roweditorgap', ExtRoweditorgapComponent);
    });
})();
