import Ext_dataview_DataView_Component from '../../Ext/dataview/DataView';

export default class Ext_dataview_ChipView_Component extends Ext_dataview_DataView_Component {
//events
//configs

static XTYPE() {return 'chipview'}
static PROPERTIESOBJECT() { return {
"closable":["boolean"],
"closableField":["string"],
"closeHandler":["function","string"],
"displayField":["string"],
"displayTpl":["string","string[]","Ext.XTemplate"],
"iconClsField":["string"],
"iconField":["string"],
"itemTpl":["any"],
"scope":["object"],
"ui":["string","string[]"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_dataview_ChipView_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_dataview_ChipView_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            Ext_dataview_ChipView_Component.METHODS(),
            Ext_dataview_ChipView_Component.XTYPE(),
            Ext_dataview_ChipView_Component.PROPERTIESOBJECT(),
            Ext_dataview_ChipView_Component.EVENTS()
        )
        this.XTYPE = Ext_dataview_ChipView_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_dataview_ChipView_Component.PROPERTIESOBJECT());
        this.METHODS = this.extendArray(this.METHODS, Ext_dataview_ChipView_Component.METHODS());
        this.EVENTS = this.extendArray(this.EVENTS, Ext_dataview_ChipView_Component.EVENTS());
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
