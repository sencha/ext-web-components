import Ext_dataview_pullrefresh_Item_Component from '../../../Ext/dataview/pullrefresh/Item';

export default class Ext_dataview_pullrefresh_Spinner_Component extends Ext_dataview_pullrefresh_Item_Component {
//events
//configs

static XTYPE() {return 'pullrefreshspinner'}
static PROPERTIESOBJECT() { return {
}}
static EVENTS() { return [
]}
static METHODS() { return [
]}

constructor() {
    super (
        Ext_dataview_pullrefresh_Spinner_Component.METHODS(),
        Ext_dataview_pullrefresh_Spinner_Component.XTYPE(),
        Ext_dataview_pullrefresh_Spinner_Component.PROPERTIESOBJECT(),
        Ext_dataview_pullrefresh_Spinner_Component.EVENTS()
    )
    this.XTYPE = Ext_dataview_pullrefresh_Spinner_Component.XTYPE()
    this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_dataview_pullrefresh_Spinner_Component.PROPERTIESOBJECT());
    this.METHODS = this.extendArray(this.METHODS, Ext_dataview_pullrefresh_Spinner_Component.METHODS());
    this.EVENTS = this.extendArray(this.EVENTS, Ext_dataview_pullrefresh_Spinner_Component.EVENTS());
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
    window.customElements.define('ext-pullrefreshspinner', Ext_dataview_pullrefresh_Spinner_Component);
  });
})();

