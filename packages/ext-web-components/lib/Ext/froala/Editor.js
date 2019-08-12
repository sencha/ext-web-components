import Ext_Component_Component from '../../Ext/Component';

export default class Ext_froala_Editor_Component extends Ext_Component_Component {
//events
get onchange(){return this.getAttribute('onchange')};set onchange(onchange){this.setAttribute('onchange',onchange)}
get onready(){return this.getAttribute('onready')};set onready(onready){this.setAttribute('onready',onready)}
//configs

static XTYPE() {return 'froalaeditor'}
static PROPERTIESOBJECT() { return {
}}
static EVENTS() { return [
{name:'change',parameters:'undefined,the'},
{name:'ready',parameters:'undefined,the'},
]}
static METHODS() { return [
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_froala_Editor_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_froala_Editor_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            Ext_froala_Editor_Component.METHODS(),
            Ext_froala_Editor_Component.XTYPE(),
            Ext_froala_Editor_Component.PROPERTIESOBJECT(),
            Ext_froala_Editor_Component.EVENTS()
        )
        this.XTYPE = Ext_froala_Editor_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_froala_Editor_Component.PROPERTIESOBJECT());
        this.METHODS = this.extendArray(this.METHODS, Ext_froala_Editor_Component.METHODS());
        this.EVENTS = this.extendArray(this.EVENTS, Ext_froala_Editor_Component.EVENTS());
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
