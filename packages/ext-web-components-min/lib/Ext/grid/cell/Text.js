import Ext_grid_cell_Base_Component from '../../../Ext/grid/cell/Base';

export default class Ext_grid_cell_Text_Component extends Ext_grid_cell_Base_Component {
//events
//configs

static XTYPE() {return 'textcell'}
static PROPERTIESOBJECT() { return {
"encodeHtml":["boolean"],
"rawValue":["string"],
"zeroValue":["string"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
]}

constructor() {
    super (
        Ext_grid_cell_Text_Component.METHODS(),
        Ext_grid_cell_Text_Component.XTYPE(),
        Ext_grid_cell_Text_Component.PROPERTIESOBJECT(),
        Ext_grid_cell_Text_Component.EVENTS()
    )
    this.XTYPE = Ext_grid_cell_Text_Component.XTYPE()
    this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_grid_cell_Text_Component.PROPERTIESOBJECT());
    this.METHODS = this.extendArray(this.METHODS, Ext_grid_cell_Text_Component.METHODS());
    this.EVENTS = this.extendArray(this.EVENTS, Ext_grid_cell_Text_Component.EVENTS());
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
    window.customElements.define('ext-textcell', Ext_grid_cell_Text_Component);
  });
})();

