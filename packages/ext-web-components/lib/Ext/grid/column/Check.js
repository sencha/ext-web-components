import Ext_grid_column_Column_Component from '../../../Ext/grid/column/Column';

export default class Ext_grid_column_Check_Component extends Ext_grid_column_Column_Component {
//events
get onbeforecheckchange(){return this.getAttribute('onbeforecheckchange')};set onbeforecheckchange(onbeforecheckchange){this.setAttribute('onbeforecheckchange',onbeforecheckchange)}
get oncheckchange(){return this.getAttribute('oncheckchange')};set oncheckchange(oncheckchange){this.setAttribute('oncheckchange',oncheckchange)}
//configs

static XTYPE() {return 'checkcolumn'}
static PROPERTIESOBJECT() { return {
"align":["string"],
"cell":["object"],
"headerCheckbox":["boolean"],
"headerCheckboxAlign":["'top'","'right'","'bottom'","'left'"],
"ignoreExport":["boolean"],
"stopSelection":["boolean"],
"text":["string"],
}}
static EVENTS() { return [
{name:'beforecheckchange',parameters:'undefined,rowIndex,checked,record,e'},
{name:'checkchange',parameters:'undefined,rowIndex,checked,record,e'},
]}
static METHODS() { return [
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_grid_column_Check_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_grid_column_Check_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            Ext_grid_column_Check_Component.METHODS(),
            Ext_grid_column_Check_Component.XTYPE(),
            Ext_grid_column_Check_Component.PROPERTIESOBJECT(),
            Ext_grid_column_Check_Component.EVENTS()
        )
        this.XTYPE = Ext_grid_column_Check_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_grid_column_Check_Component.PROPERTIESOBJECT());
        this.METHODS = this.extendArray(this.METHODS, Ext_grid_column_Check_Component.METHODS());
        this.EVENTS = this.extendArray(this.EVENTS, Ext_grid_column_Check_Component.EVENTS());
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
