import Ext_grid_cell_Text_Component from '../../../Ext/grid/cell/Text';

export default class Ext_grid_cell_Date_Component extends Ext_grid_cell_Text_Component {
//events
//configs

static XTYPE() {return 'datecell'}
static PROPERTIESOBJECT() { return {
"format":["string"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
]}

constructor() {
    super (
        Ext_grid_cell_Date_Component.METHODS(),
        Ext_grid_cell_Date_Component.XTYPE(),
        Ext_grid_cell_Date_Component.PROPERTIESOBJECT(),
        Ext_grid_cell_Date_Component.EVENTS()
    )
    this.XTYPE = Ext_grid_cell_Date_Component.XTYPE()
    this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_grid_cell_Date_Component.PROPERTIESOBJECT());
    this.METHODS = this.extendArray(this.METHODS, Ext_grid_cell_Date_Component.METHODS());
    this.EVENTS = this.extendArray(this.EVENTS, Ext_grid_cell_Date_Component.EVENTS());
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
    window.customElements.define('ext-datecell', Ext_grid_cell_Date_Component);
  });
})();

