import Ext_dataview_pullrefresh_Item_Component from '../../../Ext/dataview/pullrefresh/Item';

export default class Ext_dataview_pullrefresh_Bar_Component extends Ext_dataview_pullrefresh_Item_Component {
//events
//configs

static XTYPE() {return 'pullrefreshbar'}
static PROPERTIESOBJECT() { return {
"lastUpdatedDateFormat":["string"],
"lastUpdatedText":["string"],
"loadedText":["string"],
"loadingText":["string"],
"mode":["'message'","'spinner'"],
"pullText":["string"],
"releaseText":["string"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
]}

constructor() {
    super (
        Ext_dataview_pullrefresh_Bar_Component.METHODS(),
        Ext_dataview_pullrefresh_Bar_Component.XTYPE(),
        Ext_dataview_pullrefresh_Bar_Component.PROPERTIESOBJECT(),
        Ext_dataview_pullrefresh_Bar_Component.EVENTS()
    )
    this.XTYPE = Ext_dataview_pullrefresh_Bar_Component.XTYPE()
    this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_dataview_pullrefresh_Bar_Component.PROPERTIESOBJECT());
    this.METHODS = this.extendArray(this.METHODS, Ext_dataview_pullrefresh_Bar_Component.METHODS());
    this.EVENTS = this.extendArray(this.EVENTS, Ext_dataview_pullrefresh_Bar_Component.EVENTS());
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
    window.customElements.define('ext-pullrefreshbar', Ext_dataview_pullrefresh_Bar_Component);
  });
})();

