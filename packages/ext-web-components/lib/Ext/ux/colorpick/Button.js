import Ext_Component_Component from '../../../Ext/Component';

export default class Ext_ux_colorpick_Button_Component extends Ext_Component_Component {
//events
get onchange(){return this.getAttribute('onchange')};set onchange(onchange){this.setAttribute('onchange',onchange)}
//configs

static XTYPE() {return 'colorbutton'}
static PROPERTIESOBJECT() { return {
"popup":["object"],
}}
static EVENTS() { return [
{name:'change',parameters:'undefined,color,previousColor'},
]}
static METHODS() { return [
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_ux_colorpick_Button_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_ux_colorpick_Button_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor(propertiesobject, methods, events) {
        super (
            Object.assign(propertiesobject, Ext_ux_colorpick_Button_Component.PROPERTIESOBJECT()),
            //{propertiesobject, Ext_ux_colorpick_Button_Component.PROPERTIESOBJECT()},
            methods.concat(Ext_ux_colorpick_Button_Component.METHODS()),
            events.concat(Ext_ux_colorpick_Button_Component.EVENTS())



            //events.concat(Ext_ux_colorpick_Button_Component.EVENTS()),
            //propertiesobject.concat(Ext_ux_colorpick_Button_Component.PROPERTIESOBJECT()),
            //methods.concat(Ext_ux_colorpick_Button_Component.METHODS())

            //EwcBaseComponent.extendArray(events, Ext_ux_colorpick_Button_Component.EVENTS()),
            //EwcBaseComponent.extendArray(propertiesobject, Ext_ux_colorpick_Button_Component.PROPERTIESOBJECT()),
            //EwcBaseComponent.extendArray(methods, Ext_ux_colorpick_Button_Component.METHODS())
        )
        //this.XTYPE = Ext_ux_colorpick_Button_Component.XTYPE()
        //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_ux_colorpick_Button_Component.PROPERTIESOBJECT());
        //this.methods = this.extendArray(this.methods, Ext_ux_colorpick_Button_Component.METHODS());
        //this.events = this.extendArray(this.events, Ext_ux_colorpick_Button_Component.EVENTS());

    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
