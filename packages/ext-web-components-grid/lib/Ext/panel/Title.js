import Ext_Component_Component from '../../Ext/Component';

export default class Ext_panel_Title_Component extends Ext_Component_Component {
//events
//configs

static XTYPE() {return 'paneltitle'}
static PROPERTIESOBJECT() { return {
"glyph":["number","string"],
"icon":["string"],
"iconAlign":["'top'","'right'","'bottom'","'left'"],
"iconCls":["string"],
"rotateIcon":["boolean"],
"rotation":["'90'","'270'","'0'"],
"text":["string"],
"textAlign":["'left'","'center'","'right'"],
"weight":["number"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_panel_Title_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_panel_Title_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            
        )
        this.XTYPE = Ext_panel_Title_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_panel_Title_Component.PROPERTIESOBJECT());
        this.methods = this.extendArray(this.methods, Ext_panel_Title_Component.METHODS());
        this.events = this.extendArray(this.events, Ext_panel_Title_Component.EVENTS());

    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
