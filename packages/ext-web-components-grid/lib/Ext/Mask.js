import Ext_Component_Component from '../Ext/Component';

export default class Ext_Mask_Component extends Ext_Component_Component {
//events
get ontap(){return this.getAttribute('ontap')};set ontap(ontap){this.setAttribute('ontap',ontap)}
//configs

static XTYPE() {return 'mask'}
static PROPERTIESOBJECT() { return {
"bottom":["any"],
"left":["any"],
"right":["any"],
"top":["any"],
"transparent":["boolean"],
}}
static EVENTS() { return [
{name:'tap',parameters:'undefined,e'},
]}
static METHODS() { return [
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_Mask_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_Mask_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            
        )
        this.XTYPE = Ext_Mask_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_Mask_Component.PROPERTIESOBJECT());
        this.methods = this.extendArray(this.methods, Ext_Mask_Component.METHODS());
        this.events = this.extendArray(this.events, Ext_Mask_Component.EVENTS());

    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
