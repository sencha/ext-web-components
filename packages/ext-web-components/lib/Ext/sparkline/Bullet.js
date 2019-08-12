import Ext_sparkline_Base_Component from '../../Ext/sparkline/Base';

export default class Ext_sparkline_Bullet_Component extends Ext_sparkline_Base_Component {
//events
//configs

static XTYPE() {return 'sparklinebullet'}
static PROPERTIESOBJECT() { return {
"base":["number"],
"performanceColor":["string"],
"rangeColors":["string[]"],
"targetColor":["string"],
"targetWidth":["number"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_sparkline_Bullet_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_sparkline_Bullet_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            Ext_sparkline_Bullet_Component.METHODS(),
            Ext_sparkline_Bullet_Component.XTYPE(),
            Ext_sparkline_Bullet_Component.PROPERTIESOBJECT(),
            Ext_sparkline_Bullet_Component.EVENTS()
        )
        this.XTYPE = Ext_sparkline_Bullet_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_sparkline_Bullet_Component.PROPERTIESOBJECT());
        this.METHODS = this.extendArray(this.METHODS, Ext_sparkline_Bullet_Component.METHODS());
        this.EVENTS = this.extendArray(this.EVENTS, Ext_sparkline_Bullet_Component.EVENTS());
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
