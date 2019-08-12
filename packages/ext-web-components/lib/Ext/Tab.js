import Ext_Button_Component from '../Ext/Button';

export default class Ext_Tab_Component extends Ext_Button_Component {
//events
get onactivate(){return this.getAttribute('onactivate')};set onactivate(onactivate){this.setAttribute('onactivate',onactivate)}
get ondeactivate(){return this.getAttribute('ondeactivate')};set ondeactivate(ondeactivate){this.setAttribute('ondeactivate',ondeactivate)}
//configs

static XTYPE() {return 'tab'}
static PROPERTIESOBJECT() { return {
"active":["boolean"],
"closable":["boolean"],
"rotation":["string"],
"tabPosition":["string"],
"title":["string"],
}}
static EVENTS() { return [
{name:'activate',parameters:'undefined'},
{name:'deactivate',parameters:'undefined'},
]}
static METHODS() { return [
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_Tab_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_Tab_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            Ext_Tab_Component.METHODS(),
            Ext_Tab_Component.XTYPE(),
            Ext_Tab_Component.PROPERTIESOBJECT(),
            Ext_Tab_Component.EVENTS()
        )
        this.XTYPE = Ext_Tab_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_Tab_Component.PROPERTIESOBJECT());
        this.METHODS = this.extendArray(this.METHODS, Ext_Tab_Component.METHODS());
        this.EVENTS = this.extendArray(this.EVENTS, Ext_Tab_Component.EVENTS());
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
