import Ext_Component_Component from '../Ext/Component';

export default class Ext_Image_Component extends Ext_Component_Component {
//events
get onerror(){return this.getAttribute('onerror')};set onerror(onerror){this.setAttribute('onerror',onerror)}
get onload(){return this.getAttribute('onload')};set onload(onload){this.setAttribute('onload',onload)}
get ontap(){return this.getAttribute('ontap')};set ontap(ontap){this.setAttribute('ontap',ontap)}
//configs

static XTYPE() {return 'image'}
static PROPERTIESOBJECT() { return {
"backgroundCls":["string"],
"imageCls":["string"],
"mode":["string"],
"src":["string"],
}}
static EVENTS() { return [
{name:'error',parameters:'undefined,e'},
{name:'load',parameters:'undefined,e'},
{name:'tap',parameters:'undefined,e'},
]}
static METHODS() { return [
{ name:'updateSrc',function: function(newSrc) { return this.ext.updateSrc(newSrc) } },
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_Image_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_Image_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            Ext_Image_Component.METHODS(),
            Ext_Image_Component.XTYPE(),
            Ext_Image_Component.PROPERTIESOBJECT(),
            Ext_Image_Component.EVENTS()
        )
        this.XTYPE = Ext_Image_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_Image_Component.PROPERTIESOBJECT());
        this.METHODS = this.extendArray(this.METHODS, Ext_Image_Component.METHODS());
        this.EVENTS = this.extendArray(this.EVENTS, Ext_Image_Component.EVENTS());
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
