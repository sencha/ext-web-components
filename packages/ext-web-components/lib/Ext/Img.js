import Ext_Component_Component from '../Ext/Component';

export default class Ext_Img_Component extends Ext_Component_Component {
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
        for (var property in Ext_Img_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_Img_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor(propertiesobject, methods, events) {
        super (
            Object.assign(propertiesobject, Ext_Img_Component.PROPERTIESOBJECT()),
            //{propertiesobject, Ext_Img_Component.PROPERTIESOBJECT()},
            methods.concat(Ext_Img_Component.METHODS()),
            events.concat(Ext_Img_Component.EVENTS())



            //events.concat(Ext_Img_Component.EVENTS()),
            //propertiesobject.concat(Ext_Img_Component.PROPERTIESOBJECT()),
            //methods.concat(Ext_Img_Component.METHODS())

            //EwcBaseComponent.extendArray(events, Ext_Img_Component.EVENTS()),
            //EwcBaseComponent.extendArray(propertiesobject, Ext_Img_Component.PROPERTIESOBJECT()),
            //EwcBaseComponent.extendArray(methods, Ext_Img_Component.METHODS())
        )
        //this.XTYPE = Ext_Img_Component.XTYPE()
        //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_Img_Component.PROPERTIESOBJECT());
        //this.methods = this.extendArray(this.methods, Ext_Img_Component.METHODS());
        //this.events = this.extendArray(this.events, Ext_Img_Component.EVENTS());

    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
