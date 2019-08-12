import Ext_Component_Component from '../../../Ext/Component';

export default class Ext_ux_colorpick_ColorPreview_Component extends Ext_Component_Component {
//events
//configs

static XTYPE() {return 'colorpickercolorpreview'}
static PROPERTIESOBJECT() { return {
}}
static EVENTS() { return [
]}
static METHODS() { return [
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_ux_colorpick_ColorPreview_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_ux_colorpick_ColorPreview_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            Ext_ux_colorpick_ColorPreview_Component.METHODS(),
            Ext_ux_colorpick_ColorPreview_Component.XTYPE(),
            Ext_ux_colorpick_ColorPreview_Component.PROPERTIESOBJECT(),
            Ext_ux_colorpick_ColorPreview_Component.EVENTS()
        )
        this.XTYPE = Ext_ux_colorpick_ColorPreview_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_ux_colorpick_ColorPreview_Component.PROPERTIESOBJECT());
        this.METHODS = this.extendArray(this.METHODS, Ext_ux_colorpick_ColorPreview_Component.METHODS());
        this.EVENTS = this.extendArray(this.EVENTS, Ext_ux_colorpick_ColorPreview_Component.EVENTS());
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
