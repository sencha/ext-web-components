import Ext_Button_Component from '../../Ext/Button';

export default class Ext_field_FileButton_Component extends Ext_Button_Component {
//events
get onchange(){return this.getAttribute('onchange')};set onchange(onchange){this.setAttribute('onchange',onchange)}
//configs

static XTYPE() {return 'filebutton'}
static PROPERTIESOBJECT() { return {
"accept":["string"],
"capture":["string"],
"multiple":["boolean"],
"value":["string"],
}}
static EVENTS() { return [
{name:'change',parameters:'undefined,newValue,oldValue'},
]}
static METHODS() { return [
{ name:'getFiles',function: function() { return this.ext.getFiles() } },
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_field_FileButton_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_field_FileButton_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor(propertiesobject, methods, events) {
        super (
            Object.assign(propertiesobject, Ext_field_FileButton_Component.PROPERTIESOBJECT()),
            //{propertiesobject, Ext_field_FileButton_Component.PROPERTIESOBJECT()},
            methods.concat(Ext_field_FileButton_Component.METHODS()),
            events.concat(Ext_field_FileButton_Component.EVENTS())



            //events.concat(Ext_field_FileButton_Component.EVENTS()),
            //propertiesobject.concat(Ext_field_FileButton_Component.PROPERTIESOBJECT()),
            //methods.concat(Ext_field_FileButton_Component.METHODS())

            //EwcBaseComponent.extendArray(events, Ext_field_FileButton_Component.EVENTS()),
            //EwcBaseComponent.extendArray(propertiesobject, Ext_field_FileButton_Component.PROPERTIESOBJECT()),
            //EwcBaseComponent.extendArray(methods, Ext_field_FileButton_Component.METHODS())
        )
        //this.XTYPE = Ext_field_FileButton_Component.XTYPE()
        //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_field_FileButton_Component.PROPERTIESOBJECT());
        //this.methods = this.extendArray(this.methods, Ext_field_FileButton_Component.METHODS());
        //this.events = this.extendArray(this.events, Ext_field_FileButton_Component.EVENTS());

    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
