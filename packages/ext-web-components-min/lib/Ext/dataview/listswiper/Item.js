import Ext_Container_Component from '../../../Ext/Container';

export default class Ext_dataview_listswiper_Item_Component extends Ext_Container_Component {
//events
//configs

static XTYPE() {return 'listswiperitem'}
static PROPERTIESOBJECT() { return {
"action":["any"],
"state":["any"],
"translationTarget":["Ext.dom.Element"],
"undo":["object"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
]}

constructor() {
    super (
        Ext_dataview_listswiper_Item_Component.METHODS(),
        Ext_dataview_listswiper_Item_Component.XTYPE(),
        Ext_dataview_listswiper_Item_Component.PROPERTIESOBJECT(),
        Ext_dataview_listswiper_Item_Component.EVENTS()
    )
    this.XTYPE = Ext_dataview_listswiper_Item_Component.XTYPE()
    this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_dataview_listswiper_Item_Component.PROPERTIESOBJECT());
    this.METHODS = this.extendArray(this.METHODS, Ext_dataview_listswiper_Item_Component.METHODS());
    this.EVENTS = this.extendArray(this.EVENTS, Ext_dataview_listswiper_Item_Component.EVENTS());
  }

connectedCallback() {
    super.connectedCallback()
}

attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
}

}
(function () {
  Ext.onReady(function() {
    window.customElements.define('ext-listswiperitem', Ext_dataview_listswiper_Item_Component);
  });
})();

