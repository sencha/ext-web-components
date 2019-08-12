import Ext_Panel_Component from '../../Ext/Panel';

export default class Ext_tip_ToolTip_Component extends Ext_Panel_Component {
//events
//configs

static XTYPE() {return 'tooltip'}
static PROPERTIESOBJECT() { return {
"align":["string"],
"alignDelegate":["string"],
"allowOver":["boolean"],
"anchorToTarget":["boolean"],
"autoHide":["boolean"],
"delegate":["string"],
"dismissDelay":["number"],
"hideDelay":["number"],
"mouseOffset":["number[]"],
"quickShowInterval":["number"],
"showDelay":["number"],
"showOnTap":["boolean","string[]"],
"target":["Ext.Component","Ext.dom.Element"],
"trackMouse":["boolean"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
{ name:'clearTimers',function: function() { return this.ext.clearTimers() } },
{ name:'realignToTarget',function: function() { return this.ext.realignToTarget() } },
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_tip_ToolTip_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_tip_ToolTip_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            Ext_tip_ToolTip_Component.METHODS(),
            Ext_tip_ToolTip_Component.XTYPE(),
            Ext_tip_ToolTip_Component.PROPERTIESOBJECT(),
            Ext_tip_ToolTip_Component.EVENTS()
        )
        this.XTYPE = Ext_tip_ToolTip_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_tip_ToolTip_Component.PROPERTIESOBJECT());
        this.METHODS = this.extendArray(this.METHODS, Ext_tip_ToolTip_Component.METHODS());
        this.EVENTS = this.extendArray(this.EVENTS, Ext_tip_ToolTip_Component.EVENTS());
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
