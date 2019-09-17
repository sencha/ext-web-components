import Ext_Panel_Component from '../../Ext/Panel';

export default class Ext_menu_Menu_Component extends Ext_Panel_Component {
//events
get ongroupchange(){return this.getAttribute('ongroupchange')};set ongroupchange(ongroupchange){this.setAttribute('ongroupchange',ongroupchange)}
//configs

static XTYPE() {return 'menu'}
static PROPERTIESOBJECT() { return {
"align":["string"],
"allowOtherMenus":["boolean"],
"autoHide":["boolean"],
"groups":["object"],
"ignoreParentClicks":["boolean"],
"indented":["boolean"],
"mouseLeaveDelay":["number"],
"separator":["boolean"],
}}
static EVENTS() { return [
{name:'groupchange',parameters:'menu,groupName,newValue,oldValue'},
]}
static METHODS() { return [
{ name:'getItemFromEvent',function: function(e) { return this.ext.getItemFromEvent(e) } },
{ name:'handleItemOver',function: function(e,item) { return this.ext.handleItemOver(e,item) } },
{ name:'onMouseOver',function: function(e) { return this.ext.onMouseOver(e) } },
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_menu_Menu_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_menu_Menu_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor(propertiesobject, methods, events) {
        super (
            Object.assign(propertiesobject, Ext_menu_Menu_Component.PROPERTIESOBJECT()),
            //{propertiesobject, Ext_menu_Menu_Component.PROPERTIESOBJECT()},
            methods.concat(Ext_menu_Menu_Component.METHODS()),
            events.concat(Ext_menu_Menu_Component.EVENTS())



            //events.concat(Ext_menu_Menu_Component.EVENTS()),
            //propertiesobject.concat(Ext_menu_Menu_Component.PROPERTIESOBJECT()),
            //methods.concat(Ext_menu_Menu_Component.METHODS())

            //EwcBaseComponent.extendArray(events, Ext_menu_Menu_Component.EVENTS()),
            //EwcBaseComponent.extendArray(propertiesobject, Ext_menu_Menu_Component.PROPERTIESOBJECT()),
            //EwcBaseComponent.extendArray(methods, Ext_menu_Menu_Component.METHODS())
        )
        //this.XTYPE = Ext_menu_Menu_Component.XTYPE()
        //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_menu_Menu_Component.PROPERTIESOBJECT());
        //this.methods = this.extendArray(this.methods, Ext_menu_Menu_Component.METHODS());
        //this.events = this.extendArray(this.events, Ext_menu_Menu_Component.EVENTS());

    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
