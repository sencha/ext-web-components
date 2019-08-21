import Ext_dataview_pullrefresh_Spinner_Component from './Ext/dataview/pullrefresh/Spinner'

export class ExtPullrefreshspinnerComponent extends Ext_dataview_pullrefresh_Spinner_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-pullrefreshspinner', ExtPullrefreshspinnerComponent);
    });
})();
