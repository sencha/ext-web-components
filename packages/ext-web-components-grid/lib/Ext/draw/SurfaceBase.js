import Ext_Widget_Component from '../../Ext/Widget';

export default class Ext_draw_SurfaceBase_Component extends Ext_Widget_Component {
//events
//configs

static XTYPE() {return ''}
static PROPERTIESOBJECT() { return {
}}
static EVENTS() { return [
]}
static METHODS() { return [
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_draw_SurfaceBase_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_draw_SurfaceBase_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            
        )
        this.XTYPE = Ext_draw_SurfaceBase_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_draw_SurfaceBase_Component.PROPERTIESOBJECT());
        this.methods = this.extendArray(this.methods, Ext_draw_SurfaceBase_Component.METHODS());
        this.events = this.extendArray(this.events, Ext_draw_SurfaceBase_Component.EVENTS());

    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
