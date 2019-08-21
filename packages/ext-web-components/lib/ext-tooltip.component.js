import Ext_tip_ToolTip_Component from './Ext/tip/ToolTip'

export class ExtTooltipComponent extends Ext_tip_ToolTip_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-tooltip', ExtTooltipComponent);
    });
})();
