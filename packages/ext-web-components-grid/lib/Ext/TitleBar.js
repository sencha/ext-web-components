import Ext_Container_Component from '../Ext/Container';

export default class Ext_TitleBar_Component extends Ext_Container_Component {
//events
//configs

static XTYPE() {return 'titlebar'}
static PROPERTIESOBJECT() { return {
"autoSize":["boolean"],
"border":["boolean"],
"cls":["string","string[]"],
"defaultButtonUI":["string"],
"defaultType":["string"],
"items":["array","object"],
"layout":["any"],
"maxButtonWidth":["string"],
"minHeight":["number","string"],
"title":["string"],
"titleAlign":["string"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
{ name:'updateTitle',function: function(newTitle) { return this.ext.updateTitle(newTitle) } },
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_TitleBar_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_TitleBar_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            
        )
        this.XTYPE = Ext_TitleBar_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_TitleBar_Component.PROPERTIESOBJECT());
        this.methods = this.extendArray(this.methods, Ext_TitleBar_Component.METHODS());
        this.events = this.extendArray(this.events, Ext_TitleBar_Component.EVENTS());

    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
