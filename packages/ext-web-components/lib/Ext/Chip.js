import Ext_Component_Component from '../Ext/Component';

export default class Ext_Chip_Component extends Ext_Component_Component {
//events
//configs

static XTYPE() {return 'chip'}
static PROPERTIESOBJECT() { return {
"closable":["boolean"],
"closeHandler":["function","string"],
"icon":["string"],
"iconCls":["string"],
"scope":["object"],
"text":["string"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_Chip_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_Chip_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            Ext_Chip_Component.METHODS(),
            Ext_Chip_Component.XTYPE(),
            Ext_Chip_Component.PROPERTIESOBJECT(),
            Ext_Chip_Component.EVENTS()
        )
        this.XTYPE = Ext_Chip_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_Chip_Component.PROPERTIESOBJECT());
        this.METHODS = this.extendArray(this.METHODS, Ext_Chip_Component.METHODS());
        this.EVENTS = this.extendArray(this.EVENTS, Ext_Chip_Component.EVENTS());
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
