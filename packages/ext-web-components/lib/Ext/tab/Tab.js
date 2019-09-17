import Ext_Button_Component from '../../Ext/Button';

export default class Ext_tab_Tab_Component extends Ext_Button_Component {
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
        for (var property in Ext_tab_Tab_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_tab_Tab_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor(propertiesobject, methods, events) {
        super (
            Object.assign(propertiesobject, Ext_tab_Tab_Component.PROPERTIESOBJECT()),
            //{propertiesobject, Ext_tab_Tab_Component.PROPERTIESOBJECT()},
            methods.concat(Ext_tab_Tab_Component.METHODS()),
            events.concat(Ext_tab_Tab_Component.EVENTS())



            //events.concat(Ext_tab_Tab_Component.EVENTS()),
            //propertiesobject.concat(Ext_tab_Tab_Component.PROPERTIESOBJECT()),
            //methods.concat(Ext_tab_Tab_Component.METHODS())

            //EwcBaseComponent.extendArray(events, Ext_tab_Tab_Component.EVENTS()),
            //EwcBaseComponent.extendArray(propertiesobject, Ext_tab_Tab_Component.PROPERTIESOBJECT()),
            //EwcBaseComponent.extendArray(methods, Ext_tab_Tab_Component.METHODS())
        )
        //this.XTYPE = Ext_tab_Tab_Component.XTYPE()
        //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_tab_Tab_Component.PROPERTIESOBJECT());
        //this.methods = this.extendArray(this.methods, Ext_tab_Tab_Component.METHODS());
        //this.events = this.extendArray(this.events, Ext_tab_Tab_Component.EVENTS());

    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
