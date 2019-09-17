import Ext_Container_Component from '../../Ext/Container';

export default class Ext_panel_Header_Component extends Ext_Container_Component {
//events
//configs

static XTYPE() {return 'panelheader'}
static PROPERTIESOBJECT() { return {
"glyph":["number","string"],
"icon":["string"],
"iconAlign":["'top'","'right'","'bottom'","'left'"],
"iconCls":["string"],
"position":["any"],
"title":["string","Ext.panel.Title"],
"titleAlign":["'left'","'center'","'right'"],
"titleRotation":["'auto'","'90'","'270'","'0'"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_panel_Header_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_panel_Header_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            
        )
        this.XTYPE = Ext_panel_Header_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_panel_Header_Component.PROPERTIESOBJECT());
        this.methods = this.extendArray(this.methods, Ext_panel_Header_Component.METHODS());
        this.events = this.extendArray(this.events, Ext_panel_Header_Component.EVENTS());

    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
