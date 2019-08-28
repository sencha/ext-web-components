import Ext_dataview_pullrefresh_Bar_Component from './Ext/dataview/pullrefresh/Bar'

export class ExtPullrefreshbarComponent extends Ext_dataview_pullrefresh_Bar_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-pullrefreshbar', ExtPullrefreshbarComponent);
    });
})();
