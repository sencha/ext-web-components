import Ext_chart_SpaceFillingChart_Component from './Ext/chart/SpaceFillingChart'

export class ExtSpacefillingComponent extends Ext_chart_SpaceFillingChart_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-spacefilling', ExtSpacefillingComponent);
    });
})();
