import Ext_dataview_ItemHeader_Component from '../../Ext/dataview/ItemHeader';

export default class Ext_grid_RowHeader_Component extends Ext_dataview_ItemHeader_Component {
//events
//configs

static XTYPE() {return 'rowheader'}
static PROPERTIESOBJECT() { return {
}}
static EVENTS() { return [
]}
static METHODS() { return [
]}

constructor() {
    super (
        Ext_grid_RowHeader_Component.METHODS(),
        Ext_grid_RowHeader_Component.XTYPE(),
        Ext_grid_RowHeader_Component.PROPERTIESOBJECT(),
        Ext_grid_RowHeader_Component.EVENTS()
    )
    this.XTYPE = Ext_grid_RowHeader_Component.XTYPE()
    this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_grid_RowHeader_Component.PROPERTIESOBJECT());
    this.METHODS = this.extendArray(this.METHODS, Ext_grid_RowHeader_Component.METHODS());
    this.EVENTS = this.extendArray(this.EVENTS, Ext_grid_RowHeader_Component.EVENTS());
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
    window.customElements.define('ext-rowheader', Ext_grid_RowHeader_Component);
  });
})();

