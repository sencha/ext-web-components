import Ext_menu_Item_Component from '../../Ext/menu/Item';

export default class Ext_menu_CheckItem_Component extends Ext_menu_Item_Component {
//events
get onbeforecheckchange(){return this.getAttribute('onbeforecheckchange')};set onbeforecheckchange(onbeforecheckchange){this.setAttribute('onbeforecheckchange',onbeforecheckchange)}
get oncheckchange(){return this.getAttribute('oncheckchange')};set oncheckchange(oncheckchange){this.setAttribute('oncheckchange',oncheckchange)}
//configs

static XTYPE() {return 'menucheckitem'}
static PROPERTIESOBJECT() { return {
"checkChangeDisabled":["boolean"],
"checked":["boolean"],
"checkHandler":["function","string"],
"hideOnClick":["boolean"],
"publishes":["string","string[]","object"],
"scope":["object"],
"submenuText":["string"],
"value":["string"],
}}
static EVENTS() { return [
{name:'beforecheckchange',parameters:'undefined,checked'},
{name:'checkchange',parameters:'undefined,checked'},
]}
static METHODS() { return [
{ name:'setChecked',function: function(checked,suppressEvents) { return this.ext.setChecked(checked,suppressEvents) } },
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_menu_CheckItem_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_menu_CheckItem_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            Ext_menu_CheckItem_Component.METHODS(),
            Ext_menu_CheckItem_Component.XTYPE(),
            Ext_menu_CheckItem_Component.PROPERTIESOBJECT(),
            Ext_menu_CheckItem_Component.EVENTS()
        )
        this.XTYPE = Ext_menu_CheckItem_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_menu_CheckItem_Component.PROPERTIESOBJECT());
        this.METHODS = this.extendArray(this.METHODS, Ext_menu_CheckItem_Component.METHODS());
        this.EVENTS = this.extendArray(this.EVENTS, Ext_menu_CheckItem_Component.EVENTS());
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
