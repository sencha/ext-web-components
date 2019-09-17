import Ext_field_Container_Component from '../../Ext/field/Container';

export default class Ext_froala_EditorField_Component extends Ext_field_Container_Component {
//events
get onchange(){return this.getAttribute('onchange')};set onchange(onchange){this.setAttribute('onchange',onchange)}
get onready(){return this.getAttribute('onready')};set onready(onready){this.setAttribute('onready',onready)}
//configs

static XTYPE() {return 'froalaeditorfield'}
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
        for (var property in Ext_froala_EditorField_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_froala_EditorField_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor(propertiesobject, methods, events) {
        super (
            Object.assign(propertiesobject, Ext_froala_EditorField_Component.PROPERTIESOBJECT()),
            //{propertiesobject, Ext_froala_EditorField_Component.PROPERTIESOBJECT()},
            methods.concat(Ext_froala_EditorField_Component.METHODS()),
            events.concat(Ext_froala_EditorField_Component.EVENTS())



            //events.concat(Ext_froala_EditorField_Component.EVENTS()),
            //propertiesobject.concat(Ext_froala_EditorField_Component.PROPERTIESOBJECT()),
            //methods.concat(Ext_froala_EditorField_Component.METHODS())

            //EwcBaseComponent.extendArray(events, Ext_froala_EditorField_Component.EVENTS()),
            //EwcBaseComponent.extendArray(propertiesobject, Ext_froala_EditorField_Component.PROPERTIESOBJECT()),
            //EwcBaseComponent.extendArray(methods, Ext_froala_EditorField_Component.METHODS())
        )
        //this.XTYPE = Ext_froala_EditorField_Component.XTYPE()
        //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_froala_EditorField_Component.PROPERTIESOBJECT());
        //this.methods = this.extendArray(this.methods, Ext_froala_EditorField_Component.METHODS());
        //this.events = this.extendArray(this.events, Ext_froala_EditorField_Component.EVENTS());

    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
