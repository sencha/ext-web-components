import Ext_panel_Panel_Component from '../../../Ext/panel/Panel';

export default class Ext_ux_colorpick_Selector_Component extends Ext_panel_Panel_Component {
//events
get oncancel(){return this.getAttribute('oncancel')};set oncancel(oncancel){this.setAttribute('oncancel',oncancel)}
get onchange(){return this.getAttribute('onchange')};set onchange(onchange){this.setAttribute('onchange',onchange)}
get onok(){return this.getAttribute('onok')};set onok(onok){this.setAttribute('onok',onok)}
//configs

static XTYPE() {return 'colorselector'}
static PROPERTIESOBJECT() { return {
"cancelButtonText":["string"],
"fieldPad":["number"],
"fieldWidth":["number"],
"okButtonText":["string"],
"showOkCancelButtons":["boolean"],
"showPreviousColor":["boolean"],
}}
static EVENTS() { return [
{name:'cancel',parameters:'undefined'},
{name:'change',parameters:'undefined,color,previousColor'},
{name:'ok',parameters:'undefined,color'},
]}
static METHODS() { return [
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_ux_colorpick_Selector_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_ux_colorpick_Selector_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            Ext_ux_colorpick_Selector_Component.METHODS(),
            Ext_ux_colorpick_Selector_Component.XTYPE(),
            Ext_ux_colorpick_Selector_Component.PROPERTIESOBJECT(),
            Ext_ux_colorpick_Selector_Component.EVENTS()
        )
        this.XTYPE = Ext_ux_colorpick_Selector_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_ux_colorpick_Selector_Component.PROPERTIESOBJECT());
        this.METHODS = this.extendArray(this.METHODS, Ext_ux_colorpick_Selector_Component.METHODS());
        this.EVENTS = this.extendArray(this.EVENTS, Ext_ux_colorpick_Selector_Component.EVENTS());
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
