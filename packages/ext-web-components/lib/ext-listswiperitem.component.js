import Ext_dataview_listswiper_Item_Component from './Ext/dataview/listswiper/Item'

export class ExtListswiperitemComponent extends Ext_dataview_listswiper_Item_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-listswiperitem', ExtListswiperitemComponent);
    });
})();
